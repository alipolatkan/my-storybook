import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";

interface SpinnerProps extends IDiv {
  /**
   * If true, mount loader
   */
  active?: boolean;
  /**
   * Additional classes
   */
  className?: string;
}

/**
 * Spinner UI component for user interaction
 */
export const Spinner = ({
  active = true,
  className,
  ...props
}: SpinnerProps) => {
  const classNames = cx("i-spinner", className);
  if (!active) return null;
  return <div className={classNames} {...props}></div>;
};
