import {
  FC,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  Ref,
  forwardRef,
} from "react";
import { StyledInput } from "./Input.styles";

interface Props {
  idFor: string;
  inputClassName: string;
  inputName: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<Props> = forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    const {
      idFor,
      inputClassName,
      inputName,
      onKeyUp,
      placeholder,
      type,
      ...otherProps
    } = props;

    return (
      <StyledInput>
        <section className="floating">
          <input
            className={inputClassName}
            id={idFor}
            name={inputName}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...otherProps}
          />
          <label
            className="floatingLabel"
            data-content={placeholder}
            htmlFor={idFor}
          ></label>
        </section>
      </StyledInput>
    );
  },
);

export default Input;
