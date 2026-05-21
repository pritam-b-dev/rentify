"use client";
import React from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { authClient } from "../../../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
const SignInPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: userInfo.email,
      password: userInfo.password,
    });
    if (error) {
      console.error("Sign In error:", error.message);
      alert(error.message || "problem signin");
      return;
    }
    if (data) {
      alert("Signin successfully! 🎉");
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-3xl flex justify-center items-center flex-col mx-auto my-5">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold ">Signin To Your Account</h1>
      </div>
      <Card className="border">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              className={
                "w-full justify-center bg-neutral-500 hover:bg-neutral-700 text-white font-medium text-lg"
              }
            >
              Signin
            </Button>
          </div>
        </Form>
        <div>
          <Button
            onClick={handleGoogle}
            className={
              "w-full justify-center bg-neutral-500 hover:bg-neutral-700 text-white font-medium text-lg"
            }
          >
            <FcGoogle className="w-7 h-7" /> Sign in with Google
          </Button>
        </div>
        <div className="flex gap-3">
          <p>Dont have an account?</p>
          <Link
            href={"/signup"}
            className="text-red-600 hover:text-neutral-500"
          >
            Click Here! To Create account
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
