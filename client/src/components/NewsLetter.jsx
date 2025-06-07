import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-center bg-primary/5 py-12 px-6 rounded-xl shadow-md'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-primary'>Never Miss a Blog!</h1>
      <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto'>
        <input
          type="text"
          placeholder='Enter your email id'
          required
          className='px-4 py-2 w-full sm:w-72 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition'
        />
        <button
          type='submit'
          className='px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
