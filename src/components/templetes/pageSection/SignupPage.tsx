"use client";
import React from 'react';
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

const SignupPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = React.useState<boolean>(false);
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
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            console.log("🚀 ~ onSubmit={ ~ values:", values)
                            setLoading(true);
                            try {
                                const response = await authAppwriteServices.createAccount({
                                    name: values.name,
                                    email: values.email,
                                    password: values.password
                                });
                                console.log("🚀 ~ response:", response)
                                if (response) {
                                    const userDataSignUp = await authAppwriteServices.getCurrentUser();
                                    console.log("🚀 ~ onSubmit={ ~ userData:", userDataSignUp)
                                    if (userDataSignUp) {
                                        dispatch(login(userDataSignUp));
                                        router.push(Routes.login);
                                    } else {
                                        throw new Error('User account not created');
                                    }
                                } else {
                                    throw new Error('User account not created');
                                }
                            } catch (error: any) {
                                console.error("🚀 ~ onSubmit={ ~ error:", error);
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
                                    disabled={false}
                                    className="my-custom-class"
                                    padding="py-4"
                                    width="w-auto"
                                    boxShadow="shadow-lg"
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
