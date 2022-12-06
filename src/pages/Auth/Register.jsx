import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div className="relative h-full py-16 px-32 flex flex-col justify-center gap-y-8">
      {/* navigator for login page */}
      <div className="absolute top-8 right-8 uppercase tracking-wider text-xs flex gap-1">
        <p className="font-MontHeavy text-neutral-400">Already have an account?</p>
        <Link to="/auth/login" className="font-MontHeavy hover:text-primary">
          Sign in
        </Link>
      </div>

      <h1 className="uppercase font-MontHeavy text-7xl">Register</h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputField label="Email" name="email" register={register} required />
        <InputField label="Password" name="password" register={register} required />
        <InputField label="Confirm password" name="confirmPassword" register={register} required />

        <Button className="mt-2">Register</Button>
      </form>
    </div>
  );
};

export default Register;
