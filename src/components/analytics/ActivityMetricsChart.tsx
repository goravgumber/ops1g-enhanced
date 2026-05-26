/**
 * Analytics - Activity Metrics Chart
 * Shows daily trends of leads, tours, bookings, and revenue
 */
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { dailyMetricsData, getMetricsForRange } from "@/lib/analytics-store";
import { KpiCard } from "@/components/atoms";

export function ActivityMetricsChart() {
  const metrics = getMetricsForRange(0, dailyMetricsData.length);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="Total Leads" value={metrics.totalLeads} sub={`${metrics.avgLeadsPerDay}/day avg`} tone="accent" />
        <KpiCard label="Total Tours" value={metrics.totalTours} sub={`${metrics.avgToursPerDay}/day avg`} tone="info" />
        <KpiCard label="Total Bookings" value={metrics.totalBookings} sub={`${metrics.avgBookingsPerDay}/day avg`} tone="success" />
        <KpiCard label="Revenue Generated" value={`₹${metrics.totalRevenue}L`} sub="All periods" tone="warning" />
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="font-semibold text-sm mb-4">Activity Trends (Last 14 Days)</h3>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={dailyMetricsData}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-info)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-info)" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 11 }}
              style={{ color: "var(--color-muted-foreground)" }}
            />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area 
              type="monotone" 
              dataKey="leads" 
              stroke="var(--color-accent)" 
              fillOpacity={1} 
              fill="url(#colorLeads)"
              name="New Leads"
            />
            <Area 
              type="monotone" 
              dataKey="tours" 
              stroke="var(--color-info)" 
              fillOpacity={1} 
              fill="url(#colorTours)"
              name="Tours Scheduled"
            />
            <Area 
              type="monotone" 
              dataKey="bookings" 
              stroke="var(--color-success)" 
              fillOpacity={1} 
              fill="url(#colorBookings)"
              name="Bookings"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="font-semibold text-sm mb-3">Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dailyMetricsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} label={{ value: "₹ Lakhs", angle: -90, position: "insideLeft" }} />
            <Tooltip 
              formatter={(value) => [`₹${value}L`, "Revenue"]}
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="var(--color-warning)" 
              dot={{ fill: "var(--color-warning)", r: 4 }}
              activeDot={{ r: 6 }}
              strokeWidth={2}
              name="Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
