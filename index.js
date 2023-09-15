require('dotenv').config()
const app =require("./app")
const db=require("./dbconnect")

const port=process.env.PORT
app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await db()

})