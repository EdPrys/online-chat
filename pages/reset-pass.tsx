import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/dist/client/link";

const RestPass = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slade-600 border border-grey-500">
        <Heading>Забули адресу електронної пошти/пароль?</Heading>
        <p className="mb-8 text-lg text-center">
          Ми надішлемо вам повідомлення з інструкціями для скидання пароля
        </p>
        <Input
          type="e-mail"
          name="email"
          placeholder="name@example.com"
          icon="mail"
        />
        <Button type="submit">Зареєструватись</Button>
        <p className="text-lg text-center">
          Згадали пароль?
          <Link href="/sign-in"> Увійти</Link>
        </p>
      </form>
    </Layout>
  );
};

export default RestPass;
