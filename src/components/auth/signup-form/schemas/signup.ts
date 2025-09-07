import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

export const signupSchema = z.object({
    username: z.string().min(8, "Username must contain at least 8 characters"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
}) 

export type TSignupForm = z.infer<typeof signupSchema>;