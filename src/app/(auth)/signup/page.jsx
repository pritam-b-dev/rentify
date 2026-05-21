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
import { authClient } from "../../../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      image: userInfo.image,
    });
    if (error) {
      console.error("Sign up error:", error.message);
      alert(error.message || "problem signup");
      return;
    }
    if (data) {
      alert("Account created successfully! 🎉");
      router.push("/signin");
      router.refresh();
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center mx-auto px-4 my-5">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">Create Account</h1>
      </div>
      <Card className="border p-6 sm:p-8 w-full max-w-md mx-auto shadow-sm rounded-2xl bg-white">
        <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter your Image URL" />
            <FieldError />
          </TextField>
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
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-xs text-gray-500 mt-1">
              At least 6 characters with uppercase and lowercase letters and
              numbers
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              className={
                "w-full justify-center bg-neutral-500 hover:bg-neutral-700 text-white font-medium text-lg"
              }
            >
              Sign Up
            </Button>
          </div>
        </Form>
        <div>
          <Button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium text-base rounded-xl py-6 shadow-sm"
          >
            <FcGoogle className="w-7 h-7" /> Sign Up with Google
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm mt-2 text-center">
          <p>Already have an account?</p>
          <Link
            href={"/signin"}
            className="text-red-600 hover:text-neutral-500"
          >
            Click Here!
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
