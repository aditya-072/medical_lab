import React, { useState } from 'react'
import axios from 'axios';

// import handler from '@/lib/nextConnect';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { getAllUsers } from '@/controllers/UserController';
// import { getAllPatientsFunc } from '@/controllers/PatientController';
// function Test({jsonData}) {
//     console.log(jsonData);


//   return (
//     <div>Test</div>
//   )
// }

// export async function getServerSideProps(context) {

//     const data=await getAllPatientsFunc();
//     // we need to convert this data to json before sending
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//     return {
//         props: { jsonData }
//     }
// }

// export default Test

import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { signOut } from 'next-auth/react';
function Test() {
    const { status, data } = useSession();
    useEffect(() => {
        if (status == "unauthenticated") Router.replace("/auth/signin");


    }, [status])
    const handleClick=async(e)=>{
        signOut();
        

    }
    if (status == "authenticated") {
        return (
            <div>
                This page is Protected for special people. like{"\n"}
                {JSON.stringify(data.user, null, 2)}
                <button onClick={handleClick}> SignOut</button>
            </div>
        );
    }


    return (
        <div>
            loading....
        </div>
    )
}

export default Test
// export async function getServerSideProps(context) {
//     // const someQueryParam = query.someQueryParam;
//     // const {query}=req.query;
//     // console.log(query);
//     const {query}=context;
//     // const {res}=context;
//     console.log(query);
//     const {host}=context.req.headers;
//     console.log(host)
//     if (!query["id"]) {
//         return {
//             redirect: {
//               destination: `http://${host}/patients`,
//               permanent: false,
//             },
//           };
//     }

//     // Fetch data using the query parameter
//     // const data = await fetchData(someQueryParam);

//     // Return the data as props
//     return { props: {} };
// }