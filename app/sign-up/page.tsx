import { AuthLayout } from "@/components/layout/AuthLayout";
import { AuthForm } from "@/components/shared/AuthForm";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="회원가입"
      subtitle="새로운 계정을 만드세요"
    >
      <AuthForm type="sign-up" />
    </AuthLayout>
  );
}
