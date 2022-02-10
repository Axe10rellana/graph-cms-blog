//importaciones
import React, { useState } from 'react'

//componentes
import { Layout, Categories, PostWidget, PostCard, Loader } from '../components'

//secciones
import FeaturedPosts from '../sections/FeaturedPosts/FeaturedPosts'

//servicios
import { getPosts } from '../services'

//paginas
import Error404 from '../pages/error404'

export default function Home({ posts }) {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return (
    <>
      {posts.length === 0 ? (
        <div>
          {loading && <Loader />}
          <Error404 title="Error 404" message="Posts Not Founds" />
        </div>
      ) : (
        <Layout
          title="Home | Graph CMS Blog"
          description="Home | Graph CMS Blog"
        >
          {loading && <Loader />}
          <FeaturedPosts />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative top-8 lg:sticky">
                <PostWidget />
                <Categories />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
