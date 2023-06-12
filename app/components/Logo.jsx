import Image from "next/image"
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
        <picture>
            <Image 
            src="/images/logo-text.png"
            width={200}
            height={54}
            alt="Roadhouse Hospitality Group"
            className="logo-main"/>
        </picture>
        <picture>
            <Image 
            src="/images/logo-text-inverse.png"
            width={200}
            height={54}
            alt="Roadhouse Hospitality Group"
            className="inverse-logo"/>
        </picture>
    </Link>
  )
}

export default Logo