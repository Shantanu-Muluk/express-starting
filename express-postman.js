const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

let user = [
    { id: 1, name: "Shantanu" },
    { id: 2, name: "Sonu" },
    { id: 3, name: "Seema" },
];

// Custom middleware to add req.user property
const addUserMiddleware = (req, res, next) => {
    req.user = "Guest";
    next();
};

// Route to display users
app.get("/users", (req, res) => {
    res.json(user);
});

// Route to add new user
app.post("/users", (req, res) => {
    const { name } = req.body;
    const newUser = { id: user.length + 1, name };
    user.push(newUser);
    res.status(201).json(newUser);
});

// Apply custom middleware to /welcome route
app.use("/welcome", addUserMiddleware);

app.get("/welcome", (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
