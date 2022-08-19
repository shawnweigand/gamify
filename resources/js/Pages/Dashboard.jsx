import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    
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
                            <div>
                                <div>{props.auth.user.name}</div>
                                <input type="text" placeholder="Type quest here"  /> {/*value={this.state.value} onChange={this.handleChange} />*/}
                                <Link className='pl-3' preserveScroll href="/quests" method="post" as="button" data={{ name: "New Quest" }}>➕ Add Quest</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </Authenticated>
    );
}
