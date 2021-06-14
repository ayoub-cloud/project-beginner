const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAdmin = async (req, res, next) => {
    try {
        //get token from headers
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send({
                errors: [{ msg: " you are not authorized" }],
            });
        }
        //token is match?
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        //verify token
        //find user by id
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(401).send({
                errors: [{ msg: " you are not authorized" }],
            });
        }
        if (user.role !== "Admin") {
            return res.status(401).send({
                errors: [{ msg: " you are not authorized" }],
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: " you are not authorized" }] });
    }
};
module.exports = isAdmin;