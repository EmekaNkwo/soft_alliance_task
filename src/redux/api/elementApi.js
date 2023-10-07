import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const elementApi = createApi({
  reducerPath: "elements",
  baseQuery: baseQueryWithInterceptor,

  refetchOnReconnect: true,
  tagTypes: ["ElementData", "ElementDetails"],
  endpoints: (builder) => ({
    getElements: builder.query({
      query: () => "elements",
      providesTags: ["ElementData"],
    }),
    getElementDetails: builder.query({
      query: (id) => `elements/${id}`,
      providesTags: ["ElementDetails"],
    }),
    createElement: builder.mutation({
      query: (data) => ({
        url: "elements",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ElementData"],
    }),
    updateElement: builder.mutation({
      query: (data) => ({
        url: `elements/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["ElementData"],
    }),
    deleteElement: builder.mutation({
      query: (id) => ({
        url: `elements/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ElementData"],
    }),
  }),
});

export const {
  useGetElementsQuery,
  useGetElementDetailsQuery,
  useCreateElementMutation,
  useUpdateElementMutation,
  useDeleteElementMutation,
} = elementApi;
