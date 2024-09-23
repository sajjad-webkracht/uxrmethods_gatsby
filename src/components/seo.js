import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

return (
    <>
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:image" content="../src/images/OG-UXRmethods-Preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={data.site.siteMetadata.description} />
        <meta name="twitter:image" content="../src/images/X-UXRmethods-Preview.png" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
    </>
)
}

export default Seo