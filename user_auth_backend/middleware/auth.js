const jwt = require("jsonwebtoken");
const router = require("../routes/userRouter");

const auth = (req, res, next) => { 
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res.status(401).json({ msg: "Access Denied" });
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified)
            return res.status(401).json({ msg: "Access Denied" });
        req.user = verified.id;
        next();
    } catch (err) { 
        res.status(500).json({error: err.message});
    }
};



module.exports = auth;