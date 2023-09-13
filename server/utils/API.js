// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.get("/search", async (req, res) => {
//   console.log(req);
//   try {
//     const { name } = req.query;
//     const apiKey = process.env.SPOONACULAR_API_KEY;

//     // Use dynamic import to import node-fetch
//     import("node-fetch").then(async (fetch) => {
//       const data = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&query=${name}`
//       );
//       const recipes = await data.json();
//       console.log(recipes.results);
//       res.json(recipes.results);
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    const apiKey = process.env.SPOONACULAR_API_KEY;

    // Make the Axios call to the API
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey,
          number: 12,
          query: name,
        },
      }
    );

    const recipes = response.data.results;
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
