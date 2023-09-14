const express = require('express');
const path = require('path');
const db = require('./config/connection');

//API and API Key 
const spoonacularRoute = require('./utils/API');
const dotenv = require('dotenv')
dotenv.config()

const { ApolloServer } = require('@apollo/server');
const { typeDefs , resolvers } = require('./schemas');
const { authMiddlewear } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');

const app = express();
const server = new ApolloServer ({
  typeDefs,
  resolvers,
  context: authMiddlewear,
});
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/spoonacular', spoonacularRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}


app.get( '*' , (req ,res) => {
  res.sendFile(path.join(__dirname , '../client/dist/index.html'))
})

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
  app.use(espress.json());
  app.use('/graphql' , expressMiddleware(server));
  db.once('open' , () => {
    app.listen(PORT , () => {
      console.log(`API server running on Port ${PORT} 🚀`);
    })
  })
};




startApolloServer();
