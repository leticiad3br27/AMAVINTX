import express from 'express'
const app= express()


app.get('/usuarios',(req,res) => {
    res.send('Ok deu bom')


})
app.listen(8080)