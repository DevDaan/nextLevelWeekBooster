import express from 'express';
 
const app = express();



app.get('/users', (req, res) =>{
    res.json([
        'Diego',
        'Daniel',
        'Douglas',
        'Danilo'
    ])
})



app.listen(3333, () =>{
    console.log('Server is Running')
})