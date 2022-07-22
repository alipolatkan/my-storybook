import cx from "classnames";
import { FC } from "react";
// Interface
import { IElement } from "../../interfaces";
// Types
import { intent } from "./Icon.types";

interface IIconProps extends IElement {
  /**
   * Defines color of icon
   * @default 'primary'
   */
  intent?: intent | undefined | false;
  /**
   * Defines what icon is that
   */
  name?: string;
  /**
   * Additional classes
   */
  className?: string;
}

/**
 * Icon UI component for user interaction
 */

export const Icon: FC<IIconProps> = (props) => {
  const { intent = "primary", name, className } = props;
  const classNames = cx("i-icon", intent && `i-${intent}`, name && `icon-${name}`, className);
  return <i className={classNames} {...props}></i>;
};