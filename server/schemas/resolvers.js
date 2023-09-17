const { User, Recipe } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new Error("user not found");
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("user not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(args.password);
      console.log(!isCorrectPassword);
      if (!isCorrectPassword) {
        throw new Error("incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
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
        return updatedUser;
      }
      throw new Error("user not found");
    },
    removeRecipe: async (parent, args, context) => {
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
