"use client";
import React from 'react';
import InputField from '../form/InputField';
import PasswordField from '../form/PasswordField';
import { Formik } from 'formik';
import { loginSchema } from '@/schemas/authSchemas';
import LoginSignupButton from '../button/LoginSignupButton';
import HeaderMedium from '../text/HeadingMedium';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Routes } from '@/utils/routes';
import ParagraphSmall from '../paragraph/paragraphSmall';
import Link from 'next/link';
// import useLogin from '@/components/customHooks/useLogin';
import { AppDispatch } from '@/components/store/store';
import { loginUser } from '@/components/store/authSlices';
import Swal from 'sweetalert2'


const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
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
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm">

          <HeaderMedium
            padding='p-2'
            textAlign='text-center'
            color='color-primary'
          >
            Sign In
          </HeaderMedium>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
              setLoading(true);
              try {
                const response = await dispatch(loginUser(values)) as { payload: { success: boolean, message?: string } };
                if (!response.payload.success) {
                  setLoading(false);
                  Toast.fire({
                    icon: 'error',
                    text: typeof response.payload === 'string'
                      ? response.payload
                      : response.payload?.message || 'Login failed',
                  });
                } else {
                  Toast.fire({
                    icon: 'success',
                    text: response.payload.message || 'Login successful',
                  });
                  router.push(Routes.home);
                }
              } catch (error) {
                Toast.fire({
                  icon: 'error',
                  text: (error as { message: string })?.message || 'An unknown error occurred',
                });
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
                {error && <ParagraphSmall justify='justify-center' color="text-red-500">{error}</ParagraphSmall>}
                <ParagraphSmall justify='justify-end'>
                  Don't have an account?
                  <Link href={Routes.signup} className='text-blue-500 cursor-pointer underline px-2'>
                    Register
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

export default LoginPage;
