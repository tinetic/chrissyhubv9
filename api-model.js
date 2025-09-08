export default async function handler(req, res) {
  let r = await fetch("https://pastebin.com/raw/E2uX8jR9"); // ur model pastebin
  let text = await r.text();
  res.setHeader("Access-Control-Allow-Origin", "*"); // fix cors
  res.send(text);
}
