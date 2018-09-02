const express = require('express')
const generatePassword = require('password-generator')
const path = require('path')

const app = express()

//serving static files via react.
app.use(express.static(path.join(__dirname,'client/build')))

//api endpoints
app.get('/api/passwords',(req,res)=>{
    const count = 5
    const passwords = Array.from(Array(count).keys()).map(index => generatePassword(12,false))
    res.json(passwords)
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`)