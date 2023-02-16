import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(() => { console.log('Conectado ao mongo');})
    .catch(() => { console.log('Erro ao conectar ao mongo');});

// Primero paramentro Port: 3001, segundo
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

