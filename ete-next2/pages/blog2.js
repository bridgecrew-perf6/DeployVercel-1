import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts2 from '../components/Posts2'
import { sortByDate } from '../utils/sort'
import Search from '../components/Search'


export default function Blog2({posts2}) {
    return (
      <div>
        <Search/>
        <div className='posts'>
          {posts2.map((post2,index) =>(
            <Posts2 post={post2}/>
          ))}

          <div className="page_btn">
            <a href="/blog">
              <span>1</span> 
            </a>
            <a href="/blog2">
              <span >2</span>  
            </a>
            <a href="/blog3">
              <span>3</span>
            </a>
              <span>4</span>
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