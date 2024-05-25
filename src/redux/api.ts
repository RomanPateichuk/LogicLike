import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {CoursesType} from "./types.ts";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://logiclike.com'}),
  tagTypes: ["Courses"],
  endpoints: (build) => ({
    getCourses: build.query<CoursesType, void>({
      query: () => `/docs/courses.json`,
      providesTags: (result) =>
        result
          ? [...result.map(({name}) => ({type: "Courses" as const, name})), "Courses"]
          : ["Courses"],
    }),
  })
})

export const {
  useGetCoursesQuery,
} = api;