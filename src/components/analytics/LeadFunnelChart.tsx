/**
 * Analytics - Lead Funnel Chart
 * Visualizes the lead pipeline conversion at each stage using Recharts
 */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { leadFunnelData } from "@/lib/analytics-store";
import { KpiCard } from "@/components/atoms";

export function LeadFunnelChart() {
  const totalLeads = leadFunnelData[0]?.count || 0;
  const booked = leadFunnelData[leadFunnelData.length - 1]?.count || 0;
  const overallConversion = totalLeads > 0 ? ((booked / totalLeads) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard label="New Leads" value={totalLeads} sub="This period" tone="accent" />
        <KpiCard label="Tours Scheduled" value={leadFunnelData[2]?.count || 0} sub="41% conversion" tone="info" />
        <KpiCard label="Booked" value={booked} sub="Closed deals" tone="success" />
        <KpiCard label="Conversion" value={`${overallConversion}%`} sub="Full funnel" tone="warning" />
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="font-semibold text-sm mb-4">Lead Funnel Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leadFunnelData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="stage" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: `1px solid var(--color-border)`,
              }}
              formatter={(value) => [`${value} leads`, "Count"]}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar 
              dataKey="count" 
              fill="var(--color-accent)" 
              radius={[8, 8, 0, 0]}
              name="Leads"
            />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {leadFunnelData.map((d, i) => (
            <div key={d.stage} className="border border-border rounded-lg p-3 bg-muted/30">
              <div className="font-medium text-foreground mb-1">{d.stage}</div>
              <div className="text-lg font-semibold text-accent mb-1">{d.count}</div>
              {i > 0 && (
                <div className={`text-[10px] ${d.conversionRate >= 50 ? "text-success" : "text-warning"}`}>
                  {d.conversionRate.toFixed(1)}% conversion
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
