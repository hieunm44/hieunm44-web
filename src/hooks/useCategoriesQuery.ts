import { DEFAULT_LANGUAGE } from "src/constants"
import usePostsQuery from "./usePostsQuery"
import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"

export const useCategoriesQuery = () => {
  const posts = usePostsQuery()
  const categories = getAllSelectItemsFromPosts("language", posts)

  return {
    [DEFAULT_LANGUAGE]: posts.length,
    ...categories,
  }
}
