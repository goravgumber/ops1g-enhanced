import { useEffect, useRef, useState } from "react";
import { Bell, CheckCheck, Inbox, AlertTriangle, Sparkles, Circle, Zap, Calendar, AlertCircle, Package } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  useNotifications,
  useUnreadCount,
  startNotificationsBridge,
  type AppNotification,
  type NotifSeverity,
  type NotificationCategory,
} from "@/lib/notifications";
import type { Role } from "@/lib/types";
import { useApp } from "@/lib/store";

const sevDot: Record<NotifSeverity, string> = {
  info: "bg-info",
  success: "bg-success",
  warn: "bg-warning",
  urgent: "bg-destructive",
};

const categoryIcons: Record<NotificationCategory, typeof AlertTriangle> = {
  lead: Sparkles,
  followup: AlertCircle,
  tour: Calendar,
  inventory: Package,
  sequence: Zap,
  system: AlertTriangle,
};

function timeAgo(ts: number, now: number): string {
  const s = Math.max(1, Math.floor((now - ts) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

const CATEGORY_LABELS: Record<NotificationCategory, string> = {
  lead: "Leads",
  followup: "Follow-ups",
  tour: "Tours",
  inventory: "Inventory",
  sequence: "Sequences",
  system: "System",
};

export function NotificationCenter({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [filter, setFilter] = useState<NotificationCategory | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => { startNotificationsBridge(); }, []);
  useEffect(() => {
    if (!open) return;
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const currentTcmId = useApp((s) => s.currentTcmId);
  const unread = useUnreadCount(role, role === "tcm" ? currentTcmId : undefined);
  const items = useNotifications((s) => s.items);
  const markAllRead = useNotifications((s) => s.markAllRead);
  const markRead = useNotifications((s) => s.markRead);

  const myId = role === "tcm" ? currentTcmId : undefined;
  const visible: AppNotification[] = items.filter(
    (n) =>
      (n.audience.length === 0 || n.audience.includes(role)) &&
      (n.recipientId ? n.recipientId === myId : true) &&
      (filter ? (n as any).category === filter : true),
  );

  // Calculate category counts
  const categoryStats = {
    lead: items.filter((n) => (n as any).category === "lead" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
    followup: items.filter((n) => (n as any).category === "followup" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
    tour: items.filter((n) => (n as any).category === "tour" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
    inventory: items.filter((n) => (n as any).category === "inventory" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
    sequence: items.filter((n) => (n as any).category === "sequence" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
    system: items.filter((n) => (n as any).category === "system" && !n.read && (n.audience.length === 0 || n.audience.includes(role))).length,
  };

  const categories: NotificationCategory[] = ["lead", "followup", "tour", "inventory", "sequence", "system"];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center transition-colors"
        aria-label="Notifications"
        aria-expanded={open}
      >
        <Bell className="h-4 w-4 text-muted-foreground" />
        {unread > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-destructive text-destructive-foreground text-[9px] font-mono font-semibold flex items-center justify-center ring-2 ring-background">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-[420px] max-w-[95vw] rounded-lg border border-border bg-popover text-popover-foreground shadow-2xl z-50"
          role="dialog"
          aria-label="Notifications"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-accent" />
              Inbox
              {unread > 0 && (
                <span className="text-[10px] font-mono rounded-full bg-destructive/15 text-destructive px-2 py-0.5">
                  {unread} new
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => markAllRead(role, role === "tcm" ? currentTcmId : undefined)}
              disabled={unread === 0}
              className="text-[11px] text-muted-foreground hover:text-foreground disabled:opacity-40 inline-flex items-center gap-1 transition-colors"
            >
              <CheckCheck className="h-3 w-3" /> Mark all read
            </button>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/50 overflow-x-auto scrollbar-thin">
            <button
              onClick={() => setFilter(null)}
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors",
                filter === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              All
            </button>
            {categories.map((cat) => {
              const count = categoryStats[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1",
                    filter === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  <span>{CATEGORY_LABELS[cat]}</span>
                  {count > 0 && (
                    <span className="ml-0.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-[9px] font-bold bg-background/50">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="max-h-[480px] overflow-y-auto scrollbar-thin">
            {visible.length === 0 ? (
              <div className="px-4 py-12 text-center text-xs text-muted-foreground">
                <Inbox className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <div>
                  {filter ? `No ${CATEGORY_LABELS[filter]?.toLowerCase()} notifications` : "You're all caught up."}
                </div>
              </div>
            ) : (
              visible.slice(0, 50).map((n) => {
                const Icon = categoryIcons[(n as any).category || "system"];
                const Body = (
                  <div className="flex gap-3 px-4 py-3 hover:bg-muted/40 transition-colors border-b border-border/50 last:border-b-0">
                    <div className={cn("mt-0.5 h-3 w-3 rounded-full flex-shrink-0", sevDot[n.severity])} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                        <span className={cn("text-xs font-semibold truncate", n.read ? "text-muted-foreground" : "text-foreground")}>
                          {n.title}
                        </span>
                        {!n.read && <Circle className="h-1.5 w-1.5 fill-accent text-accent shrink-0" />}
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-2 mb-1">{n.body}</div>
                      <div className="text-[10px] text-muted-foreground/70 font-mono">{timeAgo(n.ts, now)} ago</div>
                    </div>
                    {n.severity === "urgent" && <AlertTriangle className="h-3.5 w-3.5 text-destructive shrink-0 mt-0.5" />}
                  </div>
                );
                const onClick = () => { markRead(n.id); setOpen(false); };
                return n.href ? (
                  <Link key={n.id} to={n.href} onClick={onClick} className="block">
                    {Body}
                  </Link>
                ) : (
                  <button key={n.id} type="button" onClick={onClick} className="block w-full text-left">
                    {Body}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
