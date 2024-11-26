import express from "express";

const posts = [
    {
        id: 1,
        desc: "Uma foto",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        desc: "Uma foto",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        desc: "Uma foto",
        image: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use (express.json());

app.listen(3000, () => {
    console.log("Servido esta ouvindo.");
    
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

});


