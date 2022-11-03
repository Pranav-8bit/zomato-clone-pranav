import express from "express";

import { RestaurantModel } from "../../database/allModels";
import {
  ValidateRestaurantCity,
  ValidateSearchString,
} from "../../validation/restaurant.validation";
import ValidateId from "../../validation/common.validation";

const Router = express.Router();

/*
 * Route     /
 * Des       Get all the restaurant detail based on the city
 * params    none
 * Access    Public
 * Method    GET
 */
Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=ahmedabad
    const { city } = req.query;
    await ValidateRestaurantCity(req.query);
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.json({ error: "No restaurants in the city" });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.massage });
  }
});

/*
 * Route     /:_id
 * Des       Get individual restaurant detail based on id
 * params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await ValidateId(req.params);
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not Found" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.massage });
  }
});

/*
 * Route     /search/:searchString
 * Des       Get restaurant details based on searchString
 * params    searchString
 * Access    Public
 * Method    GET
 */
Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    await ValidateSearchString(req.params);
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!restaurants.length === 0) {
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${searchString}` });
    }

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
