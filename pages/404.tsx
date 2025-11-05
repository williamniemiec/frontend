import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-dark-green mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-dark-green text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 font-medium"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
}

