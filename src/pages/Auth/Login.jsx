import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div className="relative h-full py-16 px-32 flex flex-col justify-center gap-y-8">
      {/* navigator for register page */}
      <div className="absolute top-8 right-8 uppercase tracking-wider text-xs flex gap-1">
        <p className="font-MontHeavy text-neutral-400">Don't have an account?</p>
        <Link to="/auth/register" className="font-MontHeavy hover:text-primary">
          Sign up
        </Link>
      </div>

      <h1 className="uppercase font-MontHeavy text-7xl">Login</h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputField label="Email" name="email" register={register} required />
        <InputField label="Password" name="password" type="password" register={register} required />

        <Button className="mt-2">Login</Button>
      </form>

      {/* seperator line */}
      <span className="w-full h-[1px] bg-lightener-200"></span>

      {/* forgot password */}
      <Link to="/auth/forgot" className="w-fit self-center text-sm font-medium hover:text-primary">
        Forgot your password?
      </Link>
    </div>
  );
};

export default Login;
