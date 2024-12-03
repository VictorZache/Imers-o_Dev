import { getTodosPosts, criarPost } from "../models/postModel.js"; // Importa funções do modelo para manipulação de posts
import fs from "fs"; // Módulo do Node.js para manipulação de arquivos

// Função para listar todos os posts
export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Busca todos os posts do banco de dados
    res.status(200).json(posts); // Retorna os posts encontrados como resposta JSON com status 200 (OK)
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtém o corpo da requisição contendo os dados do novo post
    try {
        const postCriado = await criarPost(novoPost); // Salva o novo post no banco de dados
        res.status(200).json(postCriado); // Retorna o post criado como resposta JSON com status 200 (OK)
    } catch (erro) {
        console.error(erro.message); // Loga o erro no console
        res.status(500).json({ "Erro": "Falha na requisição" }); // Retorna erro genérico ao cliente
    }
}

// Função para fazer upload de uma imagem e criar um post
export async function uploadImagem(req, res) {
    try {
        // Verifica se o arquivo foi enviado
        if (!req.file) {
            return res.status(400).json({ Erro: "Nenhum arquivo enviado" }); // Retorna erro caso nenhum arquivo seja enviado
        }

        // Cria o objeto do post, incluindo informações da imagem
        const novoPost = {
            desc: req.body.desc || "Sem descrição", // Descrição padrão caso não seja enviada
            urlFoto: `/uploads/${req.file.filename}`, // Caminho da imagem salva
            alt: req.body.alt || "Imagem sem descrição" // Texto alternativo padrão
        };

        const postCriado = await criarPost(novoPost); // Salva o post com a imagem no banco de dados
        const imgAtualizada = `uploads/${postCriado.insertedId}.png`; // Renomeia o arquivo para associá-lo ao ID do post criado
        fs.renameSync(req.file.path, imgAtualizada); // Atualiza o nome do arquivo no sistema de arquivos
        res.status(201).json(postCriado); // Retorna o post criado com status 201 (Criado)
    } catch (erro) {
        console.error(erro.message); // Loga o erro no console
        res.status(500).json({ Erro: "Falha na requisição" }); // Retorna erro genérico ao cliente
    }
}
