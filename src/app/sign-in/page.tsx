import Image from "next/image";
import SignInForm from "@/components/forms/SignInForm";

export default function SignIn() {
  return (
    <div className="bg-green-1 flex h-screen flex-col md:flex-row">
      <div className="bg-green-1 order-2 flex h-screen flex-col items-center justify-center p-4 text-white md:order-1 md:h-auto md:w-7/12">
        <SignInForm />
      </div>

      <div className="bg-green-2 order-1 flex flex-col items-center justify-center rounded-b-3xl px-8 py-20 md:order-2 md:w-5/12 md:rounded-none md:rounded-s-3xl">
        <Image
          src="/images/sign-in.svg"
          alt="Sign in illustration"
          width={300}
          height={230}
          className="h-auto w-1/2 rounded-md"
        />
        <p className="font-castoro mt-4 text-[1.5rem] italic text-white md:text-[1.75rem]">
          a Board
        </p>
      </div>
    </div>
  );
}
