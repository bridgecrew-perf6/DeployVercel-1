import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts2 from '../components/Posts2'
import { sortByDate } from '../utils/sort'
import Search from '../components/Search'
import Link from 'next/link'

export default function Blog2({posts2}) {
    return (
      <div>
        <Search/>
        <div className='posts'>
          {posts2.map((post2,index) =>(
            <Posts2 key={index}post={post2}/>
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

    const files = fs.readdirSync(path.join('posts2'))

    const posts2 = files.map((filename) => {

        const slug = filename.replace('.md', '')
    
        const markdownWithMeta = fs.readFileSync(
            path.join('posts2', filename),
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
        posts2:posts2.sort(sortByDate),
      }
    }
  }