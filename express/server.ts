import { opine } from "../deps.ts";

// deno run --watch --allow-net --allow-read ./express/server.ts

const app = opine();
// app.use(serveStatic("public")); // 静的なファイルを public 配下に置く

// ファイルの内容を返す
app.get("/", function (_req, res) {
  res.send("Hello Deno home!");
});

// 文字列を返す
app.get("/hello", function (_req, res) {
  res.send("Hello Deno!");
});

// ステータスを返す
app.get("/status", function (_req, res) {
  res.sendStatus(200);
});

// JSON を返す
app.get("/json", function (_req, res) {
  res.json({ greeting: "hello" });
});

app.listen(3000);
console.log("server is running at port 3000");
