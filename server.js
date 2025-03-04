const express = require("express");
const app = express();

const booksRouter = require("./routs/books");

app.use(express.json());

app.use("/books", booksRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});