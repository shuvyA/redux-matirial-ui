import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Group A", value: 60 },
//   { name: "Group B", value: 23 },
//   { name: "Group C", value: 32 },
//   { name: "Group D", value: 11 }
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {/*{data[index.name]}*/}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Example = ({ data }) => {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  return (
    <ResponsiveContainer width="99%" aspect={1}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
