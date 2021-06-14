const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            maxlength: 500,
        },
        title: {
            type: String,
            required: true,
        },
        picture: {
            type: {},
        },
        // likeCount: {
        //     type: Number,
        //     default: 0,
        // },
        type: {
            type: String,
            default: "",
        },

        //     comments: {
        //         type: [
        //             {
        //                 commenterId: String,
        //                 commenterName: String,
        //                 text: String,
        //                 timestamp: Number,
        //             },
        //         ],
        //        
        //     },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("post", PostSchema);
