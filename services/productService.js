const Product = require('../models/product')

const getAllProducts = async(req, res)=> {
    try{
        const products = await Product.find({}) 
        res.status(200).json(products)
    }catch(err){
        console.log(err);
        res.status(500).json({
            errorMessage: "Something went wrong while fetching products!"
        })
    }
}


const getProductById = async(req, res) => {
    try{
        const id = req.params.id
        const products = await Product.find({id: id})
        if(products?.length > 0)
            res.status(200).json(products[0])
        else
            res.status(404).json({
                message: "No Product found with given Id!"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something went wrong while fetching product!"
        })
    }
}

module.exports = {getAllProducts, getProductById}