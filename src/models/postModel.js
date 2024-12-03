import conectarAoBanco from "../config/dbConfig.js"; // Importa a função de conexão com o banco de dados

// Conecta ao banco de dados usando a string de conexão definida nas variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar todos os posts no banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersao-dev"); // Acessa o banco de dados "imersao-dev"
    const colecao = db.collection("posts"); // Obtém a coleção "posts"
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
};

// Função para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-dev"); // Acessa o banco de dados "imersao-dev"
    const colecao = db.collection("posts"); // Obtém a coleção "posts"
    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(novoPost);
}
