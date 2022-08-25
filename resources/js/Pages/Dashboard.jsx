import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    
    const { data, setData, post, processing, reset } = useForm({
        quest_name: "",
    })

    function submit(e) {
        e.preventDefault()
        post('/quests', {
            preserveScroll: true,
            onSuccess: () => reset('quest_name'),
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome, {props.auth.user.name}!</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-5 text-lg'>
                       ⚔️ Quests ⚔️
                    </div>

                    {props.quests.map((quest) => (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3">
                            <a data-bs-toggle="collapse" href={"#" + quest.name} role="button" aria-expanded="false" aria-controls={quest.name}>
                                <div className="relative p-6 bg-white border-b border-gray-200">
                                        {quest.name}
                                    <Link href={route('quests.destroy',quest.id)} method="delete" preserveScroll="true" as="button" type="button" className="absolute right-0 inline-block mr-5 px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Delete
                                    </Link>
                                </div>
                            </a>
                            <div class='p-5 collapse' id={quest.name}>
                                Example mission dropdown
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <input placeholder="Type quest here" type="text" value={data.quest_name} onChange={e => setData('quest_name', e.target.value)} />
                                <button className='pl-3' type="submit" disabled={processing}>➕ Add Quest</button>
                                <h1 className='text-sm text-red-400'>{props.errors.quest_name}</h1>
                            </form>
                        </div>
                    </div>
                </div >
            </div>





            
        </Authenticated>
    );
}
