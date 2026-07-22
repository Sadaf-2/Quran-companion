import { z } from "zod";


export const profileSchema = z.object({

  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),


  email: z
    .string()
    .email("Enter a valid email address"),


  age: z
    .number()
    .min(10, "Age must be greater than 10")
    .max(100, "Age must be less than 100"),


});