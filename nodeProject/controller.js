import fs from "fs";
const DATA_FILE = "./data.json";

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
const writeData = (data) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

const parseBody = (req) =>
  new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(JSON.parse(body)));
  });

export async function handleGetAll(req, res) {
  const data = readData();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

export async function handleGetOne(req, res) {
  const id = parseInt(req.url.split("/")[2]);
  const data = readData();
  const item = data.find((i) => i.id === id);
  res.writeHead(item ? 200 : 404, { "Content-Type": "application/json" });
  res.end(JSON.stringify(item || { error: "Not found" }));
}

export async function handleCreate(req, res) {
  const newItem = await parseBody(req);
  const data = readData();
  newItem.id = Date.now();
  data.push(newItem);
  writeData(data);
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify(newItem));
}

export async function handleUpdate(req, res) {
  const id = parseInt(req.url.split("/")[2]);
  const updates = await parseBody(req);
  const data = readData();
  const index = data.findIndex((i) => i.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updates };
    writeData(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data[index]));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
}
export async function handleDelete(req, res) {
  const id = parseInt(req.url.split("/")[2]);
  const data = readData();
  const initialLength = data.length;
  const filtered = data.filter((i) => i.id !== id);

  if (filtered.length === initialLength) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Item not found" }));
  } else {
    writeData(filtered);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Deleted" }));
  }
}