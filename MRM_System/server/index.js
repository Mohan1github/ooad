const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const DrugModel = require("./models/Drug");
const UserModel = require("./models/User");
const PharmacyModel = require("./models/Pharmacy");
const Admin = require("./models/Admin")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Orders = require("./models/Orders");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.REACT_APP_MONGO_API,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/user/getdrug", async (req, res) => {
  try {
    const DrugModels = await DrugModel.find();
    res.send(DrugModels);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.get("/user/get-drug/:id",async(req,res)=>{
  try{
      const drugdetail = await DrugModel.findById({_id:req.params.id});
      // res.status(200).json({success:true,data:drugdetails});
      res.send(drugdetail);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Internal server error");
  }
})
app.get("/getdrug/:emaiId", async (req, res) => {
  try {
    const { pharmacy } = req.query;

    const drugs = await DrugModel.find({ pharmacy: req.params.emaiId });
    res.send(drugs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedDrug = await DrugModel.findByIdAndDelete(req.params.id);
    res.json(deletedDrug);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.post("/insert", async (req, res) => {
  const drug = req.body;
  const newDrug = new DrugModel(drug);
  await newDrug.save();

  res.json(drug);
});

app.post("/createuser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.get("/getuser", async (req, res) => {
  try {
    const UserModels = await UserModel.find();
    res.send(UserModels);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.get("/getadmin", async (req, res) => {
  try {
    const AdminModel = await AdminModel.find();
    res.send(AdminModel);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// Update user verification status
app.put("/users/:id/verification", (req, res) => {
  const id = req.params.id;
  const verification = req.body.verification;

  PharmacyModel.findByIdAndUpdate(id, { verification: verification }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `User with ID ${id} not found.`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating user verification status.",
      });
    });
});

//pharmacies register
app.post("/pharmacies/register", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await PharmacyModel.create({
      pname: req.body.pname,
      email: req.body.email,
      password: newPassword,
      address: req.body.address,
      number: req.body.number,
      license: req.body.license,
      verification: req.body.verification,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
//pharmacies login
app.post("/pharmacies/login", async (req, res) => {
  const user = await PharmacyModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        pname: user.pname,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/user/makeorders/medicine",async(req,res)=>{
  const {cusname,med,quan,addr,email,num} = req.body;

  try{
    console.log({cusname,med,quan,addr,email,num})
      const makeneworder = new Orders(req.body);
      const saving = await makeneworder.save();
      if(saving){
        res.status(200).json({success:true,msg:"Order successfully placed!"})
      }
      else{
        res.status(400).json({success:false,msg:"Something went wrong"})
      }
  }
  catch(err){
      res.status(500).json({success:false,msg:"Internal server error"})
  }
})

//admin-routes
app.post("/admin/login", async (req, res) => {
  const user = await Admin.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      "secret1234" 
    );
    return res.send({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/admin/register", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await Admin.create({
      username: req.body.name,
      email: req.body.email,
      password: newPassword});
    return res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.get("/getpharmacy", async (req, res) => {
  try {
    const Pharmacy = await PharmacyModel.find();
    res.send(Pharmacy);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


//  user routes


app.post("/user/signup", async (req, res) => {
  try {
    console.log(req.body.email)
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const newuser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
      confirmpassword:req.body.confpassword});

      const saving = await newuser.save();
      if(saving){res.json({ status: "ok" });}
      else{
         res.json({ status: "Not ok" });
      }
    
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});





app.post("/user/login", async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});
app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`server running on port ${process.env.REACT_APP_SERVER_PORT}`);
});
