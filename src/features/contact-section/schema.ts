import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Hey there, mysterious stranger! Mind telling me your name? 🕵️‍♂️"),
  email: z.email("That email looks more suspicious than my browser history 🕵️‍♀️").min(1, "I need your email to stalk... I mean, contact you back! 📧"),
  message: z.string().optional(),
  phone: z.string().optional(),
})