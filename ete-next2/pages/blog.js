import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils/sort'
import Search from '../components/Search'
import Link from 'next/link'

export default function Blog({posts}) {
    return (
      <div>
        <Search/>
        <div className='posts'>
          {posts.map((post,index) =>(
            <Post key={index} post={post}/>
          ))}

          <div className="page_btn">
               <Link href="/blog">
									<span>	1	</span>
								</Link>
                <Link href="/blog2">
									<span>	2	</span>
								</Link>
                <Link href="/blog3">
									<span>	3	</span>
								</Link>

                <span>&#8594;</span>
          </div> 


        </div>

      </div>
    )
}

export async function getStaticProps () {

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename) => {

        const slug = filename.replace('.md', '')
    
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
          )

       const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
     
    }
  })
  

    return {
      props: {
        posts:posts.sort(sortByDate),
      }
    }
  }