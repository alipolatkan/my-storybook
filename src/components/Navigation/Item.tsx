import cx from "classnames";
// Interface
import { ILiElement } from "../../interfaces";

interface ItemProps extends ILiElement {
  /**
   * Index of active item
   */
  activeKey?: number;
  /**
   * Index of item
   */
  itemIndex?: number;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Set active, when click to item
   */
  setActiveItem?: (e: any) => void;
  /**
   * Callback function, when active item is changed
   */
  onHandleChange?: (e: any, index?: number) => void;
}

export const Item = ({
  activeKey,
  itemIndex,
  className,
  children,
  setActiveItem,
  onHandleChange,
}: ItemProps) => {
  const classNames = cx("i-menu__item", className, {
    "i-menu__item--active": itemIndex === activeKey,
  });

  const handleClick = (e: any) => {
    e.persist();
    onHandleChange && onHandleChange(e, itemIndex);
    setActiveItem && setActiveItem(itemIndex);
  };

  return (
    <li className={classNames} onClick={handleClick}>
      <div className="i-menu__item__content">{children}</div>
    </li>
  );
};
