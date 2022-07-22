import React, { FC, Suspense } from "react";
import cx from "classnames";
// Interface
import { IButton } from "../../interfaces";
// Types
import { intent, size, variant } from "./Button.types";
// Load Lazy Components
const Icon = React.lazy(() => import("../Icon").then(({ Icon }) => ({ default: Icon })));
const Spinner = React.lazy(() => import("../Spinner").then(({ Spinner }) => ({ default: Spinner })));

/**
 * @interface IButtonProps
 */
interface IButtonProps extends IButton {
  /**
   * Additional classes
   */
  className?: string;
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
   * Button text
   */
  text?: string;
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
}

/**
 * Button UI component for user interaction
 */
export const Button: FC<IButtonProps> = (props) => {
  const {
      variant = "solid",
      intent = "primary",
      size,
      className,
      children,
      icon,
      text,
      disabled,
      loading,
    } = props,
    classNames = cx(
      "i-btn",
      variant && `i-btn-${variant}`,
      intent && `i-btn-${intent}`,
      size && `i-btn-${size}`,
      loading && `i-btn-loading`,
      disabled && `i-disabled`,
      className
    );

  return (
    <button {...props} className={classNames} disabled={disabled || loading}>
      <span className="i-btn-text">
        {icon && (
          <Suspense>
            <Icon intent={variant === "icon" && intent} name={icon} />
          </Suspense>
        )}
        {text}
        {children}
      </span>
      {loading && (
        <Suspense>
          <Spinner />
        </Suspense>
      )}
    </button>
  );
};
