const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const apiKey = process.env.SPOONACULAR_API_KEY;

    // Use dynamic import to import node-fetch
    import('node-fetch').then(async (fetch) => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&query=${name}`
      );
      const recipes = await data.json();
      res.json(recipes.results);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
