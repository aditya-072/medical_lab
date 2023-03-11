import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Delete({ patientsArray }) {
    // console.log(patientsArray);
    const [name, setName] = useState(patientsArray[0].name);
    const [age, setAge] = useState(patientsArray[0].age);
    const [gender, setGender] = useState(patientsArray[0].gender);
    const [echo_, setEcho_] = useState(patientsArray[0].echo_);


    useEffect(() => {
        if (patientsArray[0].echo_) {
            // disable html form input element if it is true in database
            document.getElementById("echo_").disabled = true;

        }
        // const element = document.getElementById('myElement');
        // element.style.color = color;
    }, [patientsArray]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log({ name, age, gender })
        // const data = {
        //     echo_:echo_
        // }
        // api request to delete patient from database
        const response = await axios.delete(`/api/patients/${patientsArray[0].id}`);
        // console.log(response);
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='name'>Name</label>
                <input value={name} disabled type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor='age'>Age</label>
                <input disabled value={age} type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} />
                <label htmlFor='gender'>Gender</label>
                <input disabled value={gender} type="text" id="gender" name="gender" onChange={(e) => setGender(e.target.value)} />
                <label>
                    <input type="checkbox" id='echo_' checked={echo_} onChange={(e) => setEcho_(e.target.checked)} />
                    Echo
                </label>
                <button type='submit'> Delete</button>
            </form>


        </div>
    )
}



export async function getServerSideProps(context) {
    // const someQueryParam = query.someQueryParam;
    // const {query}=req.query;
    // console.log(query);
    const { query } = context;
    // const {res}=context;
    // console.log(query);
    const { host } = context.req.headers;
    // console.log(host)
    // redirect to some another page if update request does on contain the id of the patient
    if (!query["id"]) {
        return {
            redirect: {
                destination: `http://${host}/patients`,
                permanent: false,
            },
        };
    }
    // console.log(query["id"])
    // Fetch data using the query parameter
    // const data = await fetchData(someQueryParam);
    // const res=await fetch(`http://${host}/api/patients/query?id=query["id"]`);
    // const res=await fetch(`http://${host}/api/patients/query["id"]`);
    // fetch patient data from databse by id
    const response = await axios.get(`http://${host}/api/patients/query?id=${query["id"]}`);

    // console.log(response.data.data);
    const patientsArray = response.data.data.patientsArray;
    // console.log(patientsArray);

    // Return the data as props
    return { props: { patientsArray } };
}
export default Delete