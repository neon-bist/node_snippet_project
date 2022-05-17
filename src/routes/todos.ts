import { Router, Request, Response } from "express";
interface RequestWithBody extends Request  {
  body:{
    [key:string]: string|number|object|undefined
    funny:number; 
  }
}

const router = Router();

router.get("/", (req, res) => {
  res.send("Route 1 GET");
});

router.route("/form").get( (req, res) => {
  res.send(`
    <form method="post">
      username:<input name="username">
      <br>
      degignation:<input name="designation" >
      <button type="submit" >Submit</button>
    </form>
  `);
})
.post( (req: RequestWithBody,res)=>{
  const {username, designation} = req.body;
  res.send(`<div>Username:${username}</div><div>Designation:${designation}</div>`)
})

router.get('/todos',(req: Request, res: Response)=>{
  res.json([
    { id: 1, title: "Press the power button" },
    { id: 2, title: "Enter password" },
    { id: 3, title: "Click on start" },
    { id: 4, title: "Click on user profile button" },
    { id: 5, title: "Click on Shutdown" },
  ])
})

export default  router;
