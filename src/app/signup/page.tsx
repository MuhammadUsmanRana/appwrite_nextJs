// import SignupPage from '@/components/templetes/pageSection/SignupPage';
// import SignupPage from '@/components/templates/pageSection/SignupPage';

import SignupPage from '@/components/templetes/pageSection/SignupPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const Page = () => {
  return <SignupPage />;
};

export default Page;
