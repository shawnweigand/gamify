import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="text-center max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <div className="text-4xl">
                            Welcome to
                        </div>
                        <div className="text-4xl font-mono">
                            gamify
                        </div> 
                        <div className="text-md pt-5 text-gray-700 dark:text-gray-500">
                            Your personal reward system to leveling up in the game of life
                        </div>
                    </div> 

                    <div className="text-center pt-4 absolute inset-x-0 bottom-0 text-sm text-gray-500 sm:items-center sm:justify-between">
                            Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
                    </div>
                </div>
            </div>
        </>
    );
}
