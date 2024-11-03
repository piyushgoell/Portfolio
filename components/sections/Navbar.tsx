// /components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Ensure Button component is imported
import { Menu } from 'lucide-react'; // Ensure Menu icon is imported
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Adjust the import path as necessary
import { NavItem } from '@/lib/types/portfolio'; // Adjust the import path as necessary

// Update NavItem type to be an array
const Navbar: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
        <div className="md:text-4xl font-bold text-white">
          <Link href="/">Portfolio.</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-blue-600" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white shadow-lg p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
 
  );
};

export default Navbar;
