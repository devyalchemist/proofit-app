import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerMini from "../../ui/SpinnerMini";
import { Link } from "react-router";
import { useSignUp } from "./useSignUp";
import { useState } from "react";

export default function SignUpForm() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordHidden2, setPasswordHidden2] = useState(true);
  const { signUpUser, isSigningUp } = useSignUp();
  const { handleSubmit, register, formState, reset, getValues } = useForm();
  const { errors } = formState;
  console.log(errors);
  function onSubmit(data) {
    const { email, fullName, password } = data;
    signUpUser(
      { email, password, fullName },
      {
        onSuccess: () => reset(),
      },
    );
    console.log(data);
    // loginUser(data, {
    //   onSuccess: () => navigate("/app"),
    // });
    reset();
  }
  return (
    <div className="w-80 space-y-1 divide-y divide-gray-200 bg-white sm:w-120">
      <h1 className="font-default py-2 text-center text-[1.2rem] text-blue-900">
        proofit
      </h1>
      <div className="px-4">
        <h1 className="font-default py-2 text-center text-[1.8rem]">
          Sign up for an account
        </h1>
        <form
          className="flex flex-col gap-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormRow label="fullName" error={errors?.fullName?.message}>
            <input
              {...register("fullName", {
                required: "Please fill out this field",
              })}
              id="fullName"
              type="text"
              placeholder="john doe"
              className="w-full flex-1 rounded-[4px] border-2 border-none bg-blue-200 p-2"
            />
          </FormRow>
          <FormRow label="email" error={errors?.email?.message}>
            <input
              {...register("email", {
                required: "Please fill out this field",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please provide a valid email address",
                },
              })}
              id="email"
              //   type="email"
              placeholder="example@gmail.com"
              className="w-full flex-1 rounded-[4px] border-2 border-none bg-blue-200 p-2"
            />
          </FormRow>
          <FormRow label={"password"} error={errors?.password?.message}>
            <div className="relative flex w-full items-center">
              <span className="absolute right-2 text-blue-400">
                <FontAwesomeIcon
                  onClick={() => setPasswordHidden2((prev) => !prev)}
                  icon={passwordHidden2 ? faLock : faEye}
                />
              </span>
              <input
                {...register("password", {
                  required: "Please fill out this field",
                  minLength: {
                    value: 8,
                    message: "Password must be longer than 8 characters",
                  },
                })}
                id="password"
                type={passwordHidden2 ? "password" : "text"}
                placeholder="provide your password"
                className="w-full rounded-[4px] border-2 border-none bg-blue-200 p-2"
              />
            </div>
          </FormRow>
          <FormRow
            label={"Confirm Password"}
            error={errors?.confirmPassword?.message}
          >
            <div className="relative flex w-full items-center">
              <span className="absolute right-2 text-blue-400">
                <FontAwesomeIcon
                  onClick={() => setPasswordHidden((prev) => !prev)}
                  icon={passwordHidden ? faLock : faEye}
                />
              </span>
              <input
                {...register("confirmPassword", {
                  required: "Please fill out this field",
                  validate: (data) => {
                    return (
                      data === getValues().password || "Passwords must match"
                    );
                  },
                })}
                id="confirmPassword"
                type={passwordHidden ? "password" : "text"}
                placeholder="provide your password"
                className="w-full rounded-[4px] border-2 border-none bg-blue-200 p-2"
              />
            </div>
          </FormRow>
          <FormRow>
            <button className="w-full bg-blue-800 py-4 text-white transition-colors duration-200 hover:bg-blue-950">
              {isSigningUp ? <SpinnerMini /> : "SignUp"}
            </button>
          </FormRow>
          <div className="flex justify-between">
            <h1>Already a user</h1>{" "}
            <Link to="/login">
              <span className="hover:text-blue-600">SignIn</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
