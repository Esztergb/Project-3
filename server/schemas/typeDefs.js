const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Name{
        name: String
    }

    type Query {
        name: Name
    }
`






module.exports = typeDefs;