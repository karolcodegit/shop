const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const fileName = process.argv[2] || './data.js';
const port = process.argv[3] || 3500;
let router = undefined;
const app = express();

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(
            fileName.endsWith('.js') ? require(fileName)() : fileName,
        );
    }, 100);
};

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api', (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on('change', () => {
    console.log('Ponowne wczytywanie danych usługi..');
    createServer();
    console.log('Zakończenie ponownego wczytywania usługi.');
});
app.listen(port, () => console.log(`Usługa działa na porcie ${port}`));
