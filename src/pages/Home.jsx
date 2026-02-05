import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiPlayCircle, FiDownloadCloud, FiStar, FiZap } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-600">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Clarity, <br /> finally.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
              Join 50+ million professionals who simplify their work and life with the world’s #1 task manager.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link to="/register" className="btn bg-[#E44232] hover:bg-[#c5392b] text-white border-none rounded-xl px-12 h-16 text-lg shadow-2xl shadow-red-200 transition-all hover:-translate-y-1 capitalize">
                Start for free
              </Link>
              <div className="text-left hidden sm:block">
                 <div className="flex text-yellow-400 mb-1"><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></div>
                 <p className="text-xs font-bold text-slate-400 italic">"Simplest and most powerful"</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <FiCheckCircle className="text-green-500" /> No credit card required.
            </p>
          </div>
          
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden aspect-video bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-90" 
                alt="App Dashboard" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                <FiPlayCircle className="text-white text-7xl drop-shadow-2xl cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEMPLATES SECTION --- */}
      <section className="bg-[#FAFAFA] py-32 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Kickstart your next project with TodoFlow Templates
            </h2>
            <p className="text-lg text-slate-500">
              No need to create projects from scratch when we have 50+ templates across work, education, and personal life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Accounting Tasks", img: "https://cdn-icons-png.flaticon.com/512/2618/2618606.png", color: "hover:border-blue-200" },
              { title: "Business Travel", img: "https://cdn-icons-png.flaticon.com/512/201/201623.png", color: "hover:border-orange-200" },
              { title: "Client Management", img: "https://cdn-icons-png.flaticon.com/512/3126/3126647.png", color: "hover:border-green-200" },
              { title: "Deep Work", img: "https://cdn-icons-png.flaticon.com/512/3079/3079165.png", color: "hover:border-red-200" },
              { title: "Meeting Agenda", img: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", color: "hover:border-purple-200" }
            ].map((item, index) => (
              <div key={index} className={`bg-white p-8 rounded-3xl border border-transparent shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 group cursor-pointer ${item.color}`}>
                <img src={item.img} alt={item.title} className="w-16 h-16 mb-6 grayscale group-hover:grayscale-0 transition-all" />
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 mb-4 font-medium italic">50+ tasks included</p>
                <div className="h-[2px] w-0 bg-[#E44232] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="text-[#E44232] font-black text-lg border-b-4 border-red-100 hover:border-red-500 transition-all pb-1">
              Explore all templates <FiArrowRight className="inline ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* --- SMART FEATURES: Magical Feel (Updated Image) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-8 order-2 lg:order-1">
             <div className="flex items-center gap-2 bg-red-50 text-[#E44232] w-fit px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                <FiZap className="fill-current"/> AI in TodoFlow
             </div>
             <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Smart features that feel magical.
             </h2>
             <p className="text-xl text-slate-600 leading-relaxed">
                Experience the power of **TodoFlow Assist**. It intelligently organizes your scattered thoughts into clear, action-oriented task plans automatically.
             </p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Natural language recognition", "Smart scheduling", "Task prioritization", "Contextual reminders"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <FiCheckCircle className="text-green-500 w-5 h-5 flex-shrink-0"/>
                    {text}
                  </li>
                ))}
             </ul>
             <button className="btn btn-ghost hover:bg-transparent p-0 text-[#E44232] font-black text-lg group">
                Learn about our AI approach <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform"/>
             </button>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
             <div className="relative">
                {/* Glowing Background Decorative Element */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-red-500/20 to-blue-500/20 blur-3xl opacity-50 rounded-full animate-pulse"></div>
                
                <div className="relative bg-white p-2 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
                    alt="AI and Smart Features Visualization" 
                    className="rounded-[3rem] w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   {/* Floating Badge on Image */}
                   <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] border border-white/50 shadow-xl">
                      <p className="text-slate-900 font-black text-lg">"TodoFlow AI organized 12 tasks in 0.4 seconds."</p>
                      <p className="text-slate-500 text-sm font-medium">— Beta Tester Experience</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="bg-slate-900 py-32 mt-10 rounded-[4rem] mx-6 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight">
            Gain calmness and clarity with <br className="hidden md:block" /> the world’s most beloved app
          </h2>
          <div className="flex flex-col items-center gap-8">
            <Link to="/register" className="btn bg-[#E44232] hover:bg-[#c5392b] text-white border-none rounded-2xl px-16 h-20 text-2xl shadow-2xl shadow-red-500/40 capitalize font-black transition-all hover:scale-105 active:scale-95">
              Start for free
            </Link>
            <div className="flex flex-col items-center">
               <div className="flex gap-1 text-yellow-400 text-xl mb-2">
                  <FiStar/><FiStar/><FiStar/><FiStar/><FiStar/>
               </div>
               <p className="text-slate-400 font-medium">374,000+ reviews on Google Play and App Store</p>
               <button className="mt-8 flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold">
                  <FiDownloadCloud /> Download All Apps
               </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;