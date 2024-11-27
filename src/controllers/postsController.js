import getTodosPosts from "../models/postModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Fetch all posts from the database
    res.status(200).json(posts); // Send JSON response with retrieved posts
}

