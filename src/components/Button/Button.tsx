import cx from "classnames";
// Interface
import { IButton } from "../../interfaces";
// Components
import { Spinner } from "../Spinner";
// Types
import { intent, size, variant } from "./Button.types";

interface ButtonProps extends IButton {
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Defines size of button
   * @default 'default'
   */
  size?: size;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Defines style of button
   * @default 'solid'
   */
  variant?: variant;
  /**
   * Defines color of button
   * @default 'primary'
   */
  intent?: intent;
  /**
   * If it is true, button is disabled and loading animation
   */
  loading?: boolean;
  /**
   * If it is true, button is disabled ana non-interactive
   */
  disabled?: boolean;
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
  size = "default",
  className,
  children,
  label,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  const classNames = cx(
    "m-btn",
    variant && `m-btn--${variant}`,
    intent && `m-btn--${intent}`,
    size && `m-btn--${size}`,
    loading && `m-btn--loading`,
    (disabled || loading) && `m-btn--disabled`,
    className
  );

  return (
    <button className={classNames} disabled={loading || disabled} {...props}>
      {loading ? <Spinner /> : children || label}
    </button>
  );
};
