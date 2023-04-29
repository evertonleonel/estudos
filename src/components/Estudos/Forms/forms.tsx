import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const forms = () => {
  const createUserFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase(),
    password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  });

  type CreateUserFormData = z.infer<typeof createUserFormSchema>;
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  function createdUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div>
      {/* {Modal ? <Modal size="small" content={JSXTest()} /> : null}

    <button onClick={show}>Open Modal</button>

    <input
      className="text-black"
      type="text"
      value={name}
      onChange={(ev) => setName(ev.target.value)}
    />

    <form
      onSubmit={handleSubmit(createdUser)}
      className="flex flex-col gap-4 w-full  max-w-sm"
    >
      <div className="default-box highlight">
        <label>E-mail</label>
        <input
          type="email"
          className="default-input"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="default-box">
        <label>Password</label>
        <input
          type="password"
          className="default-input"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-emerald-600 rounded font-semibold  h-10 hover:bg-emerald-700"
      >
        Salvar
      </button>
    </form>
    <pre>{output}</pre> */}
    </div>
  );
};

export default forms;
