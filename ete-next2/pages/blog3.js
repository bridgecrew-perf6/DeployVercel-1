import React from 'react'
import Link from 'next/link'

function blog3() {
  return (
      <div>
        <Link href='/blog'>
            <a className='btn btn-back'>Go Back</a>
        </Link>
        <div className='text-xl mt-48 text-center'>There are no more news.</div>
    </div>
  )
}

export default blog3