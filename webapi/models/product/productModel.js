const mongodb = require('mongoose')
const Product = require('./productSchema')


// Add Products till Postman 

exports.addProducts = (req, res) => {
try {
    for (product of Object.keys(req.body)) {
        new Product({
        _id: new mongodb.Types.ObjectId,
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,        
        price: req.body.price
        })
        .save()
    }
    return res.status(200).json({
    message: 'Products added.'
    })

} catch (error) {
    console.log(error)
    return res.status(400).json({
    message: 'Products could not be added.'
    })

}
}

// Get Products

exports.getProducts = (req, res) => {
Product.find()
    .then(products => {
        if (products.length > 0) {
        return res.status(200).json(products)
        } else {
        res.status(404).json([])
        }
    })
    .catch(error => {
        res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Products is not available'

        })
    })

}

// Get Products By ID

exports.getProductById = (req, res) => {

Product.findOne({
        _id: req.params.id
    })
    .then(product => {
        if (product !== null) {
        return res.status(200).json(product)
        } else {
        res.status(404).json({})
        }
    })
    .catch(error => {
        res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Product is not available'

        })
    })

}