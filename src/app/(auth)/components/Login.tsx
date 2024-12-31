"use client";
import React, { Suspense, useEffect } from "react";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { useUser } from "@/context/user.provider";
import TRInput from "@/components/forms/TRInput";
import TRForm from "@/components/forms/TRFrom";
import { useUserLogin } from "@/hooks/auth.hook";
import Loading from "@/components/shared/Loading";

export const dynamic = "force-dynamic";

const LoginContent = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams(); // Using useSearchParams
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const {
    mutate: handleLogin,
    isPending,
    isSuccess,
    isError,
    error,
  } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    handleLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending) {
      if (isSuccess) {
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/admin/dashboard");
        }
      } else if (isError) {
        // Handle error if login failed
        toast.error(error?.message || "Login failed");
      }

      userLoading(false);
    }
  }, [isPending, isSuccess, redirect, user, userLoading]);

  return (
    <>
      {isPending && <Loading />}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          animate={{ y: [-200, 100, 0] }}
          className="relative z-10 items-center h-full flex justify-center"
        >
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="md"
          >
            <CardBody className="p-10 min-w-[40vw] md:p-20 2xl:px-40 text-center">
              <div className="flex-col flex justify-center items-center text-center pb-5">
                <Link href={"/"}>
                  <h2 className="text-3xl text-center font-bold uppercase">
                    AshiQ.
                  </h2>
                </Link>
                <small>Full Stack Developer</small>
                <h3 className="mt-5 text-xl">Login Now</h3>
              </div>

              <TRForm
                defaultValues={{
                  email: "admin@gmail.com",
                  password: "123456",
                }}
                onSubmit={onSubmit}
              >
                <div className="py-3">
                  <TRInput isRequired label="Email" name="email" type="email" />
                </div>
                <div className="py-3">
                  <TRInput
                    isRequired
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Login
                  </Button>
                </div>
              </TRForm>

              <Link className="text-center" href="/reset-password">
                Forgot password?
              </Link>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoginContent />
    </Suspense>
  );
};

export default Login;
