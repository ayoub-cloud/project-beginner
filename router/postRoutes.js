const express = require("express");
const isAuth = require("../middleware/isAuth");
const { upload } = require("../middleware/upload");
const isAdmin = require("../middleware/isAdmin")
const Post = require("../models/post");
const router = express.Router();

router.get("/allpost", isAuth, (req, res) => {
    Post.find()
        .populate("", "_postedByid name")
        .populate("comments.postedBy", "_id name")
        .sort("-createdAt")
        .then((posts) => {
            res.json({ posts });
        })
        .catch((err) => {
            console.log("cant save it");
        });
});
// get by admin
router.get("/allpost/admin", isAdmin, async (req, res) => {
    await Post.find()
        
        .then((posts) => {
            res.json({ posts });
        })
        .catch((err) => {
            console.log("cant save it");
        });
});




router.post(
    "/createpost",
    isAuth,
    upload.single("picture"),
    async (req, res) => {
        try {
            console.log(req.file);
            const { title, description } = req.body;
            if (!title || !description) {
                return res
                    .status(422)
                    .json({ error: "Plase add all the fields" });
            }
            req.user.password = undefined;
            const post = await new Post({
                title,
                description,
                picture: req.file,
                postedBy: req.user,
            });
            console.log(post);
            await post.save();
            res.status(201).send({ msg: "post created ", post });
        } catch (error) {
            console.log(error);
        }
    }
);
router.put(
    "/update/:id",
    isAuth,
    upload.single("picture"),
    async (req, res) => {
        try {
            //find post
            const findPost = await Post.findOne({
                _id: req.params.id,
            });
            if (!findPost) {
                return res.status(404).send({
                    errors: [{ msg: "Post not found" }],
                });
            }
            const img = { picture: req.file ? req.file : findPost.picture };
            const post = await Post.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        ...req.body,
                        picture: img.picture,
                    },
                }
            );
        } catch (error) {}
    }
);

router.get("/mypost", isAuth, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then((mypost) => {
            res.json({ mypost });
        })
        .catch((err) => {
            res.send("cant get it");
        });
});

router.delete(`/:Id`, async (req, res) => {
    try {
        const id = req.params.Id;
        const post = await Post.findByIdAndRemove(id);
        res.status(200).send("post deleted", post);
    } catch (error) {
        res.status(500).send("impossible to delete posts");
    }
});

module.exports = router;
