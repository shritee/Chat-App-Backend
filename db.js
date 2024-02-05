const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://sarwakinshritee:zv75EK78dr39R3bR@cluster0.81qw5be.mongodb.net/Echo_Craze", { useNewUrlParser: true })
  .then(() => console.log("Connected Successfully....")).catch((err)=>console.log(err));