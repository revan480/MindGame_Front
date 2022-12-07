import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Forgot = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-7">
      <h2 className="text-3xl font-bold text-center">Enter your email</h2>
      <InputField label="Email" name="email" register={register} required className="w-full" />
      <Button className="w-fit">Send confirmation link</Button>
    </div>
  );
};

export default Forgot;
