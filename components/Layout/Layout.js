//importaciones
import React from 'react'

//comonentes de next
import Head from 'next/head'

//componentes
import { Header } from '..'
import { Footer } from '..'

const Layout = ({ title, children, description }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#016eed" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="favicon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>{title}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
