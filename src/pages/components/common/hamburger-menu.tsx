import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { starImgPath } from "@/assets/images";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const HamburgerMenu = () => {
  return (
    <div>
        
        <Sheet>
            <SheetTrigger>
              <Menu className="flex lg:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu-Bar</SheetTitle>
                <SheetDescription>
                  <nav className="flex flex-col gap-10 ">
                    <ul className="flex flex-col items-start  gap-4 ">
                      <li>Home</li>
                      <li>About Us</li>
                      <li className="flex font-bold">
                        <span>Get Free founder Toolkit</span>
                        <img src={starImgPath} className="w-5" />
                      </li>
                      <li>Blog</li>
                    </ul>
                    <Button variant="default">Sign in</Button>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
    </div>
  )
}
