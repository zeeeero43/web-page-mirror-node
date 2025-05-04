
import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerOverlay,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleMenuOpen = (menu: string) => {
    setOpenMenus([menu]);
  };

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const menuItems = {
    instagram: [
      { title: "Follower", href: "/instagram/follower" },
      { title: "Viral Paket", href: "/instagram/viral" },
      { title: "Likes", href: "/instagram/likes" },
      { title: "Aufrufe", href: "/instagram/aufrufe" },
      { title: "Kommentare", href: "/instagram/kommentare" },
    ],
    tiktok: [
      { title: "Follower", href: "/tiktok/follower" },
      { title: "Viral Paket", href: "/tiktok/viral" },
      { title: "Likes", href: "/tiktok/likes" },
      { title: "Aufrufe", href: "/tiktok/aufrufe" },
      { title: "Kommentare", href: "/tiktok/kommentare" },
    ],
    youtube: [
      { title: "Abonnenten", href: "/youtube/abonnenten" },
      { title: "Likes", href: "/youtube/likes" },
      { title: "Aufrufe", href: "/youtube/aufrufe" },
      { title: "Kommentare", href: "/youtube/kommentare" },
    ],
    spotify: [
      { title: "Follower", href: "/spotify/follower" },
      { title: "Streams", href: "/spotify/streams" },
      { title: "Monatliche Hörer", href: "/spotify/hoerer" },
    ],
    twitch: [
      { title: "Follower", href: "/twitch/follower" },
      { title: "Live Zuschauer", href: "/twitch/zuschauer" },
    ],
  };

  const renderMobileMenu = () => (
    <div className="lg:hidden">
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerTrigger asChild>
          <button className="p-2" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <div className="p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center gap-1">
                <div className="bg-follower-blue rounded p-0.5 text-white text-sm font-bold">FP</div>
                <span className="font-bold text-lg">FollowerPulse</span>
              </Link>
              <DrawerClose className="p-2">
                <X className="h-5 w-5" />
              </DrawerClose>
            </div>
            
            <nav className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 text-lg">Instagram</h3>
                <ul className="space-y-2 pl-2">
                  {menuItems.instagram.map((item) => (
                    <li key={item.href}>
                      <Link 
                        to={item.href} 
                        className="block py-1 hover:text-follower-blue" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-lg">TikTok</h3>
                <ul className="space-y-2 pl-2">
                  {menuItems.tiktok.map((item) => (
                    <li key={item.href}>
                      <Link 
                        to={item.href} 
                        className="block py-1 hover:text-follower-blue" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-lg">YouTube</h3>
                <ul className="space-y-2 pl-2">
                  {menuItems.youtube.map((item) => (
                    <li key={item.href}>
                      <Link 
                        to={item.href} 
                        className="block py-1 hover:text-follower-blue" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-lg">Spotify</h3>
                <ul className="space-y-2 pl-2">
                  {menuItems.spotify.map((item) => (
                    <li key={item.href}>
                      <Link 
                        to={item.href} 
                        className="block py-1 hover:text-follower-blue" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-lg">Twitch</h3>
                <ul className="space-y-2 pl-2">
                  {menuItems.twitch.map((item) => (
                    <li key={item.href}>
                      <Link 
                        to={item.href} 
                        className="block py-1 hover:text-follower-blue" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Link to="/kontakt" className="block py-1 text-lg font-medium hover:text-follower-blue" onClick={() => setMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </div>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
  
  return (
    <>
      {/* Special Offer Banner */}
      <div className="bg-follower-blue text-white text-center py-2 md:py-3 flex items-center justify-center">
        <div className="flex-grow text-center">
          <span className="inline-block bg-white/20 rounded px-2 py-1 text-xs mr-2">SPEZIAL-AKTION</span>
          <span className="font-semibold">10% Rabatt mit dem Code PULSE10</span>
        </div>
        <div className="hidden md:flex gap-1 mr-4">
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">00</div>
            <div className="text-xs">STD</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">06</div>
            <div className="text-xs">MIN</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">46</div>
            <div className="text-xs">SEK</div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <div className="bg-follower-blue rounded p-0.5 text-white text-sm font-bold">FP</div>
              <span className="font-bold text-lg">FollowerPulse</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            {!isHomePage && !isMobile && (
              <NavigationMenu onMouseLeave={() => setOpenMenus([])}>
                <NavigationMenuList>
                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('instagram')} 
                    className="font-medium text-base">
                    <NavigationMenuTrigger 
                      data-state={openMenus.includes('instagram') ? "open" : "closed"} 
                      className="bg-transparent hover:bg-transparent">Instagram</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {menuItems.instagram.map((item) => (
                          <ListItem key={item.href} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('tiktok')}
                    className="font-medium text-base">
                    <NavigationMenuTrigger 
                      data-state={openMenus.includes('tiktok') ? "open" : "closed"} 
                      className="bg-transparent hover:bg-transparent">TikTok</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {menuItems.tiktok.map((item) => (
                          <ListItem key={item.href} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('youtube')}
                    className="font-medium text-base">
                    <NavigationMenuTrigger 
                      data-state={openMenus.includes('youtube') ? "open" : "closed"} 
                      className="bg-transparent hover:bg-transparent">YouTube</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {menuItems.youtube.map((item) => (
                          <ListItem key={item.href} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('spotify')}
                    className="font-medium text-base">
                    <NavigationMenuTrigger 
                      data-state={openMenus.includes('spotify') ? "open" : "closed"} 
                      className="bg-transparent hover:bg-transparent">Spotify</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {menuItems.spotify.map((item) => (
                          <ListItem key={item.href} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('twitch')}
                    className="font-medium text-base">
                    <NavigationMenuTrigger 
                      data-state={openMenus.includes('twitch') ? "open" : "closed"} 
                      className="bg-transparent hover:bg-transparent">Twitch</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {menuItems.twitch.map((item) => (
                          <ListItem key={item.href} href={item.href} title={item.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {!isMobile && (
              <Link to="/kontakt" className="hover:text-follower-blue font-medium">
                Kontakt
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-follower-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            {!isHomePage && isMobile && renderMobileMenu()}
          </div>
        </nav>
      </header>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
