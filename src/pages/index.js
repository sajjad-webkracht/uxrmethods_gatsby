import React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'
//import { Lottie } from 'lottie-react';
//import Notebook from '../animations/notebook.json';

const colors = ["pink-600", "emerald-400", "sky-600", "amber-400", "violet-500"];

const IndexPage = ({ data }) => (
    <Layout>
    <div className="flex text-white py-16 items-center justify-between">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl mb-2"><b>UXR</b>Methods is a comprehensive collection of essential User Experience Research methods.</h1>
        <p className="text-xl">This project is driven by a passion for the UX community, aiming to help build a better world.</p>
      </div>
      <div>
        <div className="hidden md:flex flex-col items-end gap-2 md:gap-4">
          <div className="bg-pink-600 w-32 h-12 rounded-xl"></div>
          <div className="bg-sky-600 w-20 h-12 rounded-xl"></div>
          <div className="bg-amber-400 w-48 h-12 rounded-xl"></div>
        </div>
      </div>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-12">
        {
                data.allMdx.nodes.map((node, index) => (
                    <article key={node.id} className={`bg-${colors[index % colors.length]} px-8 pt-8 rounded-xl w-full flex flex-col justify-between`}>
                        <div>
                            <h2 className="text-2xl md:text-3xl text-zinc-900 font-bold mb-2">{node.frontmatter.title}</h2>
                            <p className="text-base mb-8">{node.frontmatter.description}</p>
                        </div>
                        <Link to={`/methods/${node.frontmatter.slug}`} className={`bg-zinc-900 text-${colors[index % colors.length]} px-8 py-4 rounded-t-xl block w-min text-nowrap duration-500 hover:px-10`}>Read more</Link>
                    </article>
                ))
            }
        </div>
    </Layout>
)

export const query = graphql`
  query {
  allMdx {
    nodes {
      frontmatter {
        slug
        title
        description
      }
      id
    }
  }
  }
`

export const Head = () => (
  <Seo 
    title="Home Page" 
    description="UXRMethods is a comprehensive collection of essential User Experience Research methods." 
  />
)

export default IndexPage