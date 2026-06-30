import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

function TicketChart({ title, data, type = "pie", onSliceClick }) {
	return (
		<div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
			<h2 className="text-base font-semibold text-slate-900 mb-3">{title}</h2>

			<ResponsiveContainer width="100%" height={240}>
				{type === "pie" ? (
					<PieChart>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={85}
							onClick={onSliceClick}
							style={{ cursor: onSliceClick ? "pointer" : "default" }}
							labelLine={false}
							label={({
								cx,
								cy,
								midAngle,
								innerRadius,
								outerRadius,
								percent,
							}) => {
								if (percent < 0.05) return null;

								const RADIAN = Math.PI / 180;
								const radius = innerRadius + (outerRadius - innerRadius) * 0.6;

								const x = cx + radius * Math.cos(-midAngle * RADIAN);
								const y = cy + radius * Math.sin(-midAngle * RADIAN);

								return (
									<text
										x={x}
										y={y}
										fill="white"
										textAnchor="middle"
										dominantBaseline="central"
										fontSize={12}
										fontWeight="bold"
										pointerEvents="none"
									>
										{(percent * 100).toFixed(0)}%
									</text>
								);
							}}
						>
							{data.map((entry) => (
								<Cell
									key={entry.name}
									fill={entry.color}
									style={{ cursor: onSliceClick ? "pointer" : "default" }}
								/>
							))}
						</Pie>

						<Tooltip />
						<Legend />
					</PieChart>
				) : (
					<BarChart
						layout="vertical"
						data={data}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
						<XAxis
							type="number"
							allowDecimals={false}
							tick={{ fill: "#64748B", fontSize: 11 }}
						/>
						<YAxis
							type="category"
							dataKey="name"
							tick={{ fill: "#64748B", fontSize: 11 }}
							width={80}
						/>
						<Tooltip />
						<Legend />
						<Bar dataKey="value" name="Chamados" radius={[0, 8, 8, 0]}>
							{data.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Bar>
					</BarChart>
				)}
			</ResponsiveContainer>
		</div>
	);
}

export default TicketChart;
