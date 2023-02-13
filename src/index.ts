import express from 'express';

const app = express();


// Primero paramentro Port: 3001, segundo
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

