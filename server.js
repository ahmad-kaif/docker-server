import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.send("Hello, Docker!");
  res.send("Docker Volumes are awesome!");

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
