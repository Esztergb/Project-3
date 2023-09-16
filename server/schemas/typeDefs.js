const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User{
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID
        user: User
    }
    type Login {
        _id: ID
        email: String
        username: String
        password: String
    }
    type Query {
        user: User
        login: [Login]
    }

    type Mutation {
        login(email: String , password: String): Auth
    }
    
`







module.exports = typeDefs;
