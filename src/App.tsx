
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DienstleistungenPage from "./pages/DienstleistungenPage";
import KontaktPage from "./pages/KontaktPage";

// Product Pages
import ProductPage from "./pages/ProductPage";
import InstagramFollowerPage from "./pages/products/instagram/InstagramFollowerPage";
import InstagramLikesPage from "./pages/products/instagram/InstagramLikesPage";
import InstagramViralPage from "./pages/products/instagram/InstagramViralPage";
import InstagramViewsPage from "./pages/products/instagram/InstagramViewsPage";
import InstagramCommentsPage from "./pages/products/instagram/InstagramCommentsPage";

import TikTokFollowerPage from "./pages/products/tiktok/TikTokFollowerPage";
import TikTokLikesPage from "./pages/products/tiktok/TikTokLikesPage";
import TikTokViralPage from "./pages/products/tiktok/TikTokViralPage";
import TikTokViewsPage from "./pages/products/tiktok/TikTokViewsPage";
import TikTokCommentsPage from "./pages/products/tiktok/TikTokCommentsPage";

import YouTubeSubscriberPage from "./pages/products/youtube/YouTubeSubscriberPage";
import YouTubeLikesPage from "./pages/products/youtube/YouTubeLikesPage";
import YouTubeViewsPage from "./pages/products/youtube/YouTubeViewsPage";
import YouTubeCommentsPage from "./pages/products/youtube/YouTubeCommentsPage";

import SpotifyFollowerPage from "./pages/products/spotify/SpotifyFollowerPage";
import SpotifyStreamsPage from "./pages/products/spotify/SpotifyStreamsPage";
import SpotifyListenersPage from "./pages/products/spotify/SpotifyListenersPage";

import TwitchFollowerPage from "./pages/products/twitch/TwitchFollowerPage";
import TwitchViewersPage from "./pages/products/twitch/TwitchViewersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <CartDrawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dienstleistungen" element={<DienstleistungenPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            
            {/* Product Pages */}
            <Route path="/produkte/:platform/:type" element={<ProductPage />} />
            
            {/* Instagram Routes */}
            <Route path="/instagram/follower" element={<InstagramFollowerPage />} />
            <Route path="/instagram/viral" element={<InstagramViralPage />} />
            <Route path="/instagram/likes" element={<InstagramLikesPage />} />
            <Route path="/instagram/aufrufe" element={<InstagramViewsPage />} />
            <Route path="/instagram/kommentare" element={<InstagramCommentsPage />} />
            
            {/* TikTok Routes */}
            <Route path="/tiktok/follower" element={<TikTokFollowerPage />} />
            <Route path="/tiktok/viral" element={<TikTokViralPage />} />
            <Route path="/tiktok/likes" element={<TikTokLikesPage />} />
            <Route path="/tiktok/aufrufe" element={<TikTokViewsPage />} />
            <Route path="/tiktok/kommentare" element={<TikTokCommentsPage />} />
            
            {/* YouTube Routes */}
            <Route path="/youtube/abonnenten" element={<YouTubeSubscriberPage />} />
            <Route path="/youtube/likes" element={<YouTubeLikesPage />} />
            <Route path="/youtube/aufrufe" element={<YouTubeViewsPage />} />
            <Route path="/youtube/kommentare" element={<YouTubeCommentsPage />} />
            
            {/* Spotify Routes */}
            <Route path="/spotify/follower" element={<SpotifyFollowerPage />} />
            <Route path="/spotify/streams" element={<SpotifyStreamsPage />} />
            <Route path="/spotify/hoerer" element={<SpotifyListenersPage />} />
            
            {/* Twitch Routes */}
            <Route path="/twitch/follower" element={<TwitchFollowerPage />} />
            <Route path="/twitch/zuschauer" element={<TwitchViewersPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
