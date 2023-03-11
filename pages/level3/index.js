import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Level3() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, age, gender })
        const data = {
            name: name,
            age: age,
            gender: gender,
        }

        const response = await axios.post("/api/patient", data);
        console.log(response);
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor='age'>Age</label>
                <input type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} />
                <label htmlFor='gender'>Gender</label>
                <input type="text" id="gender" name="gender" onChange={(e) => setGender(e.target.value)} />

                <button type='submit'> Submit</button>
            </form>


        </div>
    )
}

export default Level3

