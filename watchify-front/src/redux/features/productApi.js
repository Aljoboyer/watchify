import { api } from "../api/api";
import { getListQueryCall } from "../../utils/apiCallFormatter/reduxApiCallObj";


const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
   getProductList: builder.query({
      query: (data) => (
        getListQueryCall('/product/list', data?.querys)
      ),
      providesTags: ["productList"],
    }),


  }),
});

export const {
  useLazyGetProductListQuery,

} = productApi;
