const User = require('./user-model');
const Token = require('./token/token-model');

exports.findUserByUsername = async (username) => {
    return User
        .findOne({ username })
        .populate({
            path: 'tokens',
            model: 'Token',
            select: 'token createdAt'
        })
        .populate({
            path: 'refreshTokens',
            model: 'Token',
            select: 'token createdAt'
        });
};

exports.createUser = async (userData) => {
    const user = new User(userData);
    return user.save();
};

exports.findUserById = async (id) => {
    return User.findById(id);
};

exports.findUserByRefreshToken = async (decodedId, refreshToken) => {
    return User.findOne({ _id: decodedId })
        .populate({
            path: 'tokens',
            model: 'Token',
            match: { type: 'access' }
        })
        .populate({
            path: 'refreshTokens',
            model: 'Token',
            match: { type: 'refresh', token: refreshToken }
        });
};

exports.getAllUsers = async () => {
    return User.find()
        .populate({
            path: 'tokens',
            model: 'Token',
        })
        .populate({
            path: 'refreshTokens',
            model: 'Token',
        });
};

exports.saveToken = async (tokenData) => {
    const token = new Token(tokenData);
    return token.save();
};

exports.revokeOldAccessTokens = async (userId, newTokenId) => {
    return Token.updateMany(
        { user: userId, type: 'access', _id: { $ne: newTokenId } },
        { $set: { revoked: true } }
    );
};
