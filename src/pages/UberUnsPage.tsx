
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const UberUnsPage: React.FC = () => {
  const { siteName } = useSiteConfig();
  
  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle title="Über uns" description="Erfahre mehr über unser Team und unsere Mission" />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-follower-blue to-follower-brightblue py-24 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Wir sind {siteName}, dein Partner für authentisches Wachstum in sozialen Medien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Unsere Mission</h2>
                <p className="text-gray-600 mb-4">
                  Bei {siteName} haben wir uns zum Ziel gesetzt, Content Creators, Unternehmen und Influencern zu helfen, 
                  ihre Online-Präsenz zu stärken und ihre Reichweite authentisch zu erhöhen.
                </p>
                <p className="text-gray-600">
                  Wir verstehen die Bedeutung einer starken Social-Media-Präsenz in der heutigen digitalen Welt und bieten 
                  daher Lösungen, die auf echtem Engagement basieren und langfristigen Erfolg garantieren.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team meeting" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Diese Grundprinzipien leiten uns bei allem, was wir tun, und helfen uns, unseren Kunden den bestmöglichen Service zu bieten.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Authentizität",
                  description: "Wir setzen auf echtes Wachstum und echte Interaktionen. Keine Bots, keine Fake-Follower."
                },
                {
                  title: "Transparenz",
                  description: "Wir kommunizieren offen über unsere Methoden und halten, was wir versprechen."
                },
                {
                  title: "Kundenzufriedenheit",
                  description: "Der Erfolg unserer Kunden ist unser Erfolg. Wir sind erst zufrieden, wenn Sie es sind."
                }
              ].map((value, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hinter {siteName} steht ein engagiertes Team von Social-Media-Experten und Technologieliebhabern.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Maximilian Weber",
                  position: "Gründer & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                },
                {
                  name: "Laura Schmidt",
                  position: "Social Media Expertin",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                },
                {
                  name: "Thomas Müller",
                  position: "Technischer Leiter",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                },
                {
                  name: "Sofia Becker",
                  position: "Kundenservice",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-500">{member.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Warum {siteName}?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Entdecke die Vorteile, die uns von anderen Anbietern abheben und uns zur ersten Wahl für Social-Media-Wachstum machen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-follower-blue text-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 11-6 6v3h9l3-3"></path>
                        <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                        <path d="M5 2a3 3 0 0 0 4 0"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Schnelles Wachstum</h3>
                    <p className="text-gray-600">
                      Sehe bereits in den ersten Stunden echte Ergebnisse mit unseren schnellen und effektiven Services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-follower-blue text-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Sichere Methoden</h3>
                    <p className="text-gray-600">
                      Unsere Strategien sind konform mit den Richtlinien aller großen Plattformen und gefährden deine Konten nicht.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-follower-blue text-white rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">100% Kundenzufriedenheit</h3>
                    <p className="text-gray-600">
                      Über 10.000 zufriedene Kunden vertrauen uns regelmäßig mit ihrem Social-Media-Wachstum.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection />

        {/* Contact Us CTA */}
        <section className="py-16 bg-follower-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Bereit, mit uns zu wachsen?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Kontaktiere uns noch heute und entdecke, wie wir dir helfen können, deine Social-Media-Ziele zu erreichen.
              </p>
              <button className="bg-white text-follower-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Kontaktiere uns
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UberUnsPage;
