import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/dist/client/link";

const SignIn = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slade-600 border border-grey-500">
        <Heading>Ласкаво просимо</Heading>

        <Input
          type="e-mail"
          name="email"
          placeholder="Ваша пошта"
          icon="user"
        />

        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          icon="chat"
        />

        <div className="text-right mb-7">
          <Link href="/sign-in">Забули пароль?</Link>
        </div>

        <Button type="submit">Зареєструватись</Button>

        <p className="text-lg text-center">
          У вас немає облікового запису?
          <Link href="/sign-in"> Реєстрація</Link>
        </p>
      </form>
    </Layout>
  );
};

export default SignIn;
