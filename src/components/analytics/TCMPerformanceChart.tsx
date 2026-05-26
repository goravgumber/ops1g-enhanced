/**
 * Analytics - TCM Performance Chart
 * Shows individual TCM performance metrics and leaderboard
 */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { tcmPerformanceData } from "@/lib/analytics-store";
import { Trophy, TrendingUp } from "lucide-react";

export function TCMPerformanceChart() {
  const sortedByBookings = [...tcmPerformanceData].sort((a, b) => b.bookings - a.bookings);
  const topTCM = sortedByBookings[0];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border bg-gradient-to-br from-accent/10 to-accent/5 p-4">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="h-5 w-5 text-accent" />
          <h3 className="font-semibold text-sm">Top Performer</h3>
        </div>
        {topTCM && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">TCM</div>
              <div className="font-semibold text-foreground mt-1">{topTCM.name}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">Bookings</div>
              <div className="font-semibold text-accent text-lg mt-1">{topTCM.bookings}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">Conversion</div>
              <div className="font-semibold text-success text-lg mt-1">{topTCM.conversionRate.toFixed(1)}%</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">Revenue</div>
              <div className="font-semibold text-warning text-lg mt-1">₹{topTCM.revenue}L</div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="font-semibold text-sm mb-4">Bookings by TCM</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={tcmPerformanceData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fontSize: 10 }}
            />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Bar 
              dataKey="bookings" 
              fill="var(--color-accent)" 
              radius={[8, 8, 0, 0]}
              name="Bookings"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-semibold text-sm mb-3">Leads by TCM</h3>
          <div className="space-y-2">
            {tcmPerformanceData.map((tcm) => (
              <div key={tcm.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{tcm.name}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 rounded-full bg-accent/30 w-16">
                    <div 
                      className="h-full rounded-full bg-accent" 
                      style={{ width: `${(tcm.leads / tcmPerformanceData[0]?.leads) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground w-8 text-right">{tcm.leads}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="font-semibold text-sm mb-3">Conversion Rate</h3>
          <div className="space-y-2">
            {[...tcmPerformanceData].sort((a, b) => b.conversionRate - a.conversionRate).map((tcm) => (
              <div key={tcm.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{tcm.name}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 rounded-full bg-success/30 w-16">
                    <div 
                      className="h-full rounded-full bg-success" 
                      style={{ width: `${tcm.conversionRate}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-success w-10 text-right">{tcm.conversionRate.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="font-semibold text-sm mb-3">Revenue Generation</h3>
        <div className="space-y-2">
          {[...tcmPerformanceData].sort((a, b) => b.revenue - a.revenue).map((tcm, idx) => (
            <div key={tcm.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/40 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="text-xs font-bold text-muted-foreground w-5">#{idx + 1}</div>
                <span className="text-sm text-foreground truncate">{tcm.name}</span>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <TrendingUp className="h-3.5 w-3.5 text-success" />
                <span className="text-sm font-semibold text-warning">₹{tcm.revenue}L</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
