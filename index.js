import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('static'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
        console.log('Example app running!')
    }
);
