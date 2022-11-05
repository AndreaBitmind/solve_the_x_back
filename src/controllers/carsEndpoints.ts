const knex = require("../database/knex");

export const createCar = (car: string) => knex("cars").insert(car);
export const getAllCars = () => knex("cars").select("*");
export const deleteCar = (id: string) => knex("cars").where("id", id).del();
export const updateCar = (id: string, car: string) =>
  knex("cars").where("id", id).update(car);
