const  express = require('express')
const app = express()

const{ createClient } = require('redis')
const client = createClient()

const getAllProducts = async() => {
    const time = Math.random() * 4000
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(['PRODUTO1','PRODUTO2'])
        }, time)
    })
}


app.get("/",async (req, res) =>{
    if(productsFromCache)
    await client.set("key , value")
    const value = await client.get('key')
    const products = await getAllProducts();
    res.send(products);
});

const startup = async () => {
    await client.connect();
    app.listen(3000, ()=> {
    console.log("ta rodando esta budega ");

  })
};
startup();