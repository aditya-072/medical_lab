// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
// handle server error middleware
import onError from "../../../middlewares/errors";
// import the notes controller for postingNotes and fetching all notes
// import { postNote, getAllNotes } from "../../../controllers/NotesController";
import { getAllUsers, postUser } from "@/controllers/UserController";

// initiate next-connect with error middleware
const handler = nc({ onError });

// handler request from "api/notes" endpoint
// handle post request for posting a note
handler.get(getAllUsers);
// handle post request for posting a note
handler.post(postUser);

export default handler;