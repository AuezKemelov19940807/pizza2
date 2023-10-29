'use client'
import { usePathname } from 'next/navigation'
//next image
import Image from 'next/image'
//next link
import Link from 'next/link'
//components
import Search from './Search'
import CartButton from './CartButton'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="py-10 border-b">
      <div className="container mx-auto px-2 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-y-0  items-start xl:items-center xl:justify-between">
          {/* logo */}
          <div>
            <Link href="/">
              <div className="flex items-center gap-x-4">
                {/* icon */}
                <Image src="/logo.svg" width={38} height={49} alt="logo" />
                <div>
                  {/* name */}
                  <h3 className="text-[#181818] text-[24px] font-extrabold uppercase leading-none">
                    Next Pizza
                  </h3>
                  {/* text */}
                  <p className="text-[#7b7b7b] hidden md:flex">
                    Самая вкусная пицца во вселенной!
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {pathname !== '/cart' && <Search />}
          {/* Button */}
          {pathname !== '/cart' && <CartButton />}
        </div>
      </div>
    </header>
  )
}

export default Header
