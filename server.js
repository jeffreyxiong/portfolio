import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist'));

// basic routing

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.get('/illustrations', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/illustrations.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/projects.html'));
});

app.get('/photography', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/photography.html'));
});

// photo handling with DigitalOcean Spaces

app.get('/photography/landscape',(req, res) => {
    
});

app.listen(port);