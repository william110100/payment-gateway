import { FC, KeyboardEventHandler, Ref, forwardRef } from "react";
import { StyledTextarea } from "./Textarea.styles";

interface Props {
  idFor: string;
  inputClassName: string;
  inputName: string;
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}

const Textarea: FC<Props> = forwardRef(
  (props: Props, ref: Ref<HTMLTextAreaElement>) => {
    const {
      idFor,
      inputClassName,
      inputName,
      onKeyUp,
      placeholder,
      ...otherProps
    } = props;

    return (
      <StyledTextarea>
        <section className="floating">
          <textarea
            className={inputClassName}
            id={idFor}
            name={inputName}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            ref={ref}
            {...otherProps}
          />
          <label
            className="floatingLabel"
            data-content={placeholder}
            htmlFor={idFor}
          ></label>
        </section>
      </StyledTextarea>
    );
  },
);

export default Textarea;
