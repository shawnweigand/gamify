import Missions from '@/Pages/Missions';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Quests(props) {

    function listMissions(quest_id) {
        var missions = props.missions[quest_id];
        if (missions) {
            var response = [];
            missions.forEach((mission, index) => {
                response.push(mission);
            })
            return (response.map((mission) => (
                <Missions mission={mission}/>
            )));
        }
        return "No missions";
    }

    return (
        <>
        {props.quests.map((quest) => (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3">
                    <div className="relative pl-6 bg-white hover:bg-gray-50 border-b border-gray-200">
                            <button className='w-full h-16 text-left' data-bs-toggle="collapse" href={"#" + quest.name} aria-expanded="false" aria-controls={quest.name}>
                                {quest.name}
                            </button>
                        <Link href={route('quests.destroy',quest.id)} method="delete" preserveScroll="true" as="button" type="button" className="absolute right-0 inline-block mr-5 mt-4 px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                            Delete
                        </Link>
                    </div>
                <div className='p-5 collapse' id={quest.name}>
                    {listMissions(quest.id)}
                </div>
            </div>
        ))}
        </>
    );

}