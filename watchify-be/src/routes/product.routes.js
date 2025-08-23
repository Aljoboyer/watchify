const { productBulkCreateCtrl, productListCtrl } = require("../controllers/productCtrl/product.ctr");

const router = require("express").Router();

router.post("/add", productBulkCreateCtrl);
router.get("/list", productListCtrl);

module.exports = router;
