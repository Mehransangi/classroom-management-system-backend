import express from 'express'

const app = express()
const PORT = 8000

app.use(express.json())
app.get('/', (req, res)=>{
    res.send("Classroom Backend")
})
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
})