//importaciones
import React from 'react'

//componentes de next
import { useRouter } from 'next/router'

//services
import { getPostDetails, getPosts } from '../../services'

//componentes
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Layout,
  Loader,
} from '../../components'

//secciones
import AdjacentPosts from '../../sections/AdjacentPosts/AdjacentPosts'

//paginas
import Error404 from '../error404'

const PostDetails = ({ post }) => {
  //variables del useRouter
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      {!post ? (
        <Error404 title="Error 404" message="Post Not Found" />
      ) : (
        <Layout
          title="Post Details | Graph CMS Blog"
          description="Post Details | Graph CMS Blog"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} />
              <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative top-8 lg:sticky">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map((category) => category.slug)}
                />
                <Categories />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
