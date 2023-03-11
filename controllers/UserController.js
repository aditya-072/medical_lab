// import the catchError middleware
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../lib/prisma"; // prisma client

// function that will return all users queried
const getAllUsersQueriedFunc=async(query)=>{
    const usersArray = await prisma.User.findMany({
        where:query
    });
    return usersArray;
}


// route for fetching all notes
const getAllUsers = catchAsyncErrors(async (req, res) => {
    const usersArray = await prisma.User.findMany();

    res.status(200).json({
        status: "success",
        data: {
            usersArray,
        },
    });
});

// route for post a note
const postUser = catchAsyncErrors(async (req, res) => {
    const { email, password, level } = req.body;
    const note = await prisma.User.create({
        data: {
            email: email,
            password: password,
            level: parseInt(level),
        },
    });
    res.status(200).json({
        status: "success",
        data: note,
    });
});

// route for deleting through a note id request dynamically
const deleteUser = catchAsyncErrors(async (req, res) => {
    const { id } = req.query;
    await prisma.User.delete({
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
const getUser = catchAsyncErrors(async (req, res) => {
    const { id } = req.query;
    const user = await prisma.User.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    res.status(200).json({
        status: "success",
        data: {
            user,
        },
    });
});

// update a note from with a note id request dynamically
const updateUser = catchAsyncErrors(async (req, res) => {
    const { id } = req.query;
    const { level } = req.body;

    const user = await prisma.note.update({
        where: {
            id: parseInt(id),
        },
        data: {
            level: parseInt(level)
        },
    });
    res.status(200).json({
        status: "success",
        data: {
            user,
        },
    });
});

export { getAllUsersQueriedFunc, getAllUsers, getUser, postUser, deleteUser, updateUser };