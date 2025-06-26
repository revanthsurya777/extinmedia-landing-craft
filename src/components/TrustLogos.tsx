
const TrustLogos = () => {
  const logos = [
    {
      name: "HubSpot",
      src: "/lovable-uploads/4672727e-d843-42cf-8946-8319f2d7fa18.png",
      alt: "HubSpot Partner"
    },
    {
      name: "Facebook",
      src: "/lovable-uploads/f9ba8d44-fa86-4c04-9f4d-180443327f61.png",
      alt: "Meta Business Partner"
    },
    {
      name: "Salesforce",
      src: "/lovable-uploads/6ade7132-29a3-4d79-ba4c-9e9c75496273.png",
      alt: "Salesforce Partner"
    },
    {
      name: "Shopify",
      src: "/lovable-uploads/d1f1e9b3-81d7-4b60-ada0-92f99bab2db7.png",
      alt: "Shopify Partner"
    },
    {
      name: "WordPress",
      src: "/lovable-uploads/46d1067a-315e-4a2e-8a3e-fd7297e927f3.png",
      alt: "WordPress Expert"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Trusted Technology Partners
          </h3>
          <p className="text-slate-600 font-medium">
            Certified and partnered with leading platforms
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto max-w-32 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
