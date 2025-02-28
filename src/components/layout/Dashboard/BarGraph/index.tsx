"use client";

import React, { type SVGProps } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import useData from "~/hooks/useData";
// import { useValue } from "~/hooks/useValue";

// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
// const randomNumberGenerator = () => Math.floor(Math.random() * 100);
// const dunmmyData = useData(months).processKeys(months, randomNumberGenerator);
// const data2 = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
export const dummyData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

type Size = number | `${number}%` | 'auto';

interface AxisProps {
  fill?: string;
  fontSize?: number;
  tickLine?: boolean | SVGProps<SVGTextElement>;
  axisLine?: boolean | SVGProps<SVGLineElement>;
  label?: {
    value?: string;
    color?: string;
    position?: "top" | "bottom" | "left" | "right" | "inside" | "outside";
  };
  hide?: boolean;
}

interface BarGraphProps {
  data?: {
    name: string
    [key: string]: unknown
  }[]
  xAxis?: AxisProps
  yAxis?: AxisProps
  size?: [width: Size | undefined, height: Size | undefined] | { width?: Size | undefined; height?: Size | undefined }
  barDataKey?: string // Key for bar data
  barFillColor?: string
  barRadius?: number | [number, number, number, number]
  showAxis?: boolean
  margin?: {
    top: number | undefined
    right: number | undefined
    bottom: number | undefined
    left: number | undefined
  }
  showGrid?: boolean
  barSize?: number
  maxBarSize?: number
}

export const BarGraph: React.FC<BarGraphProps> = ({
  data = dummyData,
  xAxis,
  yAxis,
  size = { width: "100%", height: 350 },
  barDataKey = "total",
  barFillColor,
  barRadius = 12,
  showAxis = true,
  margin = { top: 5, right: 10, bottom: 20, left: 10 },
  showGrid = false,
  barSize = 25, // Slimmer bars
  maxBarSize = 30,
}) => {
  const chartWidth = Array.isArray(size) ? size[0] : (size?.width ?? "100%")
  const chartHeight = Array.isArray(size) ? size[1] : (size?.height ?? "100%")

  return (
    <div className="w-full h-full rounded-lg">
      <ResponsiveContainer width={chartWidth} height={chartHeight}>
        <BarChart data={data} margin={margin} barSize={barSize} maxBarSize={maxBarSize}>
          {showAxis && (
            <>
              <XAxis
                dataKey="name"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                {...xAxis}
                className="text-muted-foreground"
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                {...yAxis}
                className="text-muted-foreground"
              />
            </>
          )}

          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.2} />
          )}
            {/* <rect radius={Array.isArray(barRadius) ? barRadius[0] : barRadius} className="recharts-bar-rect" x="80" y="0" width={`${barSize}px`} height="305px" fill="hsl(var(--muted))" /> */}
            {/* <Bar
              dataKey={barDataKey}
              radius={Array.isArray(barRadius) ? barRadius : [barRadius, barRadius, barRadius, barRadius]}
              className="recharts-bar-rect fill-muted" /> */}
            <Bar
              dataKey={barDataKey}
              background={{ fill: "hsl(var(--muted) / .5)" }}
              fill={barFillColor ?? "var(--lumi-accent-green)"}
              radius={Array.isArray(barRadius) ? barRadius : [barRadius, barRadius, barRadius, barRadius]}
              className="bar-path"
            />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// interface BarGraphProps {
//   data?: {
//     name: string;
//     [key: string]: unknown;
//   }[];
//   xAxis?: AxisProps;
//   yAxis?: AxisProps;
//   size?: [width: Size | undefined, height: Size | undefined] | { width?: Size | undefined, height?: Size | undefined };
//   barDataKey?: string; // Key for bar data
//   barFillColor?: string;
//   barRadius?: [number, number, number, number];
//   showAxis?: boolean;
//   margin?: {
//     top: number | undefined;
//     right: number | undefined;
//     bottom: number | undefined;
//     left: number | undefined;
//   }
// }

// export const BarGraph: React.FC<BarGraphProps> = ({
//   data,
//   // xAxis = {},
//   // yAxis = {},
//   size = { width: '100%', height: 350 },
//   barDataKey = "total",
//   // barFillColor = "currentColor",
//   // barRadius = [4, 4, 0, 0],
//   // showAxis = true,
//   margin
// }) => {
//   const chartWidth = Array.isArray(size) ? size[0] : size?.width ?? '100%';
//   const chartHeight = Array.isArray(size) ? size[1] : size?.height ?? '100%';

//   return (
//     <ResponsiveContainer width={chartWidth} height={chartHeight}>
//       <BarChart data={data ?? dummyData} margin={margin}>
//       <XAxis
//           dataKey="name"
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//           tickFormatter={(value) => `$${value}`}
//         />
//         <Bar
//           dataKey={barDataKey ?? "name"}
//           fill="currentColor"
//           radius={[4, 4, 0, 0]}
//           className="fill-primary"
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };
