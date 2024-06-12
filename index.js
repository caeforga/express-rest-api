import express from "express";
import fs, { write } from "fs";
import bodyParser from "body-parser";

const app = express();

const readData = () => {
    try {
        const data = fs.readFileSync("db.json", 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
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

app.post('/books', async (req, res) => {
    const data = readData();
    console.log(data);
    const body = req.body;
    console.log(body);
    const newBook = {
        id: data.books.length + 1,
        ...body
    };

    data.books.push(newBook);
    writeData(data);
    // fs.writeFileSync("db.json", JSON.stringify(data));
    res.send(newBook);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});