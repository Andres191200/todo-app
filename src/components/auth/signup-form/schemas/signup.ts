import {z} from "zod";

export const signupSchema = z.object({
    email: z.email(),
    username: z.string().min(8, "Username must contain at least 8 characters"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
    confirmPassword: z.string(),
}).check((ctx) => {
    if(ctx.value.confirmPassword != ctx.value.password){
        ctx.issues.push({
            code: "custom",
            message: "Passwords do not match",
            path: ["confirmPassword"],
            input: ctx.value,
            continue: false,
        })
    }
})

export type TSignupForm = z.infer<typeof signupSchema>;