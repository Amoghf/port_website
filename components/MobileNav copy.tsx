import {Sheet,SheetContent,SheetTrigger} from '@/components/ui/sheet'

import { AlignJustify } from 'lucide-react' 
import Nav from './Nav'
import Socials from './Socials'
import Logo from './Logo'




const MobileNav = () => {
    return (
      <Sheet>

        <SheetTrigger asChild>
          <AlignJustify className='cursor-pointer'/>

        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col items-centre justify-between h-full py-8">
            <div className="flex flex-col items-centre gap-y-32">
                  <Logo/>
                  <Nav containerStyles='flex flex-col items-centre gap-y-6' linkStyles='text-2xl'/>
                  

            </div>
            <Socials containerStyles='flex gap-xl-4' iconsStyles='text-2xl'/>
          </div>
        </SheetContent>

      </Sheet>
    )
  }
  
  export default MobileNav
  