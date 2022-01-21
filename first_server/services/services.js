


const sendData = (req, res) => {
  const name = "hello hello"
  const data = "Here is your DATA!!!"

  console.log("Got a request SOMEDATA!!!")
  // res.send("Here is your data")
  res.json({
    data: data,
    name: name,
    hobbies: ["1", "2"]
  })
}

export default sendData