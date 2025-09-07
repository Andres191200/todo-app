import { useForm } from "react-hook-form";
import { signupSchema, TSignupForm } from "./schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "../../text-field/TextField";

export default function SignupForm() {
  const { register, handleSubmit } = useForm<TSignupForm>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: TSignupForm) {
    console.log("username: ", data.username);
    console.log("password: ", data.password);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        zodRegister={register("username")}
        placeholder="Username"
        type="text"
        name="username"
      />
      <TextField
        zodRegister={register("password")}
        placeholder="Password"
        type="password"
        name="password"
      />

      <button type="submit">Signup</button>
    </form>
  );
}
