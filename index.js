const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
