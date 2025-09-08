export default async function handler(req, res) {
  let r = await fetch("https://pastebin.com/raw/hHGKAvyA"); // ur api pastebin
  let text = await r.text();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(text);
}
