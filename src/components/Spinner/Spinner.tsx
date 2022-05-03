import cx from "classnames";
// Interface
import { IElement } from "../../interfaces";

interface SpinnerProps extends IElement {
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
  const classNames = cx("m-spinner", className);
  if (!active) return null;
  return <span className={classNames} {...props}></span>;
};
