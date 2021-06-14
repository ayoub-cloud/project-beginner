const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("testing router");
});

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body
public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body
public
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers
public
*/
// router.post("/update", isAuth , ));
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});
//update user
router.put(`/:Id`, async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    try {
        const id = req.params.Id;
        await User.updateOne({ _id: id }, { $set: { ...req.body } });
        res.status(200).send({ msg: "edit user" });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to edit users");
    }
});

module.exports = router;
