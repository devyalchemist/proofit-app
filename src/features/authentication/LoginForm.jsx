import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginForm() {
  const { handleSubmit, register, formState, reset } = useForm();
  const { errors } = formState;
  console.log(errors);
  function onSubmit(data) {
    console.log(data);
    reset();
  }
  return (
    <div className="w-80 space-y-1 divide-y divide-gray-200 bg-white sm:w-120">
      <h1 className="font-default py-2 text-center text-[1.2rem] text-blue-900">
        proofit
      </h1>
      <div className="px-4">
        <h1 className="font-default py-2 text-center text-[1.8rem]">
          Login to your account
        </h1>
        <form
          className="flex flex-col gap-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                {...register("password", {
                  required: "Please fill out this field",
                })}
                id="password"
                type="password"
                placeholder="provide your password"
                className="w-full rounded-[4px] border-2 border-none bg-blue-200 p-2"
              />
            </div>
          </FormRow>
          <FormRow>
            <button className="w-full bg-blue-800 py-4 text-white transition-colors duration-200 hover:bg-blue-950">
              Login
            </button>
          </FormRow>
        </form>
      </div>
    </div>
  );
}
