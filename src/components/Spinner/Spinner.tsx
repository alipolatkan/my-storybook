import { FC } from "react";
import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";

interface ISpinnerProps extends IDiv {
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
export const Spinner: FC<ISpinnerProps> = (props) => {
  const { active = true, className } = props,
    classNames = cx("i-spinner", className);
  if (!active) return null;
  return <div className={classNames} {...props}></div>;
};
