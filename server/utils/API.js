const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
let apiKey = process.env.SPOONACULAR_API_KEY;

router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;

    // Make the Axios call to the API
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&query=${name}`
    );

    const recipes = response.data.results;
    console.log('API Recipes #1: ' + recipes);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/cuisine/:name", async (req, res) => {
  try {
    const { name } = req.params;
    // Make the Axios call to the API
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&cuisine=${name}`
    );

    const recipes = response.data.results;
    console.log('API Recipes #2: ' + recipes);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
    );
    const data = response.data.recipes;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/vegetarian", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`
    );
    const data = response.data.recipes;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/recipe/details/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
