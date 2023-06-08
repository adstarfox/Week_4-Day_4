const express = require(`express`)
const cors = require(`cors`)
const bcrypt = require(`bcryptjs`)

const app = express()

app.use(express.json())
app.use(cors())

const codes = []

app.post(`/submit`,(req,res)=>{
    let {code} = req.body
    let hashedCode = bcrypt.hashSync(code)
    codes.push(hashedCode)
})

app.post(`/check`, (req,res) =>{
    let {code} = req.body
    for(let i = 0; i < codes.length; i++){
        if(bcrypt.compareSync(code,codes[i])){
            res.status(200).send(`code mtched with DB`)
            return
        }
    }
    res.status(200).send(`code doesn't match any in the DB`)
})










app.listen(5050,()=>console.log(`serving listening on 5050`))