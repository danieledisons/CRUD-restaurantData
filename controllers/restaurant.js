const asyncHandler = require('express-async-handler');
const Restaurants = require('../model/restSchema');

require("../model/db");


// ................GET RESTAURANT
exports.getRest = asyncHandler(async(req,res) => {
    let { limit = 10, page = 1, type_of_food, q } = req.query;

    const limitRecords = parseInt(limit);
    const skip = (page -1) * limit;

    let query = {};
    if (type_of_food) query.type_of_food = type_of_food;
    if (q){
        query = {$text: {$search: q}};
    }
    console.log(query);

    try {
        const restaurants = await Restaurants.find(query).limit(limitRecords).skip(skip);
        //res.json(restaurants);
        res.status(200).json({
            status: true,
            data: restaurants
        })
    } catch (err) {
        res.status(400).json({ message: err })
    }

})

exports.insertRest = asyncHandler(async(req, res) => {
    const newRest = new Restaurants({
        URL: req.body.URL,
        address: req.body.address,
        address_line_2: req.body.addresss_line_2,
        name: req.body.name,
        outcode: req.body.outcode,
        postcode: req.body.postcode,
        rating: req.body.rating,
        type_of_food: req.body.type_of_food
    });

    try {
        await newRest.save();
        res.json(newRest);
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

//------------Insert Restaurant---------------
// async function insertRest() {
//     try {
//         await Restaurants.insertMany([
//             {
//                 "URL": "http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu",
//                 "address": "444 MAXI Street",
//                 "address_line_2": "MAXI LANE",
//                 "name": "MAXI MEXICAN FOOD",
//                 "outcode": "MMM123",
//                 "postcode": "5M5",
//                 "rating": 4.5,
//                 "type_of_food": "MEXICAN"
//             }
//         ])
        
//     } catch (error) {
//         console.log(error);
        
//     }

// }

//insertRest()



// module.exports = {
//     getRest
// }