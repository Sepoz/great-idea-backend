const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));

let posts = [
    {
        "title": "Title 1",
        "content": "Hi my name is Simone!",
        "date": "Mon, 02 Mar 2020 16:15:30 GMT",
        "id": 1,
        "karmaTotal": 1
    },
    {
        "title": "Title 2",
        "content": "Hi my name is Carla!",
        "date": "Tue, 03 Mar 2020 19:04:42 GMT",
        "id": 2,
        "karmaTotal": 1
    },
    {
        "title": "Title 3",
        "content": "Hi my name is Mirco!",
        "date": "Tue, 03 Mar 2020 19:05:32 GMT",
        "id": 3,
        "karmaTotal": 1
    }
]

app.get("/", (request, response) => {
    response.send("<h1>Hello World!</h1>");
});

app.get("/posts", (request, response) => {
    response.json(posts);
})

app.get("/posts/:id", (request, response) => {
    const id = Number(request.params.id);
    const post = posts.find(post => post.id === id);
    
    if (post) {
        response.json(post);
    } else {
        response.status(404).end();
    }
});

app.delete("/posts/:id", (request, response) => {
    const id = Number(request.params.id);
    posts = posts.filter(post => post.id !== id);

    response.status(204).end();
});

const generateId = () => {
    const maxId = posts.length > 0
        ? Math.max(...posts.map(p => p.id))
        : 0;
    return maxId + 1; 
};

app.post("/posts", (request, response) => {
    const body = request.body;

    if (!body.content) {
        return response.status(400).json({
            error: "content missing"
        });
    };

    const post = {
        title: body.title,
        content: body.content,
        karmaTotal: body.karmaTotal,
        date: new Date(),
        id: generateId()
    };

    posts = posts.concat(post);

    response.json(post);
});

app.patch("/posts/:id", (request, response) => {
    const id = Number(request.params.id);
    const post = posts.find(post => post.id === id);

    const body = request.body;

    post.karmaTotal = body.karmaTotal;

    response.json(post);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});