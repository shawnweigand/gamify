import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Missions(props) {

    return (
        <>
        <div className='p-4 relative hover:bg-gray-50'>
            {props.mission.name}
            <Link href={route('missions.destroy',props.mission.id)} method="delete" preserveScroll="true" as="button" type="button" className="absolute right-0 top-3 inline-block mr-5 px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                Delete
            </Link>
        </div>
        </>
    )
}