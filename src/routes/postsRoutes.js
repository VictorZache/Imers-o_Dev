import express from "express"; //Import express Framewor0k
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Parse incoming JSON requests
    app.use(express.json());
    // Route handler for GET requests to "/posts"
    app.get("/posts", listarPosts);     
};


export default routes;