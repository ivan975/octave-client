import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import not_found from '../../assets/images/not_found.svg';
const ErrorPage = () => {
    const error = useRouteError();

    return (
        <section className="flex items-center h-full sm:p-16 bg-white-900 darktext-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src={not_found} alt="" />
                <p className="text-red-600">something went wrong!!!</p>
                <p className="text-3xl text-red-500">{error.message || error.statusText}</p>
                <Link to="/" className="px-8 py-3 font-semibold rounded dark:bg-purple-400 dark:text-gray-900">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;