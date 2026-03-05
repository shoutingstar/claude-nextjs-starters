import { z } from "zod";

// 로그인 폼 스키마
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "이메일을 입력하세요" })
    .email({ message: "유효한 이메일을 입력하세요" }),
  password: z
    .string()
    .min(1, { message: "비밀번호를 입력하세요" })
    .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다" }),
});

export type SignInInput = z.infer<typeof signInSchema>;

// 회원가입 폼 스키마
export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "이름을 입력하세요" })
      .min(2, { message: "이름은 최소 2자 이상이어야 합니다" }),
    email: z
      .string()
      .min(1, { message: "이메일을 입력하세요" })
      .email({ message: "유효한 이메일을 입력하세요" }),
    password: z
      .string()
      .min(1, { message: "비밀번호를 입력하세요" })
      .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다" }),
    confirmPassword: z
      .string()
      .min(1, { message: "비밀번호 확인을 입력하세요" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

export type SignUpInput = z.infer<typeof signUpSchema>;
