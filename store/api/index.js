import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../api/config";

export const stockeroApi = createApi({
  reducerPath: "stockeroApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Orders", "Offers", "Products", "LeftOvers"],
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
      providesTags: ["Offers"],
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
    approveOffer: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/request/create/order`,
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["Orders", "Offers"],
    }),
    rejectOffer: builder.mutation({
      query: (id) => ({
        url: `/api/request/offers/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Offers"],
    }),
    updateOrderStatus: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/order/status/${params?.id}`,
        method: "PUT",
        body: params,
      }),
      invalidatesTags: ["Orders"],
    }),
    listLeftOver: builder.mutation({
      query: (params) => ({
        url: `${BASE_URL}/api/leftover/addLeftover`,
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["LeftOvers"],
    }),
    getLeftOvers: builder.query({
      query: (id) => `${BASE_URL}/api/leftover/${id}`,
      providesTags: ["LeftOvers"],
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
  useApproveOfferMutation,
  useRejectOfferMutation,
  useGetLeftOversQuery,
  useListLeftOverMutation,
} = stockeroApi;
