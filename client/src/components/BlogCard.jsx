import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {

  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/blog/${_id}`)} 
      className='cursor-pointer border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300'
    >
      <img src={image} alt="" className='aspect-video w-full object-cover' />

      <span className='text-xs text-primary font-medium uppercase mt-3 inline-block px-4 pt-2'>
        {category}
      </span>

      <div className='p-4'>
        <h5 className='text-lg font-semibold mb-1 line-clamp-2'>
          {title}
        </h5>
        <p className='text-sm text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{"__html": description.slice(0, 80)}}>
        </p>
      </div>
    </div>
  )
}

export default BlogCard
