import Image from "next/image";
import SignInFormClient from "@/features/auth/components/sign-in-form-client";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-gradient-to-b from-gray-900 to-gray-800 px-4">
      <Image
        src="/logoimage.png" // Put your logo in /public
        alt="Logo"
        width={150}
        height={150}
        className="mb-6"
      />
      <SignInFormClient />
    </div>
  );
};

export default SignInPage;
