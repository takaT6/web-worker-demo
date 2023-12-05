
self.addEventListener("message", (e) => {
  // メッセージを受け取ったときに動かすコード
  let result;
  for (let i = 0; i < 1e10; i++) {
    result += i;
  }
  self.postMessage("finish!");
  console.log("ワーカーレッドでの計算が終わりました！");
});