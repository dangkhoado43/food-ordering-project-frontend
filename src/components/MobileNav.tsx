import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="group">
          <Menu className="text-rose-600 group-hover:text-rose-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetHeader>
            <SheetTitle>
              {/* <span className="font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
              </span> */}
              <span> Welcome to Foodie!</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col gap-4">
              {/* <MobileNavLinks /> */}
              <Link to="/" className="text-left font-bold hover:text-rose-600">
                Home
              </Link>
              {/* <Link to="/" className="text-left font-bold hover:text-rose-600">
                Products
              </Link> */}
              <Link to="/" className="text-left font-bold hover:text-rose-600">
                About
              </Link>
              <Button className="font-bold bg-rose-600 hover:bg-rose-500 active:text-rose-600 active:bg-white active:border active:border-rose-600">
                Login
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
