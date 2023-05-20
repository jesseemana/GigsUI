import {useState} from 'react'
import './Gigs.scss'
import { gigs } from '../../data'
import GigCard from '../../components/gigCard/GigCard'

const Gigs = () => {
  const [sort, setSort] = useState('sales')
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">GIGGER > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of arrt and technology with Gigerrr's AI</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === 'sales' ? 'Best selling' : 'Newest'}</span>
            <img src="./images/down.png" alt="" onClick={() => setOpen(prev => !prev)}/>
            {open && (
            <div className="rightMenu">
              {sort === 'sales' 
              ? <span onClick={() => reSort('createdAt')}>Newest</span>
              : <span onClick={() => reSort('sales')}>Best Selling</span>}
            </div>)}
          </div>
        </div>

        <div className="cards">
          {gigs.map(gig => (
            <GigCard item={gig} key={gig.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs