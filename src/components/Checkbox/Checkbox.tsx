import { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
// Types
import { status } from "./Checkbox.types";
// Interfaces
import { IInput } from "../../interfaces";

interface ICheckboxProps extends IInput {
  /**
   * Validation statuses
   */
  status?: status;
  /**
   * If has value shows this message
   */
  statusMessage?: string;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Inline Text of Checkbox
   */
  text?: string;
}

/**
 * Checkbox UI component for user interaction
 */
export const Checkbox: FC<ICheckboxProps> = (props) => {
  const [checkState, setCheckState] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { id, status, statusMessage, disabled, className, text, checked } = props;
  const classNames = cx(
    "i-checkbox",
    checkState && "checked",
    status && `i-${status}`,
    disabled && "i-disabled",
    className
  );

  useEffect(() => {
    checked && setCheckState(checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.checked = checkState;
  }, [checkState]);

  const handleCheck = () => setCheckState(!checkState);
  return (
    <div className={classNames}>
      <div className="i-checkbox-input">
        <label htmlFor={id}>
          <input
            ref={inputRef}
            id={id}
            type="checkbox"
            defaultChecked={checkState}
            disabled={disabled}
            onChange={handleCheck}
            {...props}
          />
        </label>
        {text && <label htmlFor={id}>{text}</label>}
      </div>
      {status && statusMessage && <div className="i-status-message">{statusMessage}</div>}
    </div>
  );
};
