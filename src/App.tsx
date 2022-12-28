import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "./components/FormComponents/TextInput";
import TextArea from "./components/FormComponents/TextArea";
import ReactSelect from "./components/FormComponents/ReactSelect";
import Checkbox from "./components/FormComponents/Checkbox";
import FormSelect from "./components/FormComponents/FormSelect";

interface IFormInputs {
  firstName: string;
  age: number;
  info: string;
  users: string;
  interest:string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    info: yup.string().required(),
    age: yup.number().positive().integer().typeError("Required").required(),
    users: yup.string().required(),
    interest: yup.string().required(),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="firstName"
        register={register}
        error={errors.firstName?.message}
      />

      <TextInput
        type="number"
        name="age"
        register={register}
        error={errors.age?.message}
      />
      <TextArea name="info" register={register} error={errors.info?.message} />
      <FormSelect
        options={[
          { label: "Naresh", value: "naresh", id: "naresh" },
          { label: "Naresh1", value: "naresh1", id: "naresh1" },
        ]}
        onChange={() => {
          console.log("selected");
        }}
        name="users"
        control={control}
        error={errors.users?.message}  
      />
      <Checkbox
        options={[
          { label: "Naresh", value: "naresh", id: "naresh" },
          { label: "Naresh1", value: "naresh1", id: "naresh1" },
        ]}
        name="interest"
        register={register}
        error={errors?.interest?.message}
      />
      <input type="submit" />
    </form>
  );
}
