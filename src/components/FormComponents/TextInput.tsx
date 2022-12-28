import { RegisterOptions, UseFormRegister } from "react-hook-form";

type TextInputTypes = {
  type: string;
  name: string;
  disabled?: boolean;
  placeHolder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  error?: string;
};

const TextInput = (props: TextInputTypes) => {
  const {
    type,
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
      <input
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeHolder}
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

export default TextInput;
