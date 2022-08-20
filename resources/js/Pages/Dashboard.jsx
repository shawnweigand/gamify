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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome, {props.auth.user.name}</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='mb-5 text-lg'>
                       ⚔️ Quests ⚔️
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <input placeholder="Type quest here" type="text" value={data.quest_name} onChange={e => setData('quest_name', e.target.value)} />
                                <button className='pl-3' type="submit" disabled={processing}>➕ Add Quest</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </Authenticated>
    );
}
