const express=require(`express`);
const router = express.Router();
const app=express();

app.use(express.json());

require('../db/conn');

const Item_info=require('../model/itemSchema');

router.post("/Add_item",async(req,res)=>{
    const{name,quantity}=req.body;

    console.log(name);

    try{
        const new_item=new Item_info({name,quantity});
        const add_item=await new_item.save(); 
        if(add_item){
            res.status(201).json({message:"item added"});
        }
        else{
            res.status(500).json({error:"faild to add item"});
        } 
    }
    catch(err){
        console.log(err);
    }

})
router.get("/Get_items", async (req, res) => {
    try {
      const items = await Item_info.find({}); // Fetch all items from the database
        console.log(items);
      if (items.length > 0) {
        // Check if there are items in the database
        res.status(200).json(items);
      } else {
        res.status(404).json({ message: "No items found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch items" });
    }
  });
  

router.get("/",(req,res)=>{
    res.send("hello from router");
})

module.exports=router;