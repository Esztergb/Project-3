const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes'); // fixed if routes folder isnt used

const spoonacularRoute = require('./utils/API');
const { ApolloServer } = require('@apollo/server');
const { typeDefs , resolvers } = require('./schemas');
const { authMiddlewear } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');
const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer ({
  typeDefs,
  resolvers,
  context: authMiddlewear,
});

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/spoonacular', spoonacularRoute);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/graphql' , expressMiddleware(server));
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  }
  app.get( '*' , (req ,res) => {
    res.sendFile(path.join(__dirname , '../client/dist/index.html'))
  })
  db.once('open' , () => {
    app.listen(PORT , () => {
      console.log(`API server running on Port ${PORT} 🚀`);
    })
  })
};

// app.use(routes);


startApolloServer();