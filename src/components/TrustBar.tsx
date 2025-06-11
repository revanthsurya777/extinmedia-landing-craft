
const TrustBar = () => {
  const partners = [
    {
      name: "Google Partner",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: "Meta Business",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "HubSpot Certified",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#FF7A59" d="M18.164 7.931V4.5c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5v1.5h-.75c-.413 0-.75.338-.75.75s.337.75.75.75h.75v1.131a6.89 6.89 0 0 0-3.25-.806c-3.863 0-7 3.137-7 7s3.137 7 7 7 7-3.137 7-7c0-1.234-.32-2.394-.836-3.394zM12 19.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5z"/>
          <circle cx="12" cy="15" r="2" fill="#FF7A59"/>
        </svg>
      )
    },
    {
      name: "Shopify Plus",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#96BF48" d="M16.2 4.6c-.1 0-.2 0-.3.1-.1 0-2.2.5-2.2.5s-1.5-1.4-1.6-1.5c-.4-.4-1.2-.3-1.5-.2 0 0-.3.1-.8.3-.5-1.5-1.4-2.7-3-2.7h-.2c-.9-1.2-2.1-1.7-3.2-1.1C2.1 0 1.3 1.6 1.1 3.6c-.8.2-1.4.4-1.5.4-.5.2-.5.2-.6.6-.1.3-1.4 10.7-1.4 10.7L12.3 18l8.1-1.9s-2.9-10.9-3-11.1c-.1-.5-.7-.7-1.2-.4zm-2.3.8c0 .1 0 .3-.1.4v.1c-.4.1-.9.3-1.4.4.1-1.3 0-2.3-.3-3 .6-.1 1.2 0 1.8.2v1.9zm-1.9-3.3c.2.6.3 1.4.2 2.5-.4.1-.9.2-1.4.3.3-1.2.7-2 1.2-2.8zm-1.8.1c-.4.7-.8 1.5-1.1 2.6-.3.1-.6.1-.8.2C8.5 3.7 9.1 2.7 10.2 2.2zm-4.4.6c.2 0 .4.1.6.1C6.2 3.7 5.8 4.5 5.6 5.8c-.7.2-1.3.4-1.8.5.2-1.5.8-2.8 1.8-3.5z"/>
        </svg>
      )
    },
    {
      name: "WordPress",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#21759B" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.06 1.234-.135 1.234-.135.585-.06.519-.93-.06-.915 0 0-1.755.135-2.88.135H3.53C5.395 4.3 8.472 3 12.02 3c2.652 0 5.068.77 7.124 2.105-.045-.015-.09-.015-.12-.03-.584-.03-.96-.824-.51-1.725.33-.66.735-1.29.735-1.965 0-.9-.405-1.65-.75-2.535C18.684.75 19.53.105 20.415.825c.765.615 1.38 1.38 1.845 2.25.15.3.24.63.33.99.09.42.15.87.15 1.38-.045.855-.345 1.71-.93 2.79l-1.11 3.045zM12.015 24C6.48 24 1.875 19.395 1.875 13.86 1.875 10.035 3.825 6.6 6.945 4.725L3.465 13.86C2.67 16.41 2.775 19.2 3.975 21.645c1.095 2.1 3 3.78 5.25 4.83 1.695.825 3.57 1.2 5.49 1.065L12.015 24zM20.7 7.635l-3.87 11.175c-1.125 3.24-2.94 6.18-5.13 8.625 3.24-.195 6.315-1.62 8.685-3.915 2.37-2.31 3.87-5.52 4.065-9.03.06-1.41-.165-2.82-.75-4.14z"/>
        </svg>
      )
    },
    {
      name: "Salesforce",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#00A1E0" d="M8.5 8.6c.6-.9 1.6-1.5 2.8-1.5.9 0 1.8.4 2.4 1 .5-.4 1.1-.6 1.8-.6 1.7 0 3 1.3 3 3 0 .2 0 .4-.1.6.8.4 1.3 1.2 1.3 2.1 0 1.3-1.1 2.4-2.4 2.4h-7.6c-1.5 0-2.7-1.2-2.7-2.7 0-1.3.9-2.4 2.1-2.6-.1-.2-.1-.5-.1-.7 0-1.7 1.4-3 3.1-3 .8 0 1.5.3 2.1.8l-.7.2zm7.4-1.9c.6-.4 1.3-.6 2.1-.6 2.1 0 3.8 1.7 3.8 3.8 0 .3 0 .6-.1.9 1 .5 1.7 1.5 1.7 2.7 0 1.7-1.4 3.1-3.1 3.1h-9.7c-1.9 0-3.4-1.5-3.4-3.4 0-1.6 1.1-3 2.7-3.3-.1-.3-.2-.6-.2-.9 0-2.1 1.7-3.8 3.8-3.8 1 0 1.9.4 2.6 1 .6-.5 1.4-.8 2.2-.8.8 0 1.5.2 2.1.6l-.5.7z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50/30 via-pink-50/20 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/8 rounded-full blur-2xl floating-animation" />
        <div className="absolute bottom-10 right-20 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-cyan-500/8 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Certified partners and industry leaders trust us with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center px-8 py-6 bg-background rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-sm premium-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {partner.logo}
                </div>
                <span className="text-foreground font-semibold text-sm lg:text-base group-hover:text-purple-700 transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
