import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("You have successfully registered");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center">Register</h4>
        <FormInput label="username" name="username" type="text" />
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 capitalize link link-hover link-primary"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
