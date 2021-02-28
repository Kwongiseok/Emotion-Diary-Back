const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const postRouter = require("./routes/post");
const path = require("path");
const port = 3060;

dotenv.config();
app.use(
  cors({
    origin: "https://603b33008ed4f643d4cfe0fd--emotion-diary.netlify.app",
    // origin: "http://localhost:3000",
    credentials: true, // 쿠키도 포함해서 전달.
  })
);
app.use("/", express.static(path.join(__dirname, "uploads")));
// __dirname/uploads, path.join을 사용하는 이유 : OS 별로 경로의 표기방법이달라서
app.use(express.json()); // json , urlencoded -> 프론트에서 보낸 데이터를 req.body안에 넣어주는 역할을 한다.
app.get("/", (req, res) => {
  res.status(200).json("hi");
});
app.use("/post", postRouter);

app.listen(process.env.PORT || port, () => {
  console.log("서버 실행 중");
});
