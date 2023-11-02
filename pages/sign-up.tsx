import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type FormData = z.infer<typeof schema>;

const schema = z
  .object({
    name: z.string().min(1, { message: "Введіть Ім'я" }),
    email: z.string().min(1, { message: "Введіть email" }),
    password: z
      .string()
      .min(8, { message: "Пароль має містити мінімум 8 символів" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадаюсть",
    path: ["confirmPassword"], // path of error
  });

const SingUp = () => {
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
        <Heading>Реєстрація</Heading>

        <Input
          type="email"
          placeholder="Ваша пошта"
          icon="mail"
          errors={errors}
          {...register("email")}
        />
        <Input
          type="text"
          placeholder="Ім'я користувача"
          icon="user"
          errors={errors}
          {...register("name")}
        />
        <Input
          type="password"
          placeholder="Пароль"
          icon="lock"
          errors={errors}
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Підтвердити пароль"
          icon="lock"
          errors={errors}
          {...register("confirmPassword")}
        />

        <Button type="submit">Зареєструватись</Button>

        <p className="text-lg text-center">
          Ви вже маєте обліковий запис? <Link href="/sign-in">Увійти</Link>
        </p>
      </form>
    </Layout>
  );
};

export default SingUp;
