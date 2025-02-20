"use client";
import React from 'react';
import InputField from '../form/InputField';
import PasswordField from '../form/PasswordField';
import { Formik } from 'formik';
import { loginSchema } from '@/schemas/authSchemas';
import LoginSignupButton from '../button/LoginSignupButton';
import HeaderMedium from '../text/HeadingMedium';
import { useDispatch } from 'react-redux';
import authAppwriteServices from '@/components/config/authAppwriteServices';
import { login } from '@/components/store/authServices';
import { useRouter } from 'next/navigation';
import { Routes } from '@/utils/routes';
import ParagraphSmall from '../paragraph/paragraphSmall';
import Link from 'next/link';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
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
            Sign In
          </HeaderMedium>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
              console.log(values);
              setLoading(true);
              setError(null);
              try {
                const response = await authAppwriteServices.login({ email: values.email, password: values.password });
                if (response) {
                  const userDataLogIn = await authAppwriteServices.getCurrentUser();
                  if (userDataLogIn) {
                    dispatch(login(userDataLogIn));
                    router.push(Routes.home);
                  } else {
                    throw new Error('User account not created');
                  }
                } else {
                  throw new Error('User account not created');
                }
              } catch (error: any) {
                setError(error.message);

              }
            }}
          >
            {({ handleChange, handleSubmit, values, errors, isValid, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <InputField
                  className="mb-4"
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                  label='Email'
                  onBlur={handleBlur}
                  touched={false}
                />
                <PasswordField
                  className="mb-4"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  error={errors.password}
                  label='Password'
                  onBlur={handleBlur}
                  touched={false}
                />
                <LoginSignupButton
                  type="submit"
                  className="w-full"
                  width='w-full'
                  height='h-12'
                  margin='m-0'
                  boxShadow='shadow-lg'
                  disabled={!isValid || loading}
                >
                  {loading ? 'Loading...' : 'Sign In'}
                </LoginSignupButton>
                <ParagraphSmall justify='justify-end'>
                  Don't have an account?
                  <Link href={Routes.signup} className='text-blue-500 cursor-pointer underline px-2'>
                    Register
                  </Link>
                </ParagraphSmall>
              </form>
            )}
          </Formik>
          {error && <ParagraphSmall justify='justify-center' color="text-red-500">{error}</ParagraphSmall>}
        </div>
      </div>
    </main >
  );
};

export default LoginPage;
