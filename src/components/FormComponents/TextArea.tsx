import { UseFormRegister } from "react-hook-form/dist/types/form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

type TextAreaTypes = {
  name: string;
  disabled?: boolean;
  placeHolder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  error?:string;
};

const TextArea = (props: TextAreaTypes) => {
  const {
    name,
    disabled,
    placeHolder,
    readOnly,
    required,
    value,
    register,
    rules,
    error,
    ...rest
  } = props;
  return (
    <div>
      <textarea
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        value={value}
        {...rest}
        {...(register && register(name, rules))}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextArea;
