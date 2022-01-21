import express from "express";
import logger from "morgan"
import products from "./products/product.js";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(logger("dev"))

//* HOME ROUTE *//
app.get("/products", (req, res) => {
  res.json(products)
})

//** SHOW ROUTE */
app.get("/products/:id", (req, res) => {
  // console.log(req.params)
  const id = req.params.id
  const product = products.find((product) => product._id === id)
  res.json(product)
})

//** CREATE a product */
app.post("/products", (req, res) => {
  // console.log(req.body)
  const newProduct = req.body;
  newProduct.price = `$${req.body.price}`;
  products.push(newProduct);
  res.json(products)
})

//** UPDATE  a product */
app.put("/products/:id", (req, res) => {
  const id = req.params.id

  const productIndex = products.findIndex(product => product._id === id)
  const updatedProduct = {
    ...products[productIndex],
    _id: req.body._id,
    name: req.body.name,
    imgURL: req.body.imgURL,
    price: req.body.price,
    description: req.body.description,
  }
  products.splice(productIndex, 1, updatedProduct)
  res.json(updatedProduct)
})

//** DELETE */
app.delete("/products/:id", (req, res) => {
  const id = req.params.id
  const productIndex = products.findIndex(product => product._id === id)
  // console.log(products[productIndex])

  const deleteProduct = products.find(p => p._id === id)
  console.log(deleteProduct)

  products.splice(productIndex, 1)
  res.json(products)
})


app.listen(PORT, ()=>console.log( `Listening on PORT ${PORT}`))
