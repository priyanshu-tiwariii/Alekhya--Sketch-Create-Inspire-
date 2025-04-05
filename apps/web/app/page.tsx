"use client";

import { useSession} from "next-auth/react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
import LoginButton from "../components/LoginButton";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

// const HomePage = () => {
//    

  

//   return (
//     <div>
//       <Navbar />
//       {session && <p>User ID: {session.user?.id}</p>}
     
//     </div>
//   );
// };


// export default HomePage;



import { motion } from "framer-motion";
import Head from "next/head";
import { 
  ArrowRight, 
  Pen, 
  Users, 
  Clock, 
  Cloud,
  Share2,
  RefreshCw
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { data: session,status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryGradient = "bg-gradient-to-r from-[#ff9966] to-[#ff5e62]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ff5e62]";
  const router = useRouter();
   useEffect(() => {
      if (session) {
        router.push("/dashboard");
      }
    }, [session, router]);

    if (status === "loading")
      return (
        <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 bg-orange-500 rounded-full animate-ping"></div>
        </div>
      </div>
      
      );

      
    
  return session ? (null):(
    <div className="min-h-screen bg-white">
      <Head>
        <title>Chitran | Collaborative Whiteboard for Teams</title>
        <meta name="description" content="Draw together in real-time with automatic saving and room-based collaboration" />
      </Head>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sticky Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
              >
                Draw Together in <span className={textGradient}>Real-Time</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-600 px-4 sm:px-0"
              >
                Chitran lets your team collaborate on a shared canvas with automatic saving. Create rooms, invite teammates, and brainstorm.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
              <LoginButton name={
    <span className="flex items-center">
      Create a Room <ArrowRight className="w-4 h-4 ml-2" />
    </span>
  } 
  className="text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition shadow-lg text-base flex items-center justify-center" 
/>
 
                <button className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition text-base">
                  See Example
                </button>
              </motion.div>
            </div>

            {/* Preview Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 mt-8 md:mt-0 px-4 sm:px-0"
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-gray-50 flex items-center justify-center p-4">
                  <div className="grid grid-cols-3 gap-3 w-full">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [-3, 3, -3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.3
                        }}
                        className={`h-12 w-full rounded-md ${i % 2 === 0 ? 'bg-[#ff9966]/20' : 'bg-[#ff5e62]/20'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Room: UX-Brainstorm</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">3 active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-16 bg-gray-200/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold mb-4 ${textGradient}`}
            >
              Built for Creative Collaboration
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to brainstorm, diagram, and sketch together in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
            {[
              {
                icon: <Pen className={`w-8 h-8 ${textGradient}`} />,
                title: "Natural Drawing",
                description: "Smooth pen tools with adjustable thickness and color picker for precise sketching"
              },
              {
                icon: <Users className={`w-8 h-8 ${textGradient}`} />,
                title: "Live Collaboration",
                description: "See teammates' cursors and strokes appear instantly as they draw"
              },
              {
                icon: <RefreshCw className={`w-8 h-8 ${textGradient}`} />,
                title: "Undo/Redo",
                description: "Mistake? Go back step-by-step or restore changes with full history"
              },
              {
                icon: <Cloud className={`w-8 h-8 ${textGradient}`} />,
                title: "Auto-Saving",
                description: "Your work is saved automatically—no more losing progress"
              },
              {
                icon: <Share2 className={`w-8 h-8 ${textGradient}`} />,
                title: "Room Sharing",
                description: "Invite others with a single links and collaborate in real-time"
              },
              {
                icon: <Clock className={`w-8 h-8 ${textGradient}`} />,
                title: "Temporary Rooms",
                description: "Rooms expire after 24 hours of inactivity for privacy"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold mb-4 ${textGradient}`}
            >
              Simple Yet Powerful
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in seconds with our intuitive workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
            {[
              {
                title: "Create a Room",
                description: "Click 'Start Drawing' to generate a unique room URL. No signup required."
              },
              {
                title: "Invite Your Team",
                description: "Share the link via email, chat, or however your team communicates."
              },
              {
                title: "Collaborate Freely",
                description: "Draw together in real-time. All changes are saved automatically."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-full ${primaryGradient} flex items-center justify-center text-white mb-4`}>
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 bg-gray-200/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold mb-4 ${textGradient}`}
            >
              Perfect For
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
            {[
              {
                title: "Remote Teams",
                description: "Hold visual standups, sketch product ideas, or diagram system architectures with distributed team members",
                examples: ["Design sprints", "Flowcharting", "Wireframing"]
              },
              {
                title: "Educators",
                description: "Explain complex concepts visually during online classes or study sessions",
                examples: ["Math equations", "Science diagrams", "Language exercises"]
              },
              {
                title: "Product Teams",
                description: "Quickly mockup UI concepts and gather feedback from stakeholders",
                examples: ["App screens", "User flows", "Feature planning"]
              }
            ].map((usecase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{usecase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{usecase.description}</p>
                <div className="space-y-2">
                  {usecase.examples.map((example, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${primaryGradient} mr-2`} />
                      <span className="text-gray-600 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-6 ${textGradient}`}
          >
            Ready to Sketch Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            Create your first room and experience seamless visual collaboration
          </motion.p>
          <LoginButton name="Start Drawing Now" className="text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition shadow-lg text-base"/>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
          
  
  );
};

export default HomePage;