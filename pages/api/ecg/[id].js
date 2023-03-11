// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
// handle server error middleware
import onError from "../../../middlewares/errors";
// import the notes controller for postingNotes and fetching all notes
// import { postNote, getAllNotes } from "../../../controllers/NotesController";
// import { getAllUsers, postUser } from "@/controllers/UserController";
// import { postPatient, getAllPatients } from "@/controllers/PatientController";
import { getNote, postNote } from "@/controllers/ECGController";

// initiate next-connect with error middleware
const handler = nc({ onError });

// handler request from "api/notes" endpoint
// handle post request for posting a note
handler.get(getNote);
// handle post request for posting a note
// handler.post(postNote);

export default handler;