import { FC, useEffect, useRef, useState } from "react";
import cx from "classnames";
// Types
import { status } from "./Radio.types";
// Interfaces
import { IInput } from "../../interfaces";

interface IRadioProps extends IInput {
  /**
   * Status of Radio
   */
  status?: status;
  /**
   * When error is true, shows this message
   */
  statusMessage?: string;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Inline Text of Radio
   */
  text?: string;
}

/**
 * Radio UI component for user interaction
 */
export const Radio: FC<IRadioProps> = (props) => {
  const { id, status, statusMessage, disabled, className, text, checked } = props;
  const [checkState, setCheckState] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const classNames = cx(
    "i-radio",
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
      <div className="i-radio-input">
        <label htmlFor={id}>
          <input
            ref={inputRef}
            id={id}
            type="radio"
            defaultChecked={checked}
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
