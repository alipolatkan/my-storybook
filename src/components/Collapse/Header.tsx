import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";
import { Icon } from "../Icon";

interface HeaderProps extends IDiv {
  /**
   * If true, header icon will be rotating
   */
  active?: boolean;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * If true, panel can not be expand and header style changes to grayish color and not clickable
   */
  disabled?: boolean;
  /**
   * If true, chevron is not rendered
   */
  icon?: boolean;
  /**
   * If false, can't change active panel with click to header
   */
  clickable?: boolean;
  /**
   * Callback function when header is clicked
   */
  handleActive?: () => void;
}

/**
 * Collapse Header UI component for user interaction
 */
export const Header = ({
  active,
  disabled,
  clickable,
  icon,
  children,
  className,
  handleActive,
}: HeaderProps) => {
  const classNames = cx(
    "i-panel-header",
    disabled && "disabled",
    active && "active",
    className
  );
  const handleClick = () => {
    clickable && typeof handleActive !== "undefined" && handleActive();
  };
  return (
    <div className={classNames} onClick={handleClick}>
      {children}
      {icon && <Icon name="arrow_forward_ios" intent="secondary" />}
    </div>
  );
};
