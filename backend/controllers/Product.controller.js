const Product = require('../models/Product.model');

// -------------get product by category -----------

const getproductByCategory = async(req,res)=>{

    try {

        const category = req.params.category;
   

   

      
        

        const products = await Product.find({ category: category });

        if (!products) {

            return res.json({
                error : "You have no product yet "
            }) 

                
        }

        res.send(products);


        
    } catch (err) {
        res.json(err)
        
    }

    

}
module.exports={
    getproductByCategory
  };