const express = require("express");
const userRouter = require("./modules/user.js");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
