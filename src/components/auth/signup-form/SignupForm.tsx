import { useForm } from "react-hook-form";
import { signupSchema, TSignupForm } from "./schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "../../text-field/TextField";
import { supabase } from "../../../supabase-client/supabaseClient";
import { useState } from "react";
import styles from "./styles.module.scss";
import { signUpFormErrorHandler } from "./utils/errorHandler";

export default function SignupForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<TSignupForm>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: TSignupForm) {
    const { error } = await supabase.auth.signUp({
      email: data.username,
      password: data.password,
    });
    if (error) {
      setSuccess(false);
      const handledError = signUpFormErrorHandler(error.message);
      setError(handledError.field, handledError.error);
    } else {
      setSuccess(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Signup"}
      </button>

      {errors.username && <p className="error">{errors.username.message}</p>}
      {errors.password && <p className="error">{errors.password.message}</p>}
      {success && <p className="success">User registered successfully!</p>}
    </form>
  );
}
