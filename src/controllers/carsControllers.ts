import express from "express";
import { createCar, deleteCar, getAllCars, updateCar } from "./carsEndpoints";

const app = express();

app.post("/cars", async (req, res) => {
  const results = await createCar(req.body);
  res.status(201).json({ id: results[0] });
});

app.get("/cars", async (req, res) => {
  const cars = await getAllCars();
  res.status(200).json({ cars });
});

app.put("/cars/:id", async (req, res) => {
  const id = await updateCar(req.params.id, req.body);
  res.status(200).json({ id });
});

app.delete("/cars/:id", async (req, res) => {
  await deleteCar(req.params.id);
  res.status(200).json({ success: true });
});

export default app;
