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
            const res = await fetch(`/api/patients/query?createdAt=${currDate}&echo_=true`);
            const json = await res.json();
            setData(json.data.patientsArray);
        }
        fetchData();
    }, [currDate]);

    console.log(data)
    async function handleDateChange(e) {
        setSelectedDate(e.target.value);
        const res = await fetch(`/api/patients/query?createdAt=${selectedDate}&echo_=true`);
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
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Report</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // show data when their is data otherwise it will give error that it can not read property of null
                        data.length==0?(<div> Node data found</div>):(data.map(patient => (
                            <tr key={patient.id}>
                                <th scope="row">{patient.id}</th>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>Generate</td>

                            </tr>
                        )))
                    }


                </tbody>
            </table>
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
