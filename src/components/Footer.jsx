import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "What's new",
      links: ["Surface Pro", "Surface Laptop", "Copilot for personal use", "AI in Windows"],
    },
    {
      title: "Microsoft Store",
      links: ["Account profile", "Download Center", "Returns", "Order tracking"],
    },
    {
      title: "Education",
      links: ["Microsoft in education", "Devices for education", "Microsoft 365 Education", "AI for education"],
    },
    {
      title: "Business",
      links: ["Microsoft AI", "Microsoft Security", "Dynamics 365", "Microsoft 365 Copilot"],
    },
    {
      title: "Developer & IT",
      links: ["Azure", "Microsoft Learn", "Visual Studio", "Microsoft Marketplace"],
    },
    {
      title: "Company",
      links: ["Careers", "About Microsoft", "Company news", "Privacy at Microsoft", "Sustainability"],
    },
  ];

  return (
    <footer className="bg-[#f2f2f2] text-[#616161] pt-12 pb-6 border-t border-gray-200 mt-auto font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* --- Top Grid Section --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#616161] font-bold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs hover:underline hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Bottom Logo & Legal Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-6 border-t border-gray-300 text-[11px]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              English (United States)
            </span>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
            <a href="#" className="hover:underline">Consumer Health Privacy</a>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
             <NavLink to="/" className="font-bold text-slate-800 text-sm mr-2">
                Todo<span className="text-[#E44232]">ist</span>
             </NavLink>
             <a href="#" className="hover:underline">Sitemap</a>
             <a href="#" className="hover:underline">Contact Microsoft</a>
             <a href="#" className="hover:underline">Privacy</a>
             <a href="#" className="hover:underline">Terms of use</a>
             <a href="#" className="hover:underline">Trademarks</a>
             <a href="#" className="hover:underline">Safety & eco</a>
             <a href="#" className="hover:underline">About our ads</a>
             <span className="text-black font-semibold uppercase">© Md.Rakib {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;