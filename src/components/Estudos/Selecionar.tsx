import { useForm, SubmitHandler } from "react-hook-form";
import * as Select from "@radix-ui/react-select";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

const Selecionar = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onClick={handleSubmit(onSubmit)}
      >
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Select you gender</label>
        <select {...register("gender")}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Selecionar;
