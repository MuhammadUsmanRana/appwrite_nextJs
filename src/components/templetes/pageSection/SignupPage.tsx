"use client";
import React, { useEffect } from 'react';
import InputField from '../form/InputField';
import PasswordField from '../form/PasswordField';
import { Formik, ErrorMessage } from 'formik';
import { SignupSchema } from '@/schemas/authSchemas';
import LoginSignupButton from '../button/LoginSignupButton';
import HeaderMedium from '../text/HeadingMedium';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Routes } from '@/utils/routes';
import authAppwriteServices from '@/components/config/authAppwriteServices';
import { login } from '@/components/store/authServices';
import ParagraphSmall from '../paragraph/paragraphSmall';
import Link from 'next/link';
import useLogin from '@/components/customHooks/useLogin';

const SignupPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);
    const {
        createAccount,
      } = useLogin();
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm mt-20">
                    <HeaderMedium
                        padding='p-2'
                        textAlign='text-center'
                        color='color-primary'
                    >
                        Sign Up
                    </HeaderMedium>
                    {error && (
                        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            setLoading(true);
                            setError(null);
                            try {
                                const response = await createAccount({
                                    name: values.name,
                                    email: values.email,
                                    password: values.password
                                });
                                if (response) {
                                    router.push(Routes.login);
                                }
                            } catch (error: any) {
                                console.error("🚀 ~ onSubmit error:", error);
                                setError(error.message || 'Failed to create account');
                            } finally {
                                setLoading(false);
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ handleChange, handleSubmit, values, errors, isValid, handleBlur }) => (
                            <form onSubmit={handleSubmit}>
                                <InputField
                                    label='Name'
                                    name='name'
                                    type='text'
                                    placeholder='Enter your name'
                                    value={values.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    touched={false}
                                    onBlur={handleBlur}
                                    className="mb-4"
                                />
                                <InputField
                                    label='Email'
                                    name='email'
                                    type='email'
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    touched={false}
                                    onBlur={handleBlur}
                                    className="mb-4"
                                />
                                <PasswordField
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder='Enter your password'
                                    value={values.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                    touched={false}
                                    onBlur={handleBlur}
                                    className="mb-4"
                                />
                                <LoginSignupButton
                                    type="submit"
                                    loading={loading}
                                    disabled={!isValid || loading}
                                    className="my-custom-class"
                                    padding="py-4"
                                    width="w-auto"
                                    boxShadow="shadow-lg"
                                    onClick={handleSubmit}
                                >
                                    Sign Up
                                </LoginSignupButton>
                                <ParagraphSmall justify='justify-end'>
                                    Already have an account?{' '}
                                    <Link href={Routes.login} className='text-blue-500 cursor-pointer underline px-2'>
                                        SignIn
                                    </Link>
                                </ParagraphSmall>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </main >
    );
};

export default SignupPage;
