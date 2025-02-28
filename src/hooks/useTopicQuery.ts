import usePostsQuery from "./usePostsQuery"
import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"

export const useTopicQuery = () => {
  const posts = usePostsQuery()
  const topic = getAllSelectItemsFromPosts("topic", posts)

  return topic
}
