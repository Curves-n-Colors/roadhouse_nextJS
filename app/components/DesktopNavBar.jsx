
import Link from 'next/link'
import Logo from './Logo'

const DesktopNavBar = () => {
  return (
    <div className="container-none px-10 mx-auto">
    <div className="flex flex-wrap justify-between ">
      <div className="min-h-full">
      <div>
        <Link href="/">Menu</Link></div>
      </div>
      <div className=""><Logo/></div>
      <div className=""><Link href="#">Our Restaurants</Link></div>
    </div>
    </div>
  )
}

export default DesktopNavBar