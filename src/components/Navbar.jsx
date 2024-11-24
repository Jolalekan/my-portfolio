import React from 'react'
import Sidebar from './Sidebar'
import Container from './Container'

const Navbar = () => {
  return (
    <Container>
      <Sidebar/>
      <div className="my-10 mx-auto fixed top-0 left-0 hidden lg:flex justify-center h-20 items-center z-50 w-full">
        <div className="bg-dark-blue-gray flex items-center justify-between gap-6 py-6 px-20 rounded-full">
          <a href="#Homepage" >
            <div className='hover:opacity-75 flex items-center gap-6 '>
              <span >
              <svg  width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fcfcfc" stroke="#fcfcfc"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><desc></desc><polygon fill="none" points="31,16 31,19 27,19 27,31 21,31 21,19 11,19 11,31 5,31 5,19 1,19 1,16 16,1 21,6 21,1 27,1 27,12 " stroke="#ffffff" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2"></polygon></g></svg>
              </span>
              <h2 className='font-medium text-[20px] '>Home</h2>
            </div>
          </a>


          <a href="#About" >
          <div className='hover:opacity-75 flex items-center gap-6 '>
              <span>
              <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round"strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <h2 className='font-medium text-[20px] '>ABOUT</h2>
            </div>
          </a>

          <a href="#Project" >
          <div className='hover:opacity-75 flex items-center gap-6 '>
              <span>
              <svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M476.295,119.721H348.813V97.47c0-22.589-18.378-40.967-40.967-40.967H204.154c-22.589,0-40.967,18.377-40.967,40.967 v22.251H35.705C16.018,119.721,0,135.738,0,155.426v264.363c0,19.689,16.018,35.706,35.705,35.706h440.588 c19.689,0,35.705-16.018,35.705-35.706V155.426C512,135.738,495.982,119.721,476.295,119.721z M183.586,97.47 c0-11.341,9.227-20.569,20.569-20.569h103.692c11.341,0,20.569,9.227,20.569,20.569v22.251h-144.83V97.47z M476.295,435.097 H35.705c-8.44,0-15.307-6.866-15.307-15.308V155.426c0-8.44,6.867-15.307,15.307-15.307h440.588 c8.44,0,15.307,6.866,15.307,15.307v264.363h0.001C491.602,428.23,484.734,435.097,476.295,435.097z"></path> </g> </g> <g> <g> <path d="M435.506,202.556H76.494c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h359.012 c5.633,0,10.199-4.567,10.199-10.199C445.705,207.123,441.139,202.556,435.506,202.556z"></path> </g> </g> <g> <g> <path d="M435.506,275.99H76.494c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h359.012 c5.633,0,10.199-4.567,10.199-10.199C445.705,280.557,441.139,275.99,435.506,275.99z"></path> </g> </g> <g> <g> <path d="M435.506,349.424h-5.1c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199h5.1 c5.633,0,10.199-4.567,10.199-10.199C445.705,353.991,441.139,349.424,435.506,349.424z"></path> </g> </g> <g> <g> <path d="M390.63,349.424H76.494c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199H390.63 c5.633,0,10.199-4.567,10.199-10.199C400.829,353.991,396.263,349.424,390.63,349.424z"></path> </g> </g> </g></svg>
              </span>
              <h2 className='font-medium text-[20px] '>PROJECTS</h2>
            </div>
          </a>
          <a href="#Contact" >
          <div className=' flex items-center gap-6 hover:opacity-75'>
              <span>
              <svg viewBox="0 0 24 24" height="32px" width="32px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"></path> </g></svg>
              </span>
              <h2 className='font-medium text-[20px] '>CONTACTS</h2>
            </div>
          </a>

        </div>
      </div>
    </Container>
    
  )
}

export default Navbar