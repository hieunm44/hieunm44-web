export const queryKey = {
  scheme: () => ["scheme"],
  posts: () => ["posts"],
  topic: () => ["topic"],
  categories: () => ["categories"],
  post: (slug: string) => ["post", slug],
}
