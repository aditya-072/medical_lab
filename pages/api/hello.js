// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllUsers, getall_ } from "@/controllers/UserController"
import axios from "axios"

export default async function handler(req, res) {
    // const data=await axios.get(getAllUsers(req, res));
    // const data=await getall_();
    // console.log(data);
  res.status(200).json({ name: 'John Doe' })
}
