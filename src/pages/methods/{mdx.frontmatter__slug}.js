import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const colors = ["pink-600", "emerald-400", "sky-600", "amber-400", "violet-500"];

const components = {
  h1: (props) => <h1 className="text-4xl font-bold mb-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold mb-4" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold mb-4" {...props} />,
  // Add more elements as needed
};

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <Link to="/" className="inline-flex hover:px-5 duration-200 px-4 py-2 justify-center items-center gap-2 rounded-xl border border-solid border-zinc-800">
        <div className="w-3 h-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
            <path d="M8.55203 11.1016L3.74149 6.57405C3.41078 6.2628 3.41078 5.73724 3.74149 5.42599L8.55203 0.898388C8.91349 0.558226 9.50659 0.814463 9.50659 1.31081L9.50659 10.6892C9.50659 11.1855 8.91349 11.4418 8.55203 11.1016Z" fill="white" />
          </svg>
        </div>
        <span className="text-lg text-white">Back to Home</span>
      </Link>

      <div className="my-24">
        <h1 className="font-bold text-4xl text-white mb-2">{data.mdx.frontmatter.title}</h1>
        <p className="text-xl text-white w-full md:w-1/2 mb-4">{data.mdx.frontmatter.description}</p>
        <div className="w-full md:w-1/3 h-1 bg-pink-600 rounded-md"></div>
      </div>

      <div className="my-24">
        <h2 className="font-bold text-3xl text-white mb-4">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.mdx.frontmatter.takeaways.map((takeaway, index) => (
            <article key={index} className={`bg-${colors[index % colors.length]} text-zinc-900 rounded-xl p-8`}>
              <h3 className="font-bold text-2xl mb-2 text-zinc-900">{takeaway.title}</h3>
              <p className="text-base text-zinc-900">{takeaway.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="my-24">
        <h2 className="font-bold text-3xl text-white mb-4">Description</h2>
        <div className="text-lg text-white">
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                components: {
                  ...components,
                  h1: (props) => <h1 className="text-4xl font-bold mt-4 mb-2" {...props} />,
                  h2: (props) => <h2 className="text-3xl font-bold mt-4 mb-2" {...props} />,
                  h3: (props) => <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />,
                  h4: (props) => <h4 className="text-xl font-bold mt-4 mb-2" {...props} />,
                  h5: (props) => <h5 className="text-lg font-bold mt-4 mb-2" {...props} />,
                  h6: (props) => <h6 className="text-base font-bold mt-4 mb-2" {...props} />,
                  li: (props) => <li className="mb-2" {...props} />,
                  a: (props) => <a className="underline" {...props} />                }
                });
            }
            return child;
          })}
        </div>
      </div>

      <div className="my-24">
      <h2 className="font-bold text-3xl text-white mb-4">Further Reading</h2>
      <ul>
          {data.mdx.frontmatter.furtherReading.map((item, index) => (
            <li key={index} className="mb-4">
              <a href={item.url} className={`bg-${colors[index % colors.length]} rounded-xl py-4 md:py-2 px-4 md:px-8 hover:md:px-9 duration-200 flex flex-col md:flex-row md:inline-flex md:items-center gap-2`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <g clip-path="url(#clip0_64_301)">
                    <path d="M14.4447 20H3.33362C2.4432 20 1.60614 19.6532 0.976584 19.0236C0.347027 18.394 0.000305176 17.557 0.000305176 16.6666V5.55555C0.000305176 4.66516 0.347066 3.82811 0.976623 3.19855C1.60618 2.569 2.44323 2.22224 3.33366 2.22224H7.77809C8.39177 2.22224 8.88921 2.71967 8.88921 3.33335C8.88921 3.94703 8.39177 4.44447 7.77809 4.44447H3.33362C3.03681 4.44447 2.75782 4.56006 2.54799 4.76988C2.33817 4.97971 2.22254 5.25874 2.22254 5.55555V16.6666C2.22254 16.9635 2.33813 17.2424 2.54799 17.4524C2.75782 17.6621 3.03681 17.7778 3.33362 17.7778H14.4447C14.7415 17.7778 15.0205 17.6622 15.2303 17.4523C15.4402 17.2424 15.5558 16.9634 15.5558 16.6666V12.2222C15.5558 11.6085 16.0532 11.1111 16.6669 11.1111C17.2806 11.1111 17.7781 11.6086 17.7781 12.2222V16.6666C17.7781 17.557 17.4313 18.394 16.8017 19.0237C16.1721 19.6532 15.335 20 14.4447 20ZM7.77809 13.3333C7.4937 13.3333 7.20935 13.2248 6.99242 13.0079C6.55853 12.574 6.55853 11.8704 6.99242 11.4365L16.2067 2.22224H12.2225C11.6088 2.22224 11.1114 1.7248 11.1114 1.11112C11.1114 0.497435 11.6088 0 12.2225 0H18.8892C19.0429 0 19.1892 0.0312062 19.3223 0.0876023C19.4466 0.140156 19.5633 0.216308 19.6653 0.316098L19.6654 0.316176C19.6662 0.316913 19.6669 0.317612 19.6676 0.318349C19.6678 0.318543 19.6681 0.318776 19.6683 0.31897C19.6688 0.319514 19.6694 0.320096 19.67 0.320678C19.6703 0.321066 19.6707 0.321416 19.6711 0.321804C19.6715 0.322231 19.672 0.322696 19.6723 0.323046C19.6731 0.323822 19.674 0.324637 19.6747 0.325452C19.6755 0.326228 19.6764 0.327082 19.6771 0.327859C19.6776 0.328247 19.678 0.328751 19.6783 0.329101C19.6788 0.329489 19.6791 0.329838 19.6795 0.330226C19.6801 0.330808 19.6806 0.331352 19.6812 0.331973C19.6814 0.332128 19.6816 0.3324 19.6818 0.332594C19.6825 0.333331 19.6833 0.334069 19.684 0.334806L19.684 0.334884C19.7838 0.437041 19.86 0.553715 19.9125 0.677919C19.9689 0.811049 20.0002 0.957377 20.0002 1.11108V7.77774C20.0002 8.39143 19.5027 8.88886 18.889 8.88886C18.2753 8.88886 17.7779 8.39143 17.7779 7.77774V3.7936L8.56356 13.0079C8.34679 13.2249 8.06244 13.3333 7.77809 13.3333Z" fill="#18181B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_64_301">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        takeaways {
          title
          description
        }
        furtherReading {
          title
          url
        }
      }
    }
  }`

  export const Head = ({data}) => (
    <Seo 
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    />
  )

export default BlogPost