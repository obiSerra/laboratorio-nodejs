const express = require("express");
const app = express();
const port = 3000;

const loongSyncTask = () => {
  const start = Date.now();
  const ms = 10000;
  while (Date.now() < start + ms) {}
  return { hello: Math.round(Math.random() * 10000) };
};

const loongAsyncTask = () => {
  const start = Date.now();
  const ms = 10000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ hello: "rask" });
    }, ms);
  });
};

app.get("/", (req, res) => {
  res.send(`hello ${Math.round(Math.random() * 10000)}`);
});

app.get("/long", (req, res) => {
  const ret = loongSyncTask();

  res.send(`long ${ret.hello}!`);
});
app.get("/async", async (req, res) => {
  const ret = await loongAsyncTask();

  res.send(`long async ${ret.hello} !`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
