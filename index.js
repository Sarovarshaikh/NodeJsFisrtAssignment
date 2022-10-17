const http =require("http");

const student = {
    fisrtName : "sarovar",
    Lastname : "shaikh",
    Age :26,
    city:"Mimbai",
    destination:"SoftwareDeveloper",
};

const data = JSON.stringify(student);
// const objData = JSON.parse(data);
const server = http.createServer((req,res) =>{

    if(req.url =="/"){
        res.end(data);
        console.log(data);
    } else if(req.url == "/name"){
        res.write("<h1>I am Sarovar Shaikh</h1>");
    }

})
server.listen(9000);
