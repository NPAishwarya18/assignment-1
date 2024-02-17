import express from 'express'; 
import bodyParser from "body-parser";
const app = express();


//middleware
//app.use(express.json())//json data

//third party middleware
//app.use(bodyParser.json())
//costome middleware

const log=(req,res,next)=>{
    console.log(`midlleware 1 executed`);
    next()
}

const log1=(req,res,next)=>{
    res.send(`middleware 2 is executed`);
}
app.use(log)
app.use(log1)


let users=[];


const port = 1250;

app.get('/products/:productId',(req,res) => {
    console.log(req.params.productId);
    let productId=req.params.productId;
    res.send(productId)

})

app.post("/users",(req,res)=>{
console.log(req.boby);
users.push(req.body)
res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on port `); 
});
