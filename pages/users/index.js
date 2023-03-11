import React from 'react'
import { useEffect, useState } from 'react';

import axios from 'axios'


// page to display list of patients
function Patients() {
    // console.log(data.data.patients[0]);
    const currDate = new Date().toISOString().substring(0, 10);
    // console.log(currDate);
    const [selectedDate, setSelectedDate] = useState(currDate);
    const [data, setData] = useState(null); // store patients array
    // console.log(selectedDate);

    useEffect(() => {
        // it does not run when changing value in useState
        async function fetchData() {
            const res = await fetch(`/api/users`);
            const json = await res.json();
            setData(json.data.usersArray);
            // console.log(json.data.usersArray)
        }
        fetchData();
    }, [currDate]);

    async function handleDateChange(e) {
        setSelectedDate(e.target.value);
        const res = await fetch(`/api/patient/query?createdAt=${selectedDate}`);
        const json = await res.json();
        setData(json.data.patientsArray);
        console.log(data)
    }

    return (
        <div>
            <label htmlFor="date">Select a date:</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
            <ul>
                {/* {data.data.patients.map(item => (
                    <li key={item.id}>{item.id}</li>
                ))} */}


            </ul>
        </div>
    )
}


// export async function getServerSideProps(context) {
//     const host = context.req.headers.host;
//     const { data } = await axios.get(`http://${host}/api/patient`);
//     console.log(data);
//     return {
//         props: { data }
//     }
// }

// export async function getServerSideProps(context) {
//     const host=context.req.headers.host;
//     console.log(host);
//     const res = await fetch(`http://${host}/api/patient`);
//     const data = await res.json();

//     console.log(context.req.headers.host);

//     return {
//         props: { data }
//     }
// }

export default Patients
