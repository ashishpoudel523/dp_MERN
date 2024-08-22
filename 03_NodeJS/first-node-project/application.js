import express, { json } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(json()); // Middleware to parse JSON bodies

let items = []; // In-memory storage

// Create - POST /items
app.post("/items", (req, res) => {
  const item = req.body;
  item.id = items.length + 1;
  items.push(item);
  res.status(201).send(item);
});

// Read - GET /items
app.get("/items", (req, res) => {
  res.send(items);
});

// Read - GET /items/:id
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.send(item);
});

// Update - PUT /items/:id
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");

  item.name = req.body.name;
  res.send(item);
});

// Delete - DELETE /items/:id
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send("Item not found");

  const deletedItem = items.splice(itemIndex, 1);
  res.send(deletedItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
