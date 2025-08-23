const ProductCollection = require("../../models/product.md");
const { generateFilterQuery } = require("../../utils/generateFilterQuery");
const { PaginationCalculate } = require("../../utils/pagination");

//
const productBulkCreateServ = async (reqData) => {
  try {
    
    const result = await ProductCollection.insertMany(reqData);
    return result;
  } catch (error) {
    return error
  }
};

const productListServ = async (reqQuery) => {
  try {
    
    const { skip , page, limit} = PaginationCalculate(reqQuery);
    const query = generateFilterQuery(reqQuery)

    // Fetch filtered data with pagination
    const  result = await ProductCollection.find(query).select('-barcode -caseColor -braceletMaterial -description').sort({ createdAt: -1 }).skip(skip).limit(Number(limit));

    const  totalCount = await ProductCollection.countDocuments(query);
    
    return {
      data: result,
      page: Number(page),
      limit: Number(limit),
      totalPage: Math.ceil(totalCount / limit),
      totalData: totalCount
    };
  } catch (error) {
    return error
  }
};



  module.exports = {
productBulkCreateServ,
productListServ
};
  