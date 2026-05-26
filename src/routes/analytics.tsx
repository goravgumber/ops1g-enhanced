import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";
import { KpiCard } from "@/components/atoms";
import { LeadFunnelChart } from "@/components/analytics/LeadFunnelChart";
import { IntentDistributionChart } from "@/components/analytics/IntentDistributionChart";
import { ActivityMetricsChart } from "@/components/analytics/ActivityMetricsChart";
import { SequencePerformanceChart } from "@/components/analytics/SequencePerformanceChart";
import { TCMPerformanceChart } from "@/components/analytics/TCMPerformanceChart";
import { getAnalyticsSummary } from "@/lib/analytics-store";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics Dashboard — Gharpayy" },
      { name: "description", content: "Real-time CRM analytics, performance metrics, and business intelligence." },
    ],
  }),
  component: AnalyticsDashboard,
});

function AnalyticsDashboard() {
  const summary = getAnalyticsSummary();

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-accent" />
            </div>
            <h1 className="text-2xl font-display font-semibold">Analytics Dashboard</h1>
          </div>
          <p className="text-sm text-muted-foreground">Monitor your CRM performance, team metrics, and pipeline health.</p>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KpiCard 
            label="Total Leads" 
            value={summary.totalLeads} 
            sub="In pipeline" 
            tone="accent"
          />
          <KpiCard 
            label="Conversion Rate" 
            value={`${summary.conversionRate}%`} 
            sub="Full funnel" 
            tone="success"
          />
          <KpiCard 
            label="Total Bookings" 
            value={summary.totalBookings} 
            sub="Closed deals" 
            tone="warning"
          />
          <KpiCard 
            label="Revenue Generated" 
            value={`₹${summary.totalRevenue}L`} 
            sub="All time" 
            tone="accent"
          />
          <KpiCard 
            label="Avg Deal Size" 
            value={`₹${summary.avgDealSize}L`} 
            sub="Per booking" 
            tone="info"
          />
          <KpiCard 
            label="Active Sequences" 
            value={summary.activeSequences} 
            sub="Outreach campaigns" 
            tone="success"
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lead Funnel - spans 2 columns */}
          <div className="lg:col-span-2">
            <LeadFunnelChart />
          </div>

          {/* Intent Distribution - spans 1 column */}
          <div>
            <IntentDistributionChart />
          </div>
        </div>

        {/* Activity Metrics */}
        <ActivityMetricsChart />

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SequencePerformanceChart />
          <TCMPerformanceChart />
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-sm">Top TCM</h3>
            </div>
            <div>
              <div className="text-2xl font-semibold text-foreground">{summary.topTCM?.name}</div>
              <div className="text-xs text-muted-foreground mt-2">
                {summary.topTCM?.bookings} bookings • ₹{summary.topTCM?.revenue}L revenue
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-info" />
              <h3 className="font-semibold text-sm">Pipeline Health</h3>
            </div>
            <div>
              <div className="text-2xl font-semibold text-foreground">{summary.totalTours}</div>
              <div className="text-xs text-muted-foreground mt-2">tours scheduled this period</div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <h3 className="font-semibold text-sm">Win Rate Trend</h3>
            </div>
            <div>
              <div className="text-2xl font-semibold text-success">+2.3%</div>
              <div className="text-xs text-muted-foreground mt-2">vs previous period</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
