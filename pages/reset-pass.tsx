import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type FormData = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().min(1, { message: "Не коректна електронна адреса" }),
});

const ResetPass = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);
  return (
    <Layout className="flex flex-col">
      <form
        className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slate-600 border border-gray-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>
          Забули <br />
          адресу електронної <br />
          пошти/пароль?
        </Heading>
        <p className="mb-8 text-lg text-center">
          Ми надішлемо вам повідомлення з інструкціями <br /> для скидання
          пароля
        </p>
        <Input
          type="email"
          placeholder="name@example.com"
          errors={errors}
          {...register("email")}
        />
        <Button type="submit">Надішліть мені повідомлення</Button>
        <p className="text-lg text-center">
          Згадали пароль? <Link href="/sign-in">Увійти</Link>
        </p>
      </form>
    </Layout>
  );
};

export default ResetPass;
