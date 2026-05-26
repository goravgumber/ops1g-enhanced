/**
 * Analytics - Intent Distribution Chart
 * Visualizes hot/warm/cold lead distribution using a pie chart
 */
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { intentDistributionData } from "@/lib/analytics-store";
import { IntentChip } from "@/components/atoms";

const COLORS = {
  hot: "var(--color-intent-hot)",
  warm: "var(--color-intent-warm)",
  cold: "var(--color-intent-cold)",
};

export function IntentDistributionChart() {
  const total = intentDistributionData.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="rounded-lg border border-border bg-card p-4 space-y-4">
      <h3 className="font-semibold text-sm">Lead Quality Distribution</h3>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={intentDistributionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ intent, percentage }) => `${percentage}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="count"
          >
            {intentDistributionData.map((entry) => (
              <Cell key={`cell-${entry.intent}`} fill={COLORS[entry.intent]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value} leads`, "Count"]}
            contentStyle={{
              backgroundColor: "var(--color-popover)",
              border: `1px solid var(--color-border)`,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-2">
        {intentDistributionData.map((d) => (
          <div key={d.intent} className="border border-border rounded-lg p-3 text-center">
            <IntentChip intent={d.intent} className="mb-2 justify-center" />
            <div className="text-lg font-semibold text-foreground">{d.count}</div>
            <div className="text-[11px] text-muted-foreground">{d.percentage}% of pipeline</div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <strong>{total}</strong> total leads • Hot leads are {Math.round(((intentDistributionData[0]?.count || 0) / total) * 100)}% of pipeline
        </div>
      </div>
    </div>
  );
}
