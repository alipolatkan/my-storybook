import React, { useEffect } from "react";
import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";
// Components
import { Header } from "./Header";
import { Content } from "./Content";

interface PanelProps extends IDiv {
  /**
   * If true, panel will expand
   */
  active?: boolean;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * If true, panel can not be expand
   */
  disabled?: boolean;
  /**
   * Index of panel
   */
  panelIndex?: number;
  /**
   * Identifier of Panel
   */
  panelKey?: any;
  /**
   * Disables arrow icon in header component
   */
  icon?: boolean;
  /**
   * If true, can't change active panel with click to header
   */
  clickable?: boolean;
  /**
   * Callback function when active panel is changed
   */
  handleChange?: (index?: number) => void;
  /**
   * Callback function when active panel is changed
   */
  onPanelChange?: (key?: any, index?: number, state?: boolean) => void;
}

/**
 * Collapse Panel UI component for user interaction
 */
const Panel = ({
  active,
  disabled,
  icon,
  className,
  children,
  clickable,
  panelIndex,
  panelKey,
  handleChange,
  onPanelChange,
}: PanelProps) => {
  const [CollapseHeader, CollapseContent] = React.Children.toArray(children);

  const classNames = cx("i-panel", disabled && "disabled", className);

  const handleActive = () => {
    if (!disabled && typeof handleChange !== "undefined")
      handleChange(panelIndex);
  };

  useEffect(() => {
    onPanelChange && onPanelChange(panelKey, panelIndex, active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className={classNames}>
      {React.cloneElement(CollapseHeader as React.ReactElement, {
        active,
        disabled,
        clickable,
        icon,
        handleActive: handleActive,
      })}
      {React.cloneElement(CollapseContent as React.ReactElement, {
        active,
        disabled,
      })}
    </div>
  );
};

Panel.Header = Header;
Panel.Content = Content;
export { Panel };
