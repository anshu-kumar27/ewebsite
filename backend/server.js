const app = require("./app")

const dotenv = require("dotenv");

//config 

dotenv.config({path:"backened/config/config.env"})

app.listen(process.config.PORT,()=>{
    console.log(`server is working on http://localhost:${dotenv.config.PORT}`);
})