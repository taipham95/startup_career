import React from 'react';

const CandidatesPage =()=>{
    const CandidatesData =[
        {
            id: '1',
            name: 'John Doe 1',
            position: 'DevOps Engineer',
            salary: '5000',
            status: 'UPLOADED',
        },
        {
            id: '2',
            name: 'John Doe 2',
            position: 'Senior Game Engineer',
            salary: '4000',
            status: 'UPLOADED',
        },
        {
            id: '3',
            name: 'John Doe 3',
            position: 'Product Designer',
            salary: '4000',
            status: 'UPLOADED',
        },
        {
            id: '4',
            name: 'John Doe 4',
            position: 'Social Media Specialist',
            salary: '3500',
            status: 'UNQUALIFIED',
        },
        {
            id: '5',
            name: 'John Doe 5',
            position: 'Senior Game Designer - Homeland',
            salary: '5000',
            status: 'QUALIFIED',
        },
    ]
    
    return(
        <div class='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <div>
            <strong>Candidate List</strong>
            <div class=''>
                <table class='w-full text-gray-700'>
                    <thread>
                        <tr>
                            <td>NAME</td>
                            <td>POSITION</td>
                            <td>SALARY</td>
                            <td>STATUS</td>
                        </tr>
                    </thread>
                    <tbody>
                        {CandidatesData.map(candidate => (
                            <tr key ={candidate.id}>
                                <td>{candidate.id}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.positizon}</td>
                                <td>{candidate.salary}</td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">{candidate.status}</span>
									</span>
								</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default CandidatesPage