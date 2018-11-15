import express from 'express';
import path from 'path';
import whiskers from 'whiskers';

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/src/views');
app.engine('.html', whiskers.__express);

// basic routing

app.get('/', (req, res) => {
    res.render('layout.html', {
        partials: {
            body: 'index.html'
        },
        title: 'Jeffrey Xiong',
        file: 'index',
    });
});

app.get('/illustrations', (req, res) => {
    res.render('layout.html', {
        partials: {
            body: 'illustrations.html'
        },
        title: 'Illustrations | Jeffrey Xiong',
        file: 'illustrations',
    });
});

app.get('/projects', (req, res) => {
    res.render('layout.html', {
        partials: {
            body: 'projects.html'
        },
        title: 'Projects | Jeffrey Xiong',
        file: 'projects',
    });
});

app.get('/photography', (req, res) => {
    res.render('layout.html', {
        partials: {
            body: 'photography.html'
        },
        title: 'Photography | Jeffrey Xiong',
        file: 'photos',
        photos: {
            
        }
    });
});

// photo handling with DigitalOcean Spaces

app.get('/photography/landscape',(req, res) => {
    
});

app.listen(port);