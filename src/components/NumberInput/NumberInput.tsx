import React, { useRef, useState } from "react";
import cx from "classnames";
// Interface
import { IInput } from "../../interfaces";
// Types
import { status } from "./NumberInput.types";
// utils
import { getParsedValue } from "../../utils/formatters";

interface NumberInputProps extends IInput {
  /**
   * Label of input
   */
  label?: React.ReactNode;
  /**
   * Explanation Text of input
   */
  helperText?: React.ReactNode;
  /**
   * If true, input will be disabled
   */
  loading?: boolean;
  /**
   * Validation statuses
   */
  status?: status;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * minimum input value
   */
  minValue?: number;
  /**
   * maximum input value
   */
  maxValue?: number;
  /**
   * step amount icrease/decrease value
   * @default 1
   */
  stepAmount?: number;
  /**
   * When status is equal to error, shows this message
   */
  statusMessage?: string;
  /**
   * Default Value
   */
  defaultValue?: number;
  /**
   * Number Input Value type
   * @default 'decimal'
   */
  valueType?: "integer" | "decimal";
}

interface handleChangeParam {
  element?: React.MutableRefObject<HTMLInputElement | null>;
  operation?: "increase" | "decrease";
}

/**
 * Number Input UI component for user interaction
 */
export const NumberInput = ({
  label,
  helperText,
  status,
  statusMessage,
  loading,
  className,
  disabled,
  minValue,
  maxValue,
  stepAmount = 1,
  defaultValue = 0,
  valueType = "decimal",
  ...props
}: NumberInputProps) => {
  const [buttonStates, setButtonStates] = useState({
    btnIncrease: {
      disabled: false,
    },
    btnDecrease: {
      disabled: false,
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const classNames = {
    wrapper: cx("i-input-number-wrapper"),
    input: cx(
      "i-input-number",
      (disabled || loading) && "disabled",
      status && `i-${status}`,
      className
    ),
  };

  const handleIncrease = () => {
    if (inputRef.current)
      handleChangeValue({ element: inputRef, operation: "increase" });
  };

  const handleDecrease = () => {
    if (inputRef.current)
      handleChangeValue({ element: inputRef, operation: "decrease" });
  };

  const handleChangeValue = ({
    element = inputRef,
    operation,
  }: handleChangeParam) => {
    if (element && element.current) {
      /**
       * convert value, integer or decimal
       */
      const currentValue = getParsedValue({ value: element.current.value });

      let newValue = currentValue;

      switch (operation) {
        case "increase":
          newValue = currentValue + stepAmount;
          break;
        case "decrease":
          newValue = currentValue - stepAmount;
          break;
        default:
          newValue = currentValue;
          break;
      }

      if (typeof maxValue !== "undefined" && newValue >= maxValue) {
        newValue = maxValue;
        setButtonStates({
          btnIncrease: { disabled: true },
          btnDecrease: { disabled: false },
        });
      } else if (typeof minValue !== "undefined" && newValue <= minValue) {
        newValue = minValue;
        setButtonStates({
          btnIncrease: { disabled: false },
          btnDecrease: { disabled: true },
        });
      } else if (
        buttonStates.btnIncrease.disabled ||
        buttonStates.btnDecrease.disabled
      ) {
        setButtonStates({
          btnIncrease: { disabled: false },
          btnDecrease: { disabled: false },
        });
      }

      /** set value to number input */
      element.current.value = newValue.toString();
    }
  };

  return (
    <div className={classNames.input}>
      {label && <label className="i-label">{label}</label>}
      {helperText && <div className="i-helper">{helperText}</div>}
      <div className={classNames.wrapper}>
        <button
          onClick={handleDecrease}
          disabled={disabled || buttonStates.btnDecrease.disabled}
        >
          −
        </button>
        <input
          ref={inputRef}
          min={minValue}
          max={maxValue}
          step={stepAmount}
          disabled={disabled || loading}
          type="number"
          pattern="[0-9]*"
          defaultValue={defaultValue}
          onChange={() => handleChangeValue({})}
          {...props}
        />
        <button
          onClick={handleIncrease}
          disabled={disabled || buttonStates.btnIncrease.disabled}
        >
          +
        </button>
      </div>
      {status && statusMessage && (
        <div className="i-field-message">{statusMessage}</div>
      )}
    </div>
  );
};
