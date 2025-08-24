import { mutationCall } from "../../utils/apiCallFormatter/reduxApiCallObj";
import { api } from "../api/api";


const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    paymentIntentCreate: builder.mutation({
      query: (requestBody) =>(
        mutationCall('/order/payment/create-intent','POST', requestBody)
      ),

    }),


  }),
});

export const {
  usePaymentIntentCreateMutation,

} = orderApi;
