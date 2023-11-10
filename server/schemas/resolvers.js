const { GraphQLError } = require("graphql");
const { Comment, Photo, User } = require('../models');

const { signToken, AuthenticationError } = require('../utils/jwt');

const resolvers = {
    Query: {
        me: async (context, { _id }) => {
            if (context.user) {
                const params = _id ? { _id } : {};
                return User.find(params);
            }
        },
            photos: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Photo.find({ params }).sort({ createdAt: -1 });
        },
        photo: async (parent, { photoId }) => {
            return Photo.findOne({ _id: photoId });
        }

    },

    Mutation: {

        addUser: async (_, args) => {

            try {
                const user = await User.create(args);
                const token = signToken({
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                    password: user.password,
                });

                return { token };


            } catch (error) {
                return new GraphQLError("Invalid Sign Up" + error, {
                    extensions: {
                        code: "BAD_USER_INPUT",
                    },
                });
            }
        },
        login: async (_, args) => {
            try {
                const user = await User.findOne({ email: args.email, });

                const correctPw = await user.isCorrectPassword(args.password);

                if (correctPw) {
                    const token = signToken({
                        _id: user._id,
                        email: user.email,
                        username: user.username,
                        password: user.password,
                    });

                    return { token };
                }
            } catch (error) {
                return error;
            }
        },

        addPhoto: async (parent, args, context) => {
            console.log(context.user);
            if (context.user) {


                const photo = await Photo.create(
                    { args, context });

                await User.findOneAndUpdate(
                    { username: args.username },
                    { $addToSet: { photos: args._id } }
                );

                return photo;
            }
            throw AuthenticationError;
        },

        addComment: async ({ photoId, comment }, context) => {
            if (context.user) {
                return await Photo.findOneAndUpdate(
                    { _id: photoId },
                    {
                        $addToSet: { comments: comment, context },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                )
                    .catch((err) => {
                        console.log(err);
                    })
            }
            throw AuthenticationError;

        },

        removePhoto: async ({parent, photoId }, context) => {
            if (context.user) {
                return Photo.findOneAndDelete(
                    { _id: photoId });
            }
            throw AuthenticationError;
        },


        removeComment: async (parent, { photoId }, context) => {
            if (context.user) {
                return Photo.findOneAndUpdate(
                    { _id: photoId },
                    { $pull: { comments: { _id: commentId } } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
    }
}



module.exports = resolvers;