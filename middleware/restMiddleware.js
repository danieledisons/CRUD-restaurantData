const getMiddleware = (req, res, next)=>{
    console.log('this is a middleware',req.body)
    next()
}


module.exports = getMiddleware;
