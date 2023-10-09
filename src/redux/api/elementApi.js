import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../apiService";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const elementApi = createApi({
  reducerPath: "elements",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),

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
    getElementLinks: builder.query({
      query: (id) => `elements/${id}/elementlinks`,
      providesTags: ["Elementlinks"],
    }),
  }),
});

export const {
  useGetElementsQuery,
  useGetElementDetailsQuery,
  useCreateElementMutation,
  useUpdateElementMutation,
  useDeleteElementMutation,
  useGetElementLinksQuery,
} = elementApi;
