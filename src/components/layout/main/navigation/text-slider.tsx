import React, { useState, useEffect, type ReactNode } from 'react';
import { Slider } from '@/components/ui/slider';
import { round } from '@/utils';

interface StickySliderProps {
  labels: (string | ReactNode)[];
  onChange?: (value: number) => void;
  ticks?: {
    show?: boolean | number;
    opacity?: number;
    divisions?: number;
  }
  width?: string;
}

/**
 * A reusable slider component that snaps to predefined positions based on the number of labels.
 *
 * @param labels - An array of strings or ReactNode elements representing the labels.
 * @param onChange - A callback function that is called when the slider value changes.
 * @param ticks.show - If true, display tick marks. If a number is provided, divide the number of tick marks by that value.
 * @param ticks.opacity - The opacity of the tick marks (0-1).
 * @param ticks.divisions - The number of tick mark divisions to highlight.
 * @param width - The width of the slider component.
 *
 * @example
 * <StickySlider
 *   labels={['Small', 'Medium', 'Large']}
 *   onChange={(value) => console.log(value)}
 *   ticks
 *   opacity={0.5}
 *   divisions={2}
 *   width="100%"
 * />
 */
export const StickySlider: React.FC<StickySliderProps> = ({
  labels,
  onChange,
  ticks,
  width = 'max-w-md',
}) => {
  const { show=false, opacity=1, divisions } = ticks ?? {};
  const opacityValue = (opacity < 0 ? 0 : opacity > 100 ? 1 : opacity <= 1 ? opacity : opacity / 100) * 100;
  const positions = labels.length;
  const [sliderValue, setSliderValue] = useState(0);

  const handleValueChange = (value: number) => {
    setSliderValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    const handleSnap = () => {
      const percentages = () => {
        const p = 100 / (positions - 1);
        return Array.from({ length: positions }, (_, i) => round(i * p, 1));
      };
      const closestPercentage = percentages().reduce((prev, curr) =>
        Math.abs(curr - sliderValue) < Math.abs(prev - sliderValue) ? curr : prev
      );
      setSliderValue(closestPercentage);
    };
    handleSnap();
  }, [positions, sliderValue]);

  const renderLabels = () => (
    <div className="flex justify-between mt-2"> {/* Changed mt-6 to mt-2 */}
      {labels.map((label, index) =>
        typeof label === 'string' ? (
          <span key={index} className="text-sm">
            {label}
          </span>
        ) : (
          <React.Fragment key={index}>{label}</React.Fragment>
        )
      )}
    </div>
  );

  const renderTicks = () => {
    if (!show) return null;

    const isNumeric = typeof show === 'number';
    const tickCount = isNumeric ? Math.ceil(positions / show) : positions;
    const divisionCount = divisions ?? 1;

    return (
      <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2">
        {Array.from({ length: tickCount }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-px ${
              index % divisionCount === 0 ? 'h-3' : ''
            } bg-gray-500 opacity-${opacityValue}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`mx-auto ${width}`}>
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full"> {/* Added mb-6 for margin-bottom */}
          <Slider
            defaultValue={[sliderValue]}
            max={100}
            step={1}
            value={[sliderValue]}
            onValueChange={(value: number[]) => handleValueChange(Number(value[0]))}
            className="absolute w-full h-2"
          />
          {renderTicks()}
        </div>
        {renderLabels()}
      </div>
    </div>
  );
};