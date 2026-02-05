import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  const navigation = useNavigation();

  return (
    // 'bg-base-100' বা 'bg-slate-50' ব্যবহার করলে একটি প্রিমিয়াম লুক আসে
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      {/* স্টিকি নেভিগেশন বার অনেক সময় ইউজার এক্সপেরিয়েন্স ভালো করে */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* পেজ লোড হওয়ার সময় একটি সিম্পল লোডার যোগ করা ভালো */}
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-full">
            <span className="loading loading-dots loading-lg text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;