import express from "express"; // Import Express framework
import routes from "./src/routes/postsRoutes.js";

// **Optional (if not using a database):**
// const posts = [  // Array of mock posts (comment out if using database)
//     {
//         id: 1,
//         desc: "Uma foto",
//         image: "https://placecats.com/millie/300/150"
//     },
//     // ... more posts
// ];

const app = express(); // Create an Express application instance
routes (app)


// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Servidor está ouvindo na porta 3000."); // Log message in Portuguese
});

// **Database-driven route:**
