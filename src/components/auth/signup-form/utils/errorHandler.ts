import { TSignupForm } from "../schemas/signup";

export function signUpFormErrorHandler(message: string): {
  field: keyof TSignupForm | "root";
  error: { message: string };
} {
  const signupFormFields = Object.keys(
    {} as TSignupForm
  ) as (keyof TSignupForm)[];

  for (const field of signupFormFields) {
    if (message.toLowerCase().includes(field.toLowerCase())) {
      return { field, error: { message } };
    }
  }

  return { field: "root", error: { message } };
}
