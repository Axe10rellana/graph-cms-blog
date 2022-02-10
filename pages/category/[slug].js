//importaciones
import React from 'react'

//componentes de next
import { useRouter } from 'next/router'

//servicios
import { getCategories, getCategoryPost } from '../../services'

//componentes
import { PostCard, Categories, Loader, Layout } from '../../components'

//paginas
import Error404 from '../error404'

const CategoryPost = ({ posts }) => {
  //variables del useRouter
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      {posts.length === 0 ? (
        <Error404 title="Error 404" message="Category Not Found" />
      ) : (
        <Layout
          title="Category Post | Graph CMS Blog"
          description="Category Post | Graph CMS Blog"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative top-8 lg:sticky">
                <Categories />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
