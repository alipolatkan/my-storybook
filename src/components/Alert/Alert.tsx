import React, { FC, Suspense, useState } from "react";
import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";
// Types
import { intent } from "./Alert.types";
// Load Lazy Components
const Icon = React.lazy(() => import("../Icon").then(({ Icon }) => ({ default: Icon })));
const Button = React.lazy(() => import("../Button").then(({ Button }) => ({ default: Button })));

interface IAlertProps extends IDiv {
  /**
   * Additional className on alert wrapper
   */
  className?: string;
  /**
   * Alert message
   */
  message?: React.ReactNode;
  /**
   * Alert description
   */
  description?: React.ReactNode;
  /**
   * When alert type is custom, you can define icon name here
   */
  icon?: string;
  /**
   * Type of intent define alert's type. It changes border and background color and alert's icon.
   */
  intent?: intent;
  /**
   * When closable props is true, show clickable cross icon on top-right side of alert component.
   * When you clicked to this icon, alert will unmount.
   * @default false
   */
  closable?: boolean;
  /**
   * Callback function when click on close icon
   */
  onClose?: (e: any) => void;
}

/**
 * Alert UI component for user interaction
 */
export const Alert: FC<IAlertProps> = (props) => {
  const [isClose, setClose] = useState<boolean>(false);
  const { intent, message, description, icon, className, closable, onClose } = props;
  const classNames = cx("i-alert", intent && `i-${intent}`, className);
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClose(true);
    if (onClose) onClose(e);
  };
  if (isClose) return null;
  return (
    <div {...props} className={classNames}>
      {closable && (
        <Suspense>
          <Button
            className="i-alert-close"
            variant="icon"
            intent="secondary"
            icon="clear"
            onClick={handleClose}
          />
        </Suspense>
      )}
      {message && (
        <div className="i-alert-message">
          {icon && (
            <Suspense>
              <Icon intent={intent} name={icon} />
            </Suspense>
          )}
          {message}
        </div>
      )}
      {description && <div className="i-alert-description">{description}</div>}
    </div>
  );
};
