// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
// handle server error middleware
import onError from "../../../middlewares/errors";
// import the notes controller for postingNotes and fetching all notes
// import { postNote, getAllNotes } from "../../../controllers/NotesController";
// import { getAllUsers, postUser } from "@/controllers/UserController";
import { updatePatient, deletePatient, getPatient } from "@/controllers/PatientController";

// initiate next-connect with error middleware
const handler = nc({ onError });

// handler request from "api/notes" endpoint

handler.get(getPatient);
// handle post request for posting a note
handler.put(updatePatient);
// handle post request for posting a note
handler.delete(deletePatient);

export default handler;