import React, { useState, useEffect } from "react";
import cx from "classnames";
// Interface
import { IUlElement } from "../../interfaces";
// Types
import { direction } from "./Navigation.types";
// Component
import { Item } from "./Item";

interface NavigationProps extends IUlElement {
  /**
   * display type
   * @default "horizontal"
   */
  displayType?: direction;
  /**
   * Default index of active menu item
   */
  defaultActiveKey?: number;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Callback function, when active item is changed
   */
  onItemChange?: (e: any, active: number) => void;
}

/**
 * Navigation UI component for user interaction
 */
const Navigation = ({
  defaultActiveKey,
  className,
  displayType = "horizontal",
  onItemChange,
  children,
  ...props
}: NavigationProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const classNames = cx(className, {
    "i-menu": displayType === "vertical",
    "i-nav": displayType === "horizontal",
  });
  const handleActiveItem = (index: number) => {
    setActiveItem(index);
  };
  const handleChange = (e: any, index: number) => {
    e.persist();
    onItemChange && onItemChange(e, index);
  };

  useEffect(() => {
    if (defaultActiveKey) setActiveItem(defaultActiveKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={classNames} {...props}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          activeKey: activeItem,
          itemIndex: index,
          onHandleChange: handleChange,
          setActiveItem: handleActiveItem,
        })
      )}
    </ul>
  );
};

Navigation.Item = Item;
export { Navigation };
