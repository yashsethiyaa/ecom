const express = require("express");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

//creat a database connection-> u can also create a seperate file for this then import it here
mongoose
  .connect(
    "mongodb+srv://yashsethiyawork:yashsethiya2024@cluster0.uig2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongodb connected successfully)"))
  .catch((error) => console.log(error));

const app = express();
const PORT = 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieparser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`server is now running on port ${PORT}`));
