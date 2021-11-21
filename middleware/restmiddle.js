exports.getMiddle = (req, res, next) =>{
    console.log("middleware.....",req.body)
    next();
}

// module.exports = getMiddle;