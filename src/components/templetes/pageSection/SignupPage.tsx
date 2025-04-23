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
import ParagraphSmall from '../paragraph/paragraphSmall';
import Link from 'next/link';
import { createAccount } from '@/components/store/authSlices';
import { AppDispatch } from '@/components/store/store';
import Swal from 'sweetalert2';

const SignupPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [loading, setLoading] = React.useState<boolean>(false);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
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
                        onSubmit={async (values) => {
                            setLoading(true);
                            try {
                                const response = await dispatch(createAccount({
                                    name: values.name,
                                    email: values.email,
                                    password: values.password
                                })) as { payload: { success: boolean, message?: string } };
                                if (!response.payload.success) {
                                    Toast.fire({
                                        icon: 'error',
                                        text: response.payload.message || 'An unknown error occurred',
                                    });
                                } else {
                                    Toast.fire({
                                        icon: 'success',
                                        text: response.payload.message || 'Account created successfully',
                                    });
                                    router.push(Routes.login);
                                }
                            } catch (error: any) {
                                console.error("🚀 ~ onSubmit={ ~ error:", error)
                                Toast.fire({
                                    icon: 'error',
                                    text: error?.message || 'An unknown error occurred',
                                });
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
