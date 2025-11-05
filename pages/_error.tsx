import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

interface ErrorPageProps {
  readonly statusCode?: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const router = useRouter();

  const getErrorMessage = () => {
    if (statusCode === 404) {
      return {
        title: '404',
        heading: 'Page Not Found',
        message: 'The page you are looking for doesn\'t exist or has been moved.',
      };
    }
    if (statusCode === 500) {
      return {
        title: '500',
        heading: 'Server Error',
        message: 'Something went wrong on our end. Please try again later.',
      };
    }
    return {
      title: statusCode?.toString() || 'Error',
      heading: 'An Error Occurred',
      message: 'An unexpected error occurred. Please try again later.',
    };
  };

  const error = getErrorMessage();

  return (
    <>
      <Head>
        <title>{error.title} - Error</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-dark-green mb-4">
            {error.title}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {error.heading}
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            {error.message}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-dark-green text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium"
            >
              Go Back Home
            </button>
            <button
              onClick={() => router.reload()}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = 500;
  }
  return { statusCode };
};

export default ErrorPage;

