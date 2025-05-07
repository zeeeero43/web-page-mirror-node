
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ChevronRight } from "lucide-react";

const DienstleistungenPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto mt-10 mb-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Alle Dienstleistungen</h1>
          <p className="text-center mb-10">Wählen Sie den Service, der am besten zu Ihnen passt.</p>
          
          {/* Instagram Services */}
          <div className="mb-10 bg-orange-50/30 rounded-lg p-6">
            <h2 className="flex items-center text-xl font-semibold mb-6">
              <span className="inline-block bg-orange-100 rounded-lg p-2 mr-3 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Instagram
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ServiceCard 
                icon={<div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Instagram Follower"
                price="Preis ab 2,89 €"
                link="/instagram/follower"
              />
              <ServiceCard 
                icon={<div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Instagram Likes"
                price="Preis ab 1,89 €"
                link="/instagram/likes"
              />
              <ServiceCard 
                icon={<div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Instagram Views"
                price="Preis ab 1,39 €"
                link="/instagram/aufrufe"
              />
            </div>
          </div>

          {/* TikTok Services */}
          <div className="mb-10 bg-purple-50/30 rounded-lg p-6">
            <h2 className="flex items-center text-xl font-semibold mb-6">
              <span className="inline-block bg-purple-100 rounded-lg p-2 mr-3 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </span>
              TikTok
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ServiceCard 
                icon={<div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="TikTok Follower"
                price="Preis ab 3,49 €"
                link="/tiktok/follower"
              />
              <ServiceCard 
                icon={<div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="TikTok Likes"
                price="Preis ab 1,99 €"
                link="/tiktok/likes"
              />
              <ServiceCard 
                icon={<div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="TikTok Views"
                price="Preis ab 1,39 €"
                link="/tiktok/aufrufe"
              />
            </div>
          </div>

          {/* YouTube Services */}
          <div className="mb-10 bg-red-50/30 rounded-lg p-6">
            <h2 className="flex items-center text-xl font-semibold mb-6">
              <span className="inline-block bg-red-100 rounded-lg p-2 mr-3 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </span>
              YouTube
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ServiceCard 
                icon={<div className="bg-red-100 text-red-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="YouTube Abonnenten"
                price="Preis ab 5,99 €"
                link="/youtube/abonnenten"
              />
              <ServiceCard 
                icon={<div className="bg-red-100 text-red-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="YouTube Views"
                price="Preis ab 5,49 €"
                link="/youtube/aufrufe"
              />
              <ServiceCard 
                icon={<div className="bg-red-100 text-red-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="YouTube Likes"
                price="Preis ab 2,39 €"
                link="/youtube/likes"
              />
            </div>
          </div>

          {/* Spotify Services */}
          <div className="mb-10 bg-green-50/30 rounded-lg p-6">
            <h2 className="flex items-center text-xl font-semibold mb-6">
              <span className="inline-block bg-green-100 rounded-lg p-2 mr-3 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </span>
              Spotify
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ServiceCard 
                icon={<div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Spotify Follower"
                price="Preis ab 3,99 €"
                link="/spotify/follower"
              />
              <ServiceCard 
                icon={<div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Spotify Streams"
                price="Preis ab 4,29 €"
                link="/spotify/streams"
              />
              <ServiceCard 
                icon={<div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Spotify Hörer"
                price="Preis ab 5,99 €"
                link="/spotify/hoerer"
              />
            </div>
          </div>

          {/* Twitch Services */}
          <div className="mb-10 bg-purple-50/30 rounded-lg p-6">
            <h2 className="flex items-center text-xl font-semibold mb-6">
              <span className="inline-block bg-purple-100 rounded-lg p-2 mr-3 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </span>
              Twitch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ServiceCard 
                icon={<div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Twitch Follower"
                price="Preis ab 3,49 €"
                link="/twitch/follower"
              />
              <ServiceCard 
                icon={<div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>}
                title="Twitch Zuschauer"
                price="Preis ab 6,99 €"
                link="/twitch/zuschauer"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DienstleistungenPage;
