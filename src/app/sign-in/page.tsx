import Image from "next/image";
import SignInForm from "@/components/forms/SignInForm";

export default async function SignIn() {
  return (
    <div className="flex h-screen flex-col bg-green-1 md:flex-row">
      <div className="order-2 flex h-screen flex-col items-center justify-center bg-green-1 p-4 text-white md:order-1 md:h-auto md:w-7/12">
        <SignInForm />
      </div>

      <div className="order-1 flex flex-col items-center justify-center rounded-b-3xl bg-green-2 px-8 py-20 md:order-2 md:w-5/12 md:rounded-none md:rounded-s-3xl">
        <Image
          src="/images/sign-in.svg"
          alt="Sign in illustration"
          width={300}
          height={230}
          className="h-auto w-1/2 rounded-md"
        />
        <p className="mt-4 font-castoro text-[1.5rem] italic text-white md:text-[1.75rem]">
          a Board
        </p>
      </div>
    </div>
  );
}
