import { DEFAULT_LANGUAGE } from "src/constants"
import { TPost } from "src/types"

interface FilterPostsParams {
  posts: TPost[]
  q: string
  tag?: string
  language?: string
  order?: string
}

export function filterPosts({
  posts,
  q,
  tag = undefined,
  language = DEFAULT_LANGUAGE,
  order = "desc",
}: FilterPostsParams): TPost[] {
  return posts
    .filter((post) => {
      const tagContent = post.topic ? post.topic.join(" ") : ""
      const searchContent = post.title + tagContent
      return (
        searchContent.toLowerCase().includes(q.toLowerCase()) &&
        (!tag || (post.topic && post.topic.includes(tag))) &&
        (language === DEFAULT_LANGUAGE ||
          (post.language && post.language.includes(language)))
      )
    })
    .sort((a, b) => {
      const dateA = new Date(a.date.start_date).getTime()
      const dateB = new Date(b.date.start_date).getTime()
      return order === "desc" ? dateB - dateA : dateA - dateB
    })
}
