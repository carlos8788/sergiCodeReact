import React from 'react'

export const LaunchItem = (launch) => {
    return (
        <>
            <div className='border rounded my-2 p-4'>
                <div className='d-flex justify-content-between my-2 p-2 '>
                    <li className='bg-gray decorated-none' key={launch.flight_number} >{launch.mission_name} ({launch.launch_year})</li>
                    <button className={launch.launch_success ? 'btn btn-success button-with' : 'btn btn-danger button-with'} disabled>{launch.launch_success ? 'success' : 'failed'}</button>
                </div>
                <div>
                    <button className='btn btn-info'>More Details</button>
                </div>
            </div>


        </>
    )
}
