import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync("db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const writeData = (data) => {
    try
    {
        fs.writeFileSync("db.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/books', (req, res) => {
    const data = readData();
    res.send(data.books);
});

app.get('/books/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.books.find((book) => book.id === id);
    res.send(book);
});

app.post('/books', (req, res) => {
    const data = readData();
    const body = req.body;
    console.log(body);
    const newBook = {
        id: data.books.length + 1,
        ...body
    };

    data.books.push(newBook);
    writeData(data);
    res.send(newBook);
});

app.put('/books/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const body = req.body;
    const book = data.books.find((book) => book.id === id);
    const index = data.books.indexOf(book);
    const updatedBook = { ...book, ...body };
    data.books[index] = updatedBook;
    writeData(data);
    res.send(updatedBook);
});

app.delete('/books/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const book = data.books.find((book) => book.id === id);
    const index = data.books.indexOf(book);
    data.books.splice(index, 1);
    writeData(data);
    res.send(book);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});