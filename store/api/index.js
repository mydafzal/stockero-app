import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../api/config";

export const stockeroApi = createApi({
  reducerPath: "stockeroApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Orders", "Offers", "Products"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/${params?.authRole}/signin`,
        method: "POST",
        body: {
          email: params?.email,
          password: params?.password,
        },
      }),
    }),
    buyerSignUp: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/buyer/register`,
        method: "POST",
        body: params,
      }),
    }),
    manufacturerSignUp: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/manufacturer/register`,
        method: "POST",
        body: params,
      }),
    }),
    postRequest: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/request/create`,
        method: "POST",
        body: params,
      }),
    }),
    getOffers: builder.query({
      query: (id) => `${BASE_URL}/api/request/offers/${id}`,
    }),
    getProducts: builder.query({
      query: () => `${BASE_URL}/api/product`,
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/product/addProduct`,
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["Products"],
    }),
    getOrders: builder.query({
      query: () => `${BASE_URL}/api/order`,
      providesTags: ["Orders"],
    }),
    getRequest: builder.query({
      query: () => `${BASE_URL}/api/request`,
    }),
    respondToRequest: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/request/respond/${params?.id}`,
        method: "PUT",
        body: params,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${BASE_URL}/api/product/delete-product/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
    updateOrderStatus: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/order/status/${params?.id}`,
        method: "PUT",
        body: params,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useSignInMutation,
  useBuyerSignUpMutation,
  useManufacturerSignUpMutation,
  usePostRequestMutation,
  useGetOffersQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useGetOrdersQuery,
  useGetRequestQuery,
  useRespondToRequestMutation,
  useDeleteProductMutation,
  useUpdateOrderStatusMutation,
} = stockeroApi;