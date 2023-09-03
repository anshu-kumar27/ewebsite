const app = require("./app")

const dotenv = require("dotenv");

//config 

dotenv.config({path:"./config/config.env"})
 
app.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`);
})