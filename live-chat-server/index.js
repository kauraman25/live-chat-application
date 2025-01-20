const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();

app.use(express.json());

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Server is Connected to Database");
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};
connectDb();
app.get("/", (req, res) => {
  res.send("API is running123");
});
app.use("/user", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is Running..."));