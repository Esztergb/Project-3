const { User }  = require('../models');
const { singToken } = require('../utils');

const resolvers = {
    Query : {

    },
    Mutation: {
        login: async (parent , args ) => {
            const user = await User.findOne({ email: args.email });
            if (!user) {
                throw new Error ("User Not Found");
            }
            const isCorrectPassword = await user.isCorrectPassword(args.password);
            console.log(!isCorrectPassword);
            if (!isCorrectPassword) {
                throw new Error ("Incorrect Credentials");
            }
            const token = singToken(user);
            return { token , user };
        },
        addUser: async ( parent , args ) => {
            const user = await User.create(args);
            const token = singToken(user);
            return { token , user };
        },
        
    }
}