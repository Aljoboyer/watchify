

const generateFilterQuery = (queryOptions) => {
    const {
          gender,
          searchText
        } = queryOptions;

        // Build dynamic query
        const query = {};
    
        if(gender && typeof gender == "string"){
            query.gender = gender;
        }
        
          // Search by name or modelName
        if (searchText && typeof searchText === "string") {
            query.$or = [
            { name: { $regex: searchText, $options: "i" } },       // case-insensitive
            { modelName: { $regex: searchText, $options: "i" } }
            ];
        }
    return query;
}

module.exports = {
   generateFilterQuery
  };