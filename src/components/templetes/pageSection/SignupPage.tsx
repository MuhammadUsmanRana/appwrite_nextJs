"use client";
import React from 'react';
import InputField from '../form/InputField';
import PasswordField from '../form/PasswordField';
import { Formik } from 'formik';
import { SignupSchema } from '@/schemas/authSchemas';

const SignupPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-96">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <InputField
                                className="mb-4"
                                placeholder="Name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={values.name}
                                error={errors.name}
                            />
                            <InputField
                                className="mb-4"
                                placeholder="Email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                error={errors.email}
                            />
                            <PasswordField
                                className="mb-4"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                                error={errors.password}
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignupPage;
