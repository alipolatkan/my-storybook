import cx from "classnames";
// Interfaces
import { IInput } from "../../interfaces";
// Types
import { size, status } from "./TextInput.Types";

interface TextInputProps extends IInput {}

export const TextInput = ({ ...props }: TextInputProps) => {
    const classNames = cx();
    return (
        <input type="text" />
    )
};
