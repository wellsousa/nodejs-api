const express = require("express")
const server = express()
const router = express.Router()
const jsonFile = require("./json_file")

server.use(express.json({extended: true}))

router.get('/', (req, res) => {
    const content = jsonFile.read('./data/items.json')
    res.send(content)
})

router.post('/', (req, res) => {
    const {name, email, phone} = req.body

    const id = new Date().getTime().toString()

    let currentContent = jsonFile.read("./data/items.json")
    currentContent.push({id, name, email, phone})

    res.send(jsonFile.write('./data/items.json', currentContent))
})

router.put('/:id', (req, res) => {
    const {id} = req.params

    const {name, email, phone} = req.body
    
    let currentContent = jsonFile.read("./data/items.json")
    
    const index = currentContent.findIndex((item) => item.id == id)

    const {id: tempId, name: tempName, email: tempEmail, phone: tempPhone} = currentContent[index]
    
    currentContent[index] = {id, name, email, phone}

    let newContent= {
        id: tempId,
        name: name?name:tempName,
        email: email?email:tempEmail,
        phone:phone?phone:tempPhone
    }

    currentContent[index] = newContent

    res.send(jsonFile.write('./data/items.json',currentContent))
})

router.delete('/:id', (req, res) => {

    const {id} = req.params

    let currentContent = jsonFile.read("./data/items.json")

    const index = currentContent.findIndex((item) => item.id == id)

    currentContent.splice(index, 1)

    res.send( jsonFile.write("./data/items.json", currentContent) )
})

server.use(router)

const port = 3000
server.listen(port, () => {
    console.log("run server at port: " + port)
})