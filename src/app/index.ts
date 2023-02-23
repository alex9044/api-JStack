import express from 'express';
import mongoose from 'mongoose';
import { router } from '../router';

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => { console.log('Conectado ao mongo');})
  .catch(() => { console.log('Erro ao conectar ao mongo'); });


// Função para o express tranformar o json em um
// objeto javascript
app.use(express.json());

// Informando routers para o aplicativo
app.use(router);

// Primero paramentro Port: 3001, segundo
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

