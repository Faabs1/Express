//BASIC HOMPAGE
const express = require('express');

const app = express();

//routing in expree
app.get('/', (reg,res) => {  //the / indicates the domain hompage
    res.send("Hello, Express")
}) 

app.listen(3000, () => {
    console.log('app is listening on http://localhost:3000');
    
})