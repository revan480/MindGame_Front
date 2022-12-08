import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    navigate("/auth/confirm");
  };

  return (
    <>
      {/* navigator for login page */}
      <div className="absolute top-8 right-8 uppercase tracking-wider text-xs flex gap-1">
        <p className="font-bold text-neutral-400">Already have an account?</p>
        <Link to="/auth/login" className="font-bold hover:text-primary">
          Sign in
        </Link>
      </div>

      <h1 className="uppercase font-bold text-5xl">Register</h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputField label="Email" name="email" register={register} required />
        <InputField label="Password" name="password" type="password" register={register} required />
        <InputField label="Confirm password" name="confirmPassword" type="password" register={register} required />

        <Button className="mt-2">Register</Button>
      </form>
    </>
  );
};

export default Register;
