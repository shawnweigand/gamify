import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

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
                        <div className='flex place-content-center pt-5'>
                            <div className="flex m-2 space-x-2 justify-center">
                                <button type="button" className="inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                    <a href={route('login')}>Log in</a>
                                </button>
                            </div>
                            <div className="flex m-2 space-x-2 justify-center">
                                <button type="button" className="inline-block px-6 py-2.5 bg-indigo-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">
                                    <a href={route('register')}>Register</a>
                                </button>
                            </div>
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
