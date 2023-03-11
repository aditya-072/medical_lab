// Define the API endpoint
export default async function handler(req, res) {


    try {
      // Get the two parameters from the request
    //   const { param1, param2 } = req.query;
    console.log("chala");
    console.log(req.query);
  
      // Query the database using the two parameters
      
  
      // Return the results as a JSON response
      res.status(400);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }