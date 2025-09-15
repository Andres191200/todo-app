import { useForm } from "react-hook-form";
import { signupSchema, TSignupForm } from "./schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "../../text-field/TextField";
import { supabase } from "../../../supabase-client/supabaseClient";
import { useState } from "react";
import styles from "./styles.module.scss";
import { signUpFormErrorHandler } from "./utils/errorHandler";
import renderToast from "../../toast/Toast";
import { ECustomization } from "../../toast/models/customization";

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
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.username,
        },
      },
    });
    if (error) {
      setSuccess(false);
      renderToast({customization: ECustomization.error, message: error.message});
      const handledError = signUpFormErrorHandler(error.message);
      setError(handledError.field, handledError.error);
    } else {
      renderToast({customization: ECustomization.success, message: 'Check your email for verification!'});
      setSuccess(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextField
        zodRegister={register("email")}
        placeholder="Email"
        type="text"
        name="email"
      />
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
      <TextField
        zodRegister={register("confirmPassword")}
        placeholder="Password"
        type="password"
        name="confirmPassword"
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Signup"}
      </button>
      <div className={styles.errors}>
        {errors.username && <p className="error">{errors.username.message}</p>}
        {errors.password && <p className="error">{errors.password.message}</p>}
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
      </div>
    </form>
  );
}
