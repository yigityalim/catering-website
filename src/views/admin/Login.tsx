import Logo from "../../components/Logo.tsx";
import {Link} from "react-router-dom";
import React from "react";

type User = {
    email: string,
    password: string,
    remember: boolean
}

export default function Login(): React.JSX.Element {

    const [user, setUser] = React.useState<User>({
        email: "",
        password: "",
        remember: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        const newValue: string | boolean = type === 'checkbox' ? checked : value;

        setUser((prevState: User) => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <section className="bg-wash dark:bg-wash-dark">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-y-12">
                <div className="flex flex-row items-center justify-center select-none">
                    <Logo link={false}/>
                    <span className="ml-2 text-2xl font-bold tracking-tight text-brand/80">/Admin</span>
                </div>
                <div
                    className="w-full bg-card rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-card-dark dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method="post">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" onChange={handleChange}
                                       className="bg-wash dark:bg-wash-dark border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@mail.com"/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifre</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleChange}
                                       className="bg-wash dark:bg-wash-dark border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center h-full">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            name="remember"
                                            onChange={handleChange}
                                            checked={user.remember}
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300 cursor-pointer">Beni
                                            Hatırla</label>
                                    </div>
                                </div>
                                <a href="#"
                                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Şifreni
                                    mi Unuttun?</a>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-brand hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Giriş Yap
                            </button>
                            <p className="text-sm font-light text-dark dark:text-light">
                                Hesabınız yok mu?
                                <Link to="/admin/signin" className="text-dark hover:underline hover:text-brand dark:text-light">
                                    Kayıt Ol
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}