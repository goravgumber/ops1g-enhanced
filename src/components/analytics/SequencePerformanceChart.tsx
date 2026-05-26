/**
 * Analytics - Sequence Performance Chart
 * Shows performance metrics for different outreach sequences
 */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { sequencePerformanceData } from "@/lib/analytics-store";

export function SequencePerformanceChart() {
  const totalSent = sequencePerformanceData.reduce((sum, s) => sum + s.sent, 0);
  const totalConverted = sequencePerformanceData.reduce((sum, s) => sum + s.converted, 0);
  const overallConversion = ((totalConverted / totalSent) * 100).toFixed(2);

  return (
    <div className="rounded-lg border border-border bg-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm">Outreach Sequence Performance</h3>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Overall Conversion</div>
          <div className="text-lg font-semibold text-accent">{overallConversion}%</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sequencePerformanceData}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 11 }}
          />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip 
            contentStyle={{
              backgroundColor: "var(--color-popover)",
              border: `1px solid var(--color-border)`,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="sent" name="Sent" fill="var(--color-muted)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="responded" name="Responded" fill="var(--color-info)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="converted" name="Converted" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="space-y-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Sequence Details</div>
        <div className="space-y-2">
          {sequencePerformanceData.map((seq) => (
            <div key={seq.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-muted/30">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-sm truncate">{seq.name}</div>
                <div className="text-[11px] text-muted-foreground">
                  {seq.sent} sent • {seq.responded} responses • {seq.converted} conversions
                </div>
              </div>
              <div className="text-right ml-4">
                <div className="font-semibold text-accent">{seq.conversionRate.toFixed(1)}%</div>
                <div className="text-[10px] text-muted-foreground">conversion</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
