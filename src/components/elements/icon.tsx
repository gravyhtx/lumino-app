import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

/**
 * Generates an SVG icon component from the provided paths and viewBox.
 *
 * @param paths - An array of SVG path elements.
 * @param viewBox - The viewBox attribute for the SVG.
 * @param width - The width of the SVG.
 * @param height - The height of the SVG.
 * @returns The generated SVG icon component.
 */
export const GenerateIcon = (
  name: string,
  paths: [string, React.SVGProps<SVGPathElement>][],
  viewBox: string,
  width: number,
  height: number,
  className: string
) => {
  const Icon = forwardRef<SVGSVGElement>(({ ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={0}
        className={cn("dark:invert", className)}
        {...props}
      >
        {paths.map(([tag, attrs], index) => (
          <React.Fragment key={index}>
            {React.createElement(tag, attrs)}
          </React.Fragment>
        ))}
      </svg>
    );
  });

  Icon.displayName = name;

  return Icon;
};