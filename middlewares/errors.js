import { NextApiRequest, NextApiResponse } from "next";

export default async function onError(error, req, res, next){
    res.status(500).end(error.toString());
    next();
}