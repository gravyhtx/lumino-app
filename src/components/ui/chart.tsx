import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface StandardLineChartProps<T> {
  data: T[];
  xAxisKey: keyof T; // X-axis key
  lineKey: keyof T; // Line data key
  title?: string;
  range?: {
    values: string[];
    onValueChange: (value: string) => void;
  };
  stroke?: {
    color: string;
    width: number;
  };
  
}

export const StandardLineChart = <T extends Record<string, unknown>>({
  data,
  xAxisKey,
  lineKey,
  title,
  range,
  stroke = { color: '#8884d8', width: 2 },
}: StandardLineChartProps<T>) => {
  const [value, setValue] = useState<string>(range?.values[0] ?? '');

  // Helper to format keys: "snake_case" => "Snake Case"
  const formatKey = (key: string) => {
    return key
      .replace(/_/g, ' ') // Replace underscores
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
  };

  return (
    <div className="w-full lg:col-span-1">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            {/* Title */}
            {title ? <CardTitle>{title}</CardTitle> : null}

            {/* Select Range */}
            {range ? (
              <Select value={value} onValueChange={(val) => {
                setValue(val);
                range.onValueChange(val);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  {range.values.map((rangeValue) => (
                    <SelectItem key={rangeValue} value={rangeValue}>
                      {rangeValue}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : null}
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisKey as string} />
                <YAxis />
                {/* Tooltip formatter */}
                <Tooltip
                  formatter={(value, name) => [`${value}`, formatKey(name as string)]}
                  labelFormatter={(label) =>
                    `${xAxisKey === 'date' ? label : formatKey(xAxisKey as string)}`
                  }
                />
                <Line
                  type="monotone"
                  dataKey={lineKey as string}
                  stroke={stroke.color}
                  strokeWidth={stroke.width}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};