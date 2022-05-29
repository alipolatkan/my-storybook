import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
// Interface
import { IDiv } from "../../interfaces";
// Types
import { position } from "./Drawer.types";

interface DrawerProps extends IDiv {
  /**
   * If true, drawer is mounted
   */
  active: boolean;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * If true, when you click overlay, drawer will close
   * @default true
   */
  closeOnOverlay?: boolean;
  /**
   * Reveal side of drawer
   * @default 'right'
   */
  position: position;
  /**
   * Callback function when drawer is closing
   */
  onClose?: () => void;
  /**
   * Callback function when drawer is entering
   */
  onEnter?: () => void;
}

/**
 * Drawer UI component for user interaction
 */
export const Drawer = ({
  active,
  position = "right",
  closeOnOverlay = true,
  className,
  children,
  onClose,
  onEnter,
}: DrawerProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (active) window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.removeProperty("overflow");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (active !== isActive) {
      setActive(active);
      if (!active) handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const classNames = cx(
    "i-drawer-wrapper",
    position && `i-drawer-wrapper--${position}`,
    className
  );

  const handleEnter = () => onEnter && onEnter();

  const handleClose = () => onClose && onClose();

  const handleCloseOnOverlay = () => {
    if (closeOnOverlay) {
      handleClose();
      setActive(false);
    }
  };

  return createPortal(
    <>
      <CSSTransition
        in={isActive}
        unmountOnExit
        timeout={200}
        classNames="m-mask"
      >
        <div onClick={handleCloseOnOverlay} className="m-mask__wrapper" />
      </CSSTransition>
      <CSSTransition
        in={isActive}
        onEnter={handleEnter}
        unmountOnExit
        timeout={400}
        classNames={`m-slide--${position} m-drawer`}
      >
        <div className={classNames}>{active && children}</div>
      </CSSTransition>
    </>,
    window.document.body
  );
};
