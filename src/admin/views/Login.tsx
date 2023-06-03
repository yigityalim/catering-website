import React from 'react';
import {Formik, Form, Field, FormikValues, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Logo from "../../components/Logo.tsx";
import {useSignInEmailPassword} from "@nhost/react";
import {Navigate} from "react-router-dom";
import Spinner from "../../components/Spinner.tsx";
import {Transition} from "@headlessui/react";
import c from "classnames";

const validationSchema: Yup.ObjectSchema<FormValues, Yup.AnyObject, {
    email: string | undefined,
    password: string | undefined
}> = Yup.object({
    email: Yup
        .string()
        .email('Geçerli bir e-posta adresi girin.')
        .max(255, 'E-posta en fazla 255 karakter olmalıdır.')
        .matches(
            /^(?:(?!.*[İıŞşĞğÜüÇçÖö]).)*$/,
            'E-posta Türkçe karakter içermemelidir.'
        )
        .required('E-posta zorunludur.'),
    password: Yup
        .string()
        .min(8, 'Şifre en az 8 karakter olmalıdır.')
        .max(32, 'Şifre en fazla 32 karakter olmalıdır.')
        .matches(
            /^(?:(?!.*[İıŞşĞğÜüÇçÖö]).)*$/,
            'Şifre Türkçe karakter içermemelidir.'
        )
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.'
        )
        .required('Şifre gereklidir.')
});

type FormValues = {
    email: string,
    password: string
}

export default function Login(): React.ReactElement {
    const {
        signInEmailPassword,
        needsEmailVerification,
        isLoading,
        isSuccess,
        error
    } = useSignInEmailPassword();

    const handleSubmit = async (values: FormikValues): Promise<void> => {
        try {
            await signInEmailPassword(values.email, values.password);
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Spinner/>;
    if (isSuccess) return <Navigate to="/admin/"/>;
    if (needsEmailVerification) return <div>Eposta doğrulaması gerekiyor.</div>;

    return (
        <div className="bg-wash dark:bg-wash-dark flex items-start md:items-center justify-center w-full h-full">
            <div
                className="h-full flex flex-col max-w-lg items-center justify-center md:px-6 md:py-8 mx-auto w-full md:h-screen lg:py-0 gap-y-12">
                <div
                    className="flex flex-row items-center justify-start md:justify-center select-none w-full gap-2 p-6 md:p-0">
                    <Logo link={false}/>
                    <span
                        className="text-2xl font-bold tracking-tight text-brand/70 flex flex-col items-end justify-end">Admin</span>
                </div>
                <Transition
                    as="div"
                    appear={true}
                    show={true}
                    enter="transition ease-in-out duration-700 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0 w-full h-full"
                    leave="transition ease-in-out duration-700 transform"
                    leaveFrom="translate-y-0 w-full h-full"
                    leaveTo="translate-y-full"
                >
                    <div
                        className="w-full h-full md:h-auto bg-card rounded-t-lg md:rounded-lg shadow dark:border xl:p-0 dark:bg-card-dark dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-full w-full">
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, isValidating, isValid }) => (
                                    <Form className="flex flex-col gap-y-4 w-full h-full">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                E Posta
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                className={c(
                                                    "bg-wash dark:bg-wash-dark border",
                                                    {
                                                        "border-red-500": errors.email && touched.email,
                                                        "border-green-500": touched.email && !errors.email,
                                                        "border-gray-300": !errors.email && !touched.email
                                                    },
                                                    "text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                                                )}
                                                placeholder="Eposta"
                                            />
                                            {errors.email && touched.email && <div className="text-red-500 mt-3">{errors.email}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Şifre
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className={c(
                                                    "bg-wash dark:bg-wash-dark border",
                                                    {
                                                        "border-red-500": errors.password && touched.password,
                                                        "border-green-500": touched.password && !errors.password,
                                                        "border-gray-300": !errors.password && !touched.password
                                                    },
                                                    "text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                                                )}
                                            />
                                            <ErrorMessage name="password" component="div" className="text-red-500 mt-3"/>
                                        </div>
                                        {isValid && touched.password && (
                                            <button
                                                type="submit"
                                                className={c(
                                                    "transition duration-300 ease-in-out bg-brand w-full mt-4 text-white focus:ring-4 focus:outline-none rounded-lg text-smd font-bold px-5 py-2.5 text-center",
                                                    {
                                                        "bg-green-600 hover:bg-primary-700": !isValidating,
                                                        "bg-red-400 cursor-not-allowed": isValidating
                                                    }
                                                )}
                                            >
                                                Giriş Yap
                                            </button>
                                        )}
                                        {error?.status === 401 && <div className="text-red-500 text-center font-semibold">Eposta veya şifre hatalı.</div>}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
}
