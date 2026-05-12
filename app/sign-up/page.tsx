import Image from "next/image";
import Link from "next/link";

import { UserForm } from "@/components/forms/UserForm";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex flex-1 flex-col px-6 py-10 sm:px-10 lg:px-16">
        <Link href="/" className="mb-10 flex items-center gap-2">
          <Image
            src="/assets/icons/logokhome.png"
            height={1000}
            width={1000}
            alt="K Home Services logo"
            className="h-8 w-fit"
          />
        </Link>

        <div className="mx-auto flex w-full max-w-[496px] flex-1 flex-col justify-center">
          <UserForm />

          <div className="text-14-regular mt-10 flex justify-between">
            <p className="text-dark-600">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-green-500 hover:underline">
                Sign In
              </Link>
            </p>
            <Link href="/" className="text-dark-600 hover:text-green-500 transition-colors">
              ← Back Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="side-img relative max-w-[50%] overflow-hidden">
        <Image
          src="/handy.jpg"
          height={1000}
          width={1000}
          alt="Home services"
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300/80 to-transparent" />
      </div>
    </div>
  );
};

export default SignUpPage;
