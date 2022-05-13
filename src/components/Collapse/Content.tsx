import cx from "classnames";
import { CSSTransition } from "react-transition-group";
// Interface
import { IDiv } from "../../interfaces";

interface ContentProps extends IDiv {
  /**
   * If true, content will be visible
   */
  active?: boolean;
  /**
   * If true, content can not rendered
   */
  disabled?: boolean;
}

/**
 * Collapse Content UI component for user interaction
 */
export const Content = ({ active, disabled, children }: ContentProps) => {
  const classNames = cx("i-panel-content");
  return (
    <CSSTransition
      in={!disabled && active}
      timeout={333}
      unmountOnExit
      classNames="i-panel__collapse"
    >
      <div className={classNames}>{children}</div>
    </CSSTransition>
  );
};
