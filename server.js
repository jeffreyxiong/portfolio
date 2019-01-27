import express from 'express';
import path from 'path';
import whiskers from 'whiskers';
import aws from 'aws-sdk';

// routing setup

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/src/views');
app.engine('.html', whiskers.__express);

// spaces endpoint + S3 setup

const ocean = new aws.Endpoint('https://jeffers.sfo2.cdn.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: ocean
});

// routes

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
        file: 'index',
    });
});

app.get('/projects', (req, res) => {
    res.render('layout.html', {
        partials: {
            body: 'projects.html'
        },
        title: 'Projects | Jeffrey Xiong',
        file: 'index',
    });
});

app.get('/photography', (req, res) => {

    var natureFiles = getNature();

    res.render('layout.html', {
        partials: {
            body: 'photography.html'
        },
        title: 'Photography | Jeffrey Xiong',
        file: 'photos',
        photos: natureFiles
    });
});

// photo handling with DigitalOcean Spaces

const params = (name) => {
    return {
        bucket: name
    }
}

const getNature = () => {
    var files = [];

    console.log("hello");

    s3.listObjectsV2(params('nature'), (error, data) => {
        if (!error) {
            data.Contents.forEach((element) => {
                files.push({
                    filename: element.key
                })
            })
        } else {
            console.log(error);
        }
    });

    return files;
}

app.listen(port);