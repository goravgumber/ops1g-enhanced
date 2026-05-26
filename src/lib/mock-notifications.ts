/**
 * Mock Notification Data Generator
 *
 * Generates realistic mock notifications for different categories:
 * - Lead updates (new leads, assignments, stage changes)
 * - Follow-up reminders (overdue, due soon)
 * - Tour scheduled notifications
 * - Inventory alerts
 * - Sequence actions
 *
 * Used to demonstrate the notification center with realistic data.
 */
import type { AppNotification, NotifSeverity } from "./notifications";
import type { Role } from "./types";

export type NotificationCategory = "lead" | "followup" | "tour" | "inventory" | "sequence" | "system";

export const mockNotifications: AppNotification[] = [
  {
    id: "notif-1",
    ts: Date.now() - 5 * 60 * 1000, // 5 mins ago
    read: false,
    audience: ["flow-ops"],
    severity: "urgent",
    title: "Hot lead assigned to you",
    body: "Priya Sharma (hot intent) has been assigned to your queue. Located in Bandra West.",
    href: "/myt/leads",
    kind: "lead.assigned",
    leadId: "lead-1",
    category: "lead",
    senderName: "Flow Ops System",
  },
  {
    id: "notif-2",
    ts: Date.now() - 15 * 60 * 1000, // 15 mins ago
    read: false,
    audience: ["tcm"],
    severity: "warn",
    title: "Follow-up overdue",
    body: "Follow-up with Rajesh Kumar was due 2 hours ago. Respond now to stay on track.",
    href: "/follow-ups",
    kind: "system",
    leadId: "lead-2",
    category: "followup",
    senderName: "CRM",
  },
  {
    id: "notif-3",
    ts: Date.now() - 30 * 60 * 1000, // 30 mins ago
    read: true,
    audience: ["tcm"],
    severity: "info",
    title: "Tour confirmed",
    body: "Your tour with Ananya Patel is confirmed for tomorrow at 2:30 PM. Property: Marina Bay Residence.",
    href: "/calendar",
    kind: "tour.scheduled",
    tourId: "tour-1",
    category: "tour",
    senderName: "Calendar",
  },
  {
    id: "notif-4",
    ts: Date.now() - 60 * 60 * 1000, // 1 hour ago
    read: true,
    audience: ["owner"],
    severity: "info",
    title: "Inventory alert",
    body: "Unit 405 at Phoenix Tower is now available. 3 BHK, ₹2.1Cr. Tour pending.",
    href: "/owner/inventory",
    kind: "owner.room_updated",
    category: "inventory",
    senderName: "Inventory System",
  },
  {
    id: "notif-5",
    ts: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
    read: true,
    audience: ["flow-ops"],
    severity: "success",
    title: "Booking closed",
    body: "Vikram Singh completed booking at Marina Bay. Amount: ₹1.85Cr. Commission earned: ₹5,55,000",
    href: "/leaderboard",
    kind: "booking.closed",
    leadId: "lead-3",
    category: "system",
    senderName: "Deals",
  },
  {
    id: "notif-6",
    ts: Date.now() - 3 * 60 * 60 * 1000, // 3 hours ago
    read: true,
    audience: ["tcm"],
    severity: "urgent",
    title: "High-priority handoff",
    body: "Flow Ops needs your input on dealing objection with Neha Desai (lot confusion). Check handoffs.",
    href: "/handoffs",
    kind: "handoff.sent",
    leadId: "lead-4",
    category: "system",
    senderName: "Flow Ops",
  },
  {
    id: "notif-7",
    ts: Date.now() - 4 * 60 * 60 * 1000, // 4 hours ago
    read: true,
    audience: ["flow-ops", "hr"],
    severity: "info",
    title: "New lead in pipeline",
    body: "Deepak Verma (warm intent) added to pipeline. Suggested property: Crystal Heights.",
    href: "/leads",
    kind: "lead.added",
    leadId: "lead-5",
    category: "lead",
    senderName: "Lead Intake",
  },
  {
    id: "notif-8",
    ts: Date.now() - 5 * 60 * 60 * 1000, // 5 hours ago
    read: true,
    audience: ["tcm"],
    severity: "info",
    title: "Sequence action triggered",
    body: "WhatsApp template 'Site Visit Reminder' sent to Sunita Iyer. Follow up if no response in 24h.",
    href: "/sequences",
    kind: "system",
    leadId: "lead-6",
    category: "sequence",
    senderName: "Outreach",
  },
  {
    id: "notif-9",
    ts: Date.now() - 6 * 60 * 60 * 1000, // 6 hours ago
    read: true,
    audience: ["tcm"],
    severity: "warn",
    title: "Follow-up due soon",
    body: "You have 3 follow-ups due in the next 2 hours. Check your queue.",
    href: "/follow-ups",
    kind: "system",
    category: "followup",
    senderName: "Task Engine",
  },
  {
    id: "notif-10",
    ts: Date.now() - 8 * 60 * 60 * 1000, // 8 hours ago
    read: true,
    audience: ["flow-ops"],
    severity: "success",
    title: "Tour completed successfully",
    body: "Amit Patel completed tour at Skyline Heights. Client very interested, warm to hot transition.",
    href: "/tours",
    kind: "tour.completed",
    tourId: "tour-2",
    category: "tour",
    senderName: "Tour System",
  },
];

/**
 * Generate more mock notifications dynamically
 */
export function generateMockNotification(
  category: NotificationCategory,
  role: Role,
  leadName?: string,
  propertyName?: string
): Omit<AppNotification, "id" | "ts"> {
  const names = [
    "Priya Sharma", "Rajesh Kumar", "Ananya Patel", "Vikram Singh", "Neha Desai",
    "Deepak Verma", "Sunita Iyer", "Amit Patel", "Smita Gupta", "Rohan Iyer",
  ];
  const properties = [
    "Marina Bay", "Phoenix Tower", "Crystal Heights", "Skyline Heights",
    "Bandra West", "Worli Seaface", "Colaba Causeway", "Kala Ghoda",
  ];

  const fallbackName = names[Math.floor(Math.random() * names.length)];
  const fallbackProperty = properties[Math.floor(Math.random() * properties.length)];

  const templates: Record<NotificationCategory, Omit<AppNotification, "id" | "ts" | "category">> = {
    lead: {
      read: false,
      audience: ["flow-ops", "hr"],
      severity: "info",
      title: "New lead in pipeline",
      body: `${leadName || fallbackName} (warm intent) added. Suggested: ${propertyName || fallbackProperty}.`,
      href: "/leads",
      kind: "lead.added",
      leadId: `lead-${Math.random().toString(36).slice(7)}`,
      senderName: "Lead Intake",
    },
    followup: {
      read: false,
      audience: ["tcm"],
      severity: Math.random() > 0.5 ? "warn" : "info",
      title: Math.random() > 0.5 ? "Follow-up overdue" : "Follow-up reminder",
      body: `Follow-up with ${leadName || fallbackName} is ${Math.random() > 0.5 ? "overdue" : "due in 2 hours"}.`,
      href: "/follow-ups",
      kind: "system",
      leadId: `lead-${Math.random().toString(36).slice(7)}`,
      senderName: "Task Engine",
    },
    tour: {
      read: Math.random() > 0.3,
      audience: ["tcm", "flow-ops"],
      severity: "info",
      title: "Tour scheduled",
      body: `Tour with ${leadName || fallbackName} at ${propertyName || fallbackProperty}. ${new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString()} at 2:30 PM.`,
      href: "/calendar",
      kind: "tour.scheduled",
      tourId: `tour-${Math.random().toString(36).slice(7)}`,
      senderName: "Calendar",
    },
    inventory: {
      read: Math.random() > 0.4,
      audience: ["owner", "flow-ops"],
      severity: "info",
      title: "Inventory alert",
      body: `${propertyName || fallbackProperty} - New unit available. 3 BHK, ₹2.1Cr. Tour pending.`,
      href: "/owner/inventory",
      kind: "owner.room_updated",
      senderName: "Inventory System",
    },
    sequence: {
      read: Math.random() > 0.5,
      audience: ["tcm"],
      severity: "info",
      title: "Sequence action triggered",
      body: `Outreach message sent to ${leadName || fallbackName}. Follow up if no response in 24h.`,
      href: "/sequences",
      kind: "system",
      leadId: `lead-${Math.random().toString(36).slice(7)}`,
      senderName: "Outreach",
    },
    system: {
      read: Math.random() > 0.6,
      audience: [role],
      severity: Math.random() > 0.7 ? "urgent" : "info",
      title: "System notification",
      body: "Your CRM system has processed new updates.",
      href: "/",
      kind: "system",
      senderName: "CRM",
    },
  };

  return { ...templates[category], category } as Omit<AppNotification, "id" | "ts">;
}

/**
 * Filter notifications by category
 */
export function filterNotificationsByCategory(
  notifications: AppNotification[],
  category: NotificationCategory | null
): AppNotification[] {
  if (!category) return notifications;
  return notifications.filter((n) => (n as any).category === category);
}

/**
 * Get notification stats
 */
export function getNotificationStats(notifications: AppNotification[]) {
  return {
    total: notifications.length,
    unread: notifications.filter((n) => !n.read).length,
    byCategory: {
      lead: notifications.filter((n) => (n as any).category === "lead").length,
      followup: notifications.filter((n) => (n as any).category === "followup").length,
      tour: notifications.filter((n) => (n as any).category === "tour").length,
      inventory: notifications.filter((n) => (n as any).category === "inventory").length,
      sequence: notifications.filter((n) => (n as any).category === "sequence").length,
      system: notifications.filter((n) => (n as any).category === "system").length,
    },
    bySeverity: {
      urgent: notifications.filter((n) => n.severity === "urgent").length,
      warn: notifications.filter((n) => n.severity === "warn").length,
      info: notifications.filter((n) => n.severity === "info").length,
      success: notifications.filter((n) => n.severity === "success").length,
    },
  };
}
