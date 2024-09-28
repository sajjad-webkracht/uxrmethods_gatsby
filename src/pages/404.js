import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="mt-24 text-2xl md:text-7xl text-white font-bold text-center">Error 404</h1>
      <h2 className="mt-2 text-2xl md:text-4xl text-white text-center">Page not found</h2>
      <div className="mb-24 flex justify-center mt-12">
        <Link to="/" className={`bg-pink-600 rounded-xl py-4 md:py-2 px-4 md:px-8 hover:md:px-9 duration-200 flex flex-col md:flex-row md:inline-flex md:items-center gap-2`} target="_blank" rel="noopener noreferrer">
          Back to home page
        </Link>
      </div>

    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
