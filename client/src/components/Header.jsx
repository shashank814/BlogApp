import React, {useRef} from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New : AI feature integrated</p>
          <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>

        <h1 className='text-4xl sm:text-5xl font-bold mb-4 leading-tight'>
          Your own <span className='text-primary'>blogging</span> <br />platform.
        </h1>

        <p className='max-w-2xl mx-auto text-gray-600 mb-6'>
          This is your space to think out loud, to share what matters, and to write without filters.
          Whether it's one word or a thousand, your story starts right here.
        </p>

        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <input ref={inputRef}
            type="text"
            placeholder='Search for blogs'
            required
            className='px-4 py-2 w-full sm:w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition'
          />
          <button
            type='submit'
            className='px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition'
          >
            Search
          </button>
        </form>
      </div>
      <div className='text-center'>
        {
          input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
        }
      </div>

      <img src={assets.gradientBackground} alt="" className='absolute -top-32 -z-10 opacity-50 w-full max-w-[800px] left-1/2 transform -translate-x-1/2' />
    </div>
  )
}

export default Header
