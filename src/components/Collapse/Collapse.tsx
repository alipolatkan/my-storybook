import React, { FC, useEffect, useState } from "react";
import cx from "classnames";
// Interface
import { IDiv } from "../../interfaces";

interface ICollapseProps extends IDiv {
  /**
   * When accordion prop is true, only one panel will be active
   * @default false
   */
  accordion?: boolean;
  /**
   * Disables arrow icon in header component
   * @default false
   */
  icon?: boolean;
  /**
   * If true, can't change active panel with click to header
   */
  clickable?: boolean;
  /**
   * Index of expanded panel or panels (index starts with one(1) not zero(0))
   * @default []
   */
  activePanels?: number[];
  /**
   * Initial expanded panel index
   */
  defaultActive?: number;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * If true, can't change active panel with click to header
   */
  disabledActivePanel?: boolean;
  /**
   * Callback function when active panel is changed
   */
  onPanelChange?: (key?: any, index?: number, state?: boolean) => void;
}

/**
 * Collapse UI component for user interaction
 */
export const Collapse: FC<ICollapseProps> = (props) => {
  const [activePanels, setActivePanels] = useState<Array<number>>([]);
  const {
    accordion = false,
    icon = false,
    clickable = true,
    disabledActivePanel = false,
    children,
    defaultActive,
    onPanelChange,
  } = props;
  const classNames = cx("i-collapse");

  useEffect(() => {
    if (defaultActive) setActivePanels([defaultActive]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleChange = (index: number) => {
    if (!accordion) setActivePanels([...activePanels, index]);
    else setActivePanels([index]);
    if (activePanels.some((a) => a === index)) setActivePanels(activePanels.filter((a) => a !== index));
  };
  return (
    <div className={classNames}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as React.ReactElement, {
          icon,
          active: activePanels.some((a) => a === i + 1),
          handleChange: onHandleChange,
          onPanelChange,
          panelIndex: i + 1,
          clickable: disabledActivePanel ? !activePanels.some((a) => a === i + 1) : clickable,
        })
      )}
    </div>
  );
};
