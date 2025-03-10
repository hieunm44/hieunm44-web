import { CONFIG } from "../../site.config"
import { NextPageWithLayout, TPosts, TTopic } from "../types"
import CustomError from "../routes/Error"
import MetaConfig from "src/components/MetaConfig"

type Props = {
  topic: TTopic
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          type: "website",
          url: CONFIG.link,
        }}
      />
      {page}
    </>
  )
}

export default NotFoundPage
