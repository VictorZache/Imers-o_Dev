import conectarAoBanco from "../config/dbConfig.js"; // Import database connection function

// Connect to the database using the provided connection string
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts() {
    const db = conexao.db("imersao-dev"); // Access the "imersao-dev" database
    const colecao = db.collection("posts"); // Get the "posts" collection
    // Retrieve all posts from the collection
    return colecao.find().toArray();
  };