import React, { type FC } from "react";
import styles from './styles/bouncing-dots.module.css';
// https://dev.to/kirteshbansal/bouncing-dots-loader-in-react-4jng

interface OptsProps {
  size?: PxSize | [PxSize, PxSize];
  radius?: PxSize | PercentSize;
  color?: string;
  bgColor?: string;
  beforeColor?: string;
  afterColor?: string;
  spacing?: PxSize;
}

type PxSize = `${number}px` | 'auto';
type PercentSize = `${number}%`;

interface DotsProps {
  opts?: OptsProps;
  props?: unknown;
}
const BouncingDotsLoader: FC<DotsProps> = ({ opts, props = {} }) => {

  const { size, radius, color, bgColor, beforeColor, afterColor, spacing } = opts ?? {};

  let sizeStyle = {};
  if (Array.isArray(size)) {
    sizeStyle = {
      '--dot-width': size[0],
      '--dot-height': size[1],
    };
  } else if (size) {
    sizeStyle = {
      '--dot-width': size,
      '--dot-height': size,
    };
  }

  const style: React.CSSProperties & {
    '--dot-radius': PxSize | PercentSize | undefined;
    '--dot-color': string | undefined;
    '--dot-bg-color': string | undefined;
    '--dot-before-color': string | undefined;
    '--dot-after-color': string | undefined;
    '--dot-spacing': PxSize | undefined;
  } = {
    ...(typeof sizeStyle === 'object' ? sizeStyle : {}),
    '--dot-radius': radius,
    '--dot-color': color,
    '--dot-bg-color': bgColor,
    '--dot-before-color': beforeColor,
    '--dot-after-color': afterColor,
    '--dot-spacing': spacing,
  };

  return (
      <div className={styles.container} style={style} {...(typeof props === 'object' ? props : {})}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default BouncingDotsLoader;