const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    instagramHandle: {
        type: String,
        require: false
    },
    youtubeLink: {
        type: String,
        require: false
    },
    twitterHandle: {
        type: String,
        require: false
    },
    tiktokHandle: {
        type: String,
        require: false
    },
    bio: {
        type: String,
        require: true
    },
    profilePictureLink: {
        type: String,
        require: true
    },
    profileApproved: {
        type: Boolean,
        require: true
    },
    identityVerified: {
        type: Boolean,
        require: true
    },
    dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;