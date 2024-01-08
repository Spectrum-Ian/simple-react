import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { authenticationRoute } from './authenticate';

let port = process.env.PORT || 8080;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
);
app.listen(port, console.info("Server running, listening on port ", port));

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname, '../../dist')));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
}