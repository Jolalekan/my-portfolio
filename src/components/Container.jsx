import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto xl:px-30'>
        {children}
    </div>
  )
}

export default Container