
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
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
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  
  const handleMenuOpen = (menu: string) => {
    setOpenMenus([menu]);
  };
  
  return (
    <>
      {/* Special Offer Banner */}
      <div className="bg-follower-blue text-white text-center py-3 flex items-center justify-center">
        <div className="flex-grow text-center">
          <span className="inline-block bg-white/20 rounded px-2 py-1 text-xs mr-2">SPEZIAL-AKTION</span>
          <span className="font-semibold">10% Rabatt mit dem Code PULSE10</span>
        </div>
        <div className="flex gap-1 mr-4">
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
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <div className="bg-follower-blue rounded p-0.5 text-white text-sm font-bold">FP</div>
              <span className="font-bold text-lg">FollowerPulse</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {!isHomePage && (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('instagram')} onMouseLeave={() => setOpenMenus([])}>
                    <NavigationMenuTrigger data-state={openMenus.includes('instagram') ? "open" : "closed"} className="bg-transparent hover:bg-transparent font-medium">Instagram</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <ListItem href="/instagram/follower" title="Follower" />
                        <ListItem href="/instagram/viral" title="Viral Paket" />
                        <ListItem href="/instagram/likes" title="Likes" />
                        <ListItem href="/instagram/aufrufe" title="Aufrufe" />
                        <ListItem href="/instagram/kommentare" title="Kommentare" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('tiktok')} onMouseLeave={() => setOpenMenus([])}>
                    <NavigationMenuTrigger data-state={openMenus.includes('tiktok') ? "open" : "closed"} className="bg-transparent hover:bg-transparent font-medium">TikTok</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <ListItem href="/tiktok/follower" title="Follower" />
                        <ListItem href="/tiktok/viral" title="Viral Paket" />
                        <ListItem href="/tiktok/likes" title="Likes" />
                        <ListItem href="/tiktok/aufrufe" title="Aufrufe" />
                        <ListItem href="/tiktok/kommentare" title="Kommentare" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('youtube')} onMouseLeave={() => setOpenMenus([])}>
                    <NavigationMenuTrigger data-state={openMenus.includes('youtube') ? "open" : "closed"} className="bg-transparent hover:bg-transparent font-medium">YouTube</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <ListItem href="/youtube/abonnenten" title="Abonnenten" />
                        <ListItem href="/youtube/likes" title="Likes" />
                        <ListItem href="/youtube/aufrufe" title="Aufrufe" />
                        <ListItem href="/youtube/kommentare" title="Kommentare" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('spotify')} onMouseLeave={() => setOpenMenus([])}>
                    <NavigationMenuTrigger data-state={openMenus.includes('spotify') ? "open" : "closed"} className="bg-transparent hover:bg-transparent font-medium">Spotify</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <ListItem href="/spotify/follower" title="Follower" />
                        <ListItem href="/spotify/streams" title="Streams" />
                        <ListItem href="/spotify/hoerer" title="Monatliche Hörer" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem onMouseEnter={() => handleMenuOpen('twitch')} onMouseLeave={() => setOpenMenus([])}>
                    <NavigationMenuTrigger data-state={openMenus.includes('twitch') ? "open" : "closed"} className="bg-transparent hover:bg-transparent font-medium">Twitch</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        <ListItem href="/twitch/follower" title="Follower" />
                        <ListItem href="/twitch/zuschauer" title="Live Zuschauer" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}

            <Link to="/kontakt" className="hover:text-follower-blue font-medium">
              Kontakt
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-follower-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
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
