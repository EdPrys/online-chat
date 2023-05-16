import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";

const SingUp = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slate-600 border border-gray-500">
        <Heading>Реєстрація</Heading>

        <Input type="email" name="email" placeholder="Ваша пошта" icon="mail" />
        <Input
          type="text"
          name="name"
          placeholder="Ім'я користувача"
          icon="user"
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          icon="lock"
        />
        <Input
          type="password"
          name="confirm-password"
          placeholder="Підтвердити пароль"
          icon="lock"
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
