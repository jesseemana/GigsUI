import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const {pathname} = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    userName: 'Walter White',
    isSeller: true
  }

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to={'/'} className="link">
                    <span className="text">giggerrr</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Giggerr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=> setOpen(prev => !prev)}>
                        <img 
                            src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" 
                        />
                        <span>{currentUser?.name}</span>
                        {open && <div className="options">
                            {
                              currentUser?.isSeller && (
                                <>
                                    <Link className='link' to={'/mygigs'}>Gigs</Link>
                                    <Link className='link' to={'/add'}>Add New Gig</Link>
                                </>
                            )}
                            <Link className='link' to={'/orders'}>Orders</Link>
                            <Link className='link' to={'/messages'}>Messages</Link>
                            <Link className='link' to={'/'}>Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        <div>
            {(active || pathname !== '/') &&
              <>
                <hr />
                <div className="menu">
                  <Link className="link menuLink" to="/">
                    Graphics & Design
                  </Link>
                  <Link className="link menuLink" to="/">
                    Video & Animation
                  </Link>
                  <Link className="link menuLink" to="/">
                    Writing & Translation
                  </Link>
                  <Link className="link menuLink" to="/">
                    AI Services
                  </Link>
                  <Link className="link menuLink" to="/">
                    Digital Marketing
                  </Link>
                  <Link className="link menuLink" to="/">
                    Music & Audio
                  </Link>
                  <Link className="link menuLink" to="/">
                    Programming & Tech
                  </Link>
                  <Link className="link menuLink" to="/">
                    Business
                  </Link>
                  <Link className="link menuLink" to="/">
                    Lifestyle
                  </Link>
                </div>
                <hr />
              </>
            }
        </div>
    </div>
  )
}

export default Navbar      