import { useState } from "react";
import cx from "classnames";
// Interfaces
import { IInput } from "../../interfaces";

interface CheckboxProps extends IInput {
  /**
   * Error Status of Checkbox
   */
  error?: boolean;
  /**
   * When error is true, shows this message
   */
  errorMessage?: React.ReactNode;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Inline Text of Checkbox
   */
  text?: string;
  /**
   * External Ref object
   */
  inputRef?: React.MutableRefObject<HTMLInputElement>;
}

/**
 * Checkbox UI component for user interaction
 */
export const Checkbox = ({
  id,
  error,
  errorMessage,
  disabled,
  className,
  inputRef,
  text,
  checked,
  ...props
}: CheckboxProps) => {
  const [checkState, setCheckState] = useState<boolean>(checked || false);
  const classNames = cx(
    "i-checkbox",
    checkState && "checked",
    error && "i-error",
    disabled && "i-disabled"
  );
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
      {error && errorMessage && (
        <div className="i-error-message">{errorMessage}</div>
      )}
    </div>
  );
};
