import Button from '@/components/shared/buttons/Button/Button';
import Input from '@/components/shared/forms/Input/Input';
import Layout from '@/components/shared/layout/Layout'
import Heading from '@/components/shared/typography/Heading/Heading';
import Link from 'next/link';

const SingUp = () => {
    return <Layout className="flex flex-col">
        <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slade-600 border border-grey-500">
            <Heading>Реєстрація</Heading>

            <Input 
                type="e-mail" 
                name="email" 
                placeholder="Ваша пошта" 
                icon = "user" 
            />
            <Input 
                name="name" 
                placeholder="Ім'я користувача" 
                icon = "search" 
            />
            <Input 
                type="password"  
                name="password"  
                placeholder="Пароль" 
                icon = "chat" 
            />
            <Input 
                type="password" 
                name="confirm-password" 
                placeholder="Підтвердити пароль" 
                icon = "chat" 
            />

            <Button type="submit">Зареєструватись</Button>
            
            <p className="text-lg text-center">
                    Ви вже маєте обліковий запис? 
                    <Link href="/sign-in">
                          Увійти
                    </Link>
            </p>
        </form>
    </Layout>
};

export default SingUp;