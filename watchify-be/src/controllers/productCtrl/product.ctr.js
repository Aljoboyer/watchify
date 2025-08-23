const { productBulkCreateServ, productListServ } = require("../../services/productServ/product.serv");


//
const productBulkCreateCtrl = async (req, res) => {
  
    try {
        
        const result = await productBulkCreateServ(req.body)
         res.send(result)
    } catch (error) {
      res.status(500).json({ message: "Product Create Failed" , error});

    }
  };

  const productListCtrl = async (req, res) => {
  
    try {
        
        const result = await productListServ(req.query)
         res.send(result)
    } catch (error) {
      res.status(500).json({ message: "Product List Get Failed" , error});

    }
  };


  module.exports = {
 productBulkCreateCtrl,
 productListCtrl
};
  