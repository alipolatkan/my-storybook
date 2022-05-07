import cx from "classnames";
import { useState } from "react";
// Interface
import { IDiv } from "../../interfaces";
// Components
import { Button } from "../Button";
import { Icon } from "../Icon";
// Types
import { intent } from "./Alert.types";

interface AlertProps extends IDiv {
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
export const Alert = ({
  intent,
  message,
  description,
  icon,
  className,
  closable,
  onClose,
}: AlertProps) => {
  const [isClose, setClose] = useState<boolean>(false);
  const classNames = cx("i-alert", intent && `i-${intent}`, className);
  const handleClose = (e: any) => {
    setClose(true);
    if (onClose) onClose(e);
  };
  if (isClose) return null;
  return (
    <div className={classNames}>
      {closable && (
        <Button
          className="i-alert-close"
          variant="icon"
          intent="secondary"
          icon="close"
          onClick={handleClose}
        />
      )}
      {message && (
        <div className="i-alert-message">
          {icon && <Icon intent={intent} name={icon} />}
          {message}
        </div>
      )}
      {description && <div className="i-alert-description">{description}</div>}
    </div>
  );
};
