const { User, Recipe } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(JSON.stringify(context.user));
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
        return user;
      }
      throw new Error("user not found");
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      console.log('User: ' + user);
      if (!user) {
        throw new Error("user not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(args.password);
      console.log('Login Successful');
      if (!isCorrectPassword) {
        throw new Error("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      console.log('User: ' + user);
      const token = signToken(user);
      return { token, user };
    },
    saveRecipe: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $push: {
              savedRecipes: args.input,
            },
          },
          { new: true }
        );
        console.log('User: ' + updatedUser);
        return updatedUser;
      }
      throw new Error("user not found");
    },
    removeRecipe: async (parent, args, context) => {
      console.log("Remove Recipe Mutation - Received recipeId:", args.recipeId);
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: {
              savedRecipes: {
                recipeId: args.recipeId,
              },
            },
          },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error("user not found");
    },
  },
};

module.exports = resolvers;
