import cx from "classnames";
// Interface
import { IButton } from "../../interfaces";
// Components
import { Spinner } from "../Spinner";
import { Icon } from "../Icon";
// Types
import { intent, size, variant } from "./Button.types";

interface ButtonProps extends IButton {
  /**
   * Additional classes
   */
  className?: string;
  /**
   * If it is true, button is disabled ana non-interactive
   */
  disabled?: boolean;
  /**
   * Name of icon. Rendered before text
   */
  icon?: string;
  /**
   * Defines color of button
   * @default 'primary'
   */
  intent?: intent;
  /**
   * Button contents
   */
  label?: string;
  /**
   * If it is true, button is disabled and loading animation
   */
  loading?: boolean;
  /**
   * Defines size of button
   */
  size?: size;
  /**
   * Defines style of button
   * @default 'solid'
   */
  variant?: variant;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Button UI component for user interaction
 */
export const Button = ({
  variant = "solid",
  intent = "primary",
  size,
  className,
  children,
  icon,
  label,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  const classNames = cx(
    "i-btn",
    variant && `i-btn-${variant}`,
    intent && `i-btn-${intent}`,
    size && `i-btn-${size}`,
    loading && `i-btn-loading`,
    disabled && `i-btn-disabled`,
    className
  );

  return (
    <button className={classNames} disabled={loading || disabled} {...props}>
      <span className="i-btn-text">
        {icon && <Icon intent={variant === "icon" && intent} name={icon} />}
        {children || label}
      </span>
      {loading && <Spinner />}
    </button>
  );
};
