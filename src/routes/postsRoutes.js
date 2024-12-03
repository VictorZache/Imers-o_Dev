import express from "express"; // Importa o framework Express
import path from "path"; // Módulo para trabalhar com caminhos de arquivos e diretórios
import multer from "multer"; // Biblioteca para upload de arquivos
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js"; // Importa funções do controlador de posts

// Configuração de armazenamento para o multer
const storage = multer.diskStorage({
    // Define o destino onde os arquivos enviados serão armazenados
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Diretório 'uploads' será usado para armazenar arquivos
    },
    // Define o nome do arquivo salvo
    filename: function (req, file, cb) {
        cb(null, file.originalname); // O nome original do arquivo será mantido
    }
});

// Configura o multer com o armazenamento personalizado
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação
const routes = (app) => {
    app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições
    app.use('/uploads', express.static(path.join(process.cwd(), 'uploads'))); // Torna os arquivos na pasta 'uploads' acessíveis publicamente

    // Rota para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    // Rota para fazer upload de uma imagem e criar um post associado
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes; // Exporta as rotas para serem usadas em outros arquivos
