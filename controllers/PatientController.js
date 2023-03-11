import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma"; // prisma client


// route for fetching all notes
const getAllPatients = catchAsyncErrors(async (req, res) => {
    
    const patientsArray = await prisma.Patient.findMany();

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});


// route for fetching all notes
const getAllPatientsSlugged = catchAsyncErrors(async (req, res) => {

    const patientsArray = await prisma.Patient.findMany();

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});



// route for post a Patient
const postPatient = catchAsyncErrors(async (req, res) => {
    const { name, age, gender } = req.body;
    console.log(req.body);
    const patient = await prisma.Patient.create({
        data: {
            name: name,
            age: parseInt(age),
            gender: gender,
        },
    });
    res.status(200).json({
        status: "success",
        data: patient,
    });
});

// route for deleting through a note id request dynamically
const deletePatient = catchAsyncErrors(async (req, res) => {
    const { id } = req.query;
    await prisma.Patient.delete({
        where: {
            id: parseInt(id),
        },
    });

    res.status(200).json({
        status: "success",
        data: null,
    });
});

// get one note from with a note id request dynamically
const getPatient = catchAsyncErrors(async (req, res) => {
    const { id } = req.query;
    const patient = await prisma.Patient.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    res.status(200).json({
        status: "success",
        data: {
            patient,
        },
    });
});

// update a note from with a note id request dynamically
const updatePatient = catchAsyncErrors(async (req, res) => {
    // get id from req.query
    const { id } = req.query;
    // get submitted form data from req.body
    // const { echo_, ecg_ } = req.body;
    const data=req.body;
    console.log(data);
    const patient = await prisma.Patient.update({
        where: {
            id: parseInt(id),
        },
        data:data,
        // data: {
        //     // change str string to Boolean value -> Boolean(string:str);
        //     echo_: Boolean(echo_),
        //     ecg_: Boolean(ecg_),
        // },
    });
    res.status(200).json({
        status: "success",
        data: {
            patient,
        },
    });
});


// route for fetching all Patient of particular date
const getPatientsOnDate = catchAsyncErrors(async (req, res) => {
    const {date} = req.query;
    console.log(date);
    const createdAt = new Date(date); // set the desired date
    const patientsArray = await prisma.Patient.findMany({
        where: {
            createdAt: {
                gte: createdAt,
                lt: new Date(createdAt.valueOf() + 24 * 60 * 60 * 1000), // add one day to get records until the end of the day
            },
        }
    });

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});

// route for fetching all Patient of particular date
const getPatientsOnDateEcho = catchAsyncErrors(async (req, res) => {
    const date = req.body;
    const createdAt = new Date(date); // set the desired date
    const patientsArray = await prisma.note.findMany({
        where: {
            createdAt: {
                gte: createdAt,
                lt: new Date(createdAt.valueOf() + 24 * 60 * 60 * 1000), // add one day to get records until the end of the day
            },
            echo_: true,
        },
    });

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});

// route for fetching all Patient of particular date
const getPatientsOnDateECG = catchAsyncErrors(async (req, res) => {
    const date = req.body;
    const createdAt = new Date(date); // set the desired date
    const patientsArray = await prisma.note.findMany({
        where: {
            createdAt: {
                gte: createdAt,
                lt: new Date(createdAt.valueOf() + 24 * 60 * 60 * 1000), // add one day to get records until the end of the day
            },
            ecg_: true,
        },
    });

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});

// route for fetching all notes
const getAllPatientsQueried = catchAsyncErrors(async (req, res) => {
    var slug=req.query;
    // console.log(slug);
    if(slug["id"]){slug["id"]=parseInt(slug["id"]);}
    if(slug["createdAt"]){
        slug["createdAt"] = new Date(slug["createdAt"]); // set the desired date
        slug["createdAt"]={
            gte: slug["createdAt"],
            lt: new Date(slug["createdAt"].valueOf() + 24 * 60 * 60 * 1000), // add one day to get records until the end of the day
        }
    }
    if(slug["echo_"]){
        slug["echo_"]=Boolean(slug["echo_"]);
    }
    if(slug["ecg_"]){
        slug["ecg_"]=Boolean(slug["ecg_"]);
    }

    const patientsArray = await prisma.Patient.findMany({
        where:slug,
    });

    res.status(200).json({
        status: "success",
        data: {
            patientsArray,
        },
    });
});

// Functions
const getAllPatientsFunc = async () => {
    const patientsArray = await prisma.Patient.findMany();
    return patientsArray;
}



export {
    getAllPatientsFunc,
    getAllPatients,
    postPatient,
    deletePatient,
    getPatient,
    updatePatient,
    getPatientsOnDate,
    getPatientsOnDateECG,
    getPatientsOnDateEcho,
    getAllPatientsQueried,
};