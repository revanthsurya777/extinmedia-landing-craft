
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
      name: "WordPress VIP",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#21759B" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.987 11.988 11.987 6.624 0 11.99-5.363 11.99-11.987C24.007 5.367 18.641.001 12.017.001zM1.522 12.025h4.537l2.26 6.907-4.906-6.907zm3.55-1.912H8.57c.744 0 1.266-.067 1.266-.067.522-.067.456-.822-.067-.789 0 0-1.566.133-2.576.133-.977 0-2.543-.133-2.543-.133-.522-.033-.589.756-.067.789 0 0 .489.067.978.067l1.455 3.989-2.043 6.131L1.522 12.025zm6.441 8.436l1.7-4.937 1.744 4.783c.011.033.033.056.056.078-.456.155-.933.311-1.5.076zm7.74-2.665c0-1.566-.6-2.643-1.111-3.487-.689-1.033-1.333-1.9-1.333-2.933 0-1.155.889-2.221 2.132-2.221.056 0 .111.011.167.011C16.456 5.55 14.344 4.017 11.789 4.017c-3.264 0-6.128 1.678-7.774 4.228.222.011 1.4.178 1.4.178.889.067 1.133 1.244.244 1.344-.911.1-1.822-.056-2.377-.122-.533-.067-1.022-.133-1.022-.133-.222 0-.356.311-.133.378 0 0 .6.067 1.144.156.889.144 1.755.456 2.365 1.078.6.589.933 1.344.933 2.321v4.839z"/>
        </svg>
      )
    },
    {
      name: "Salesforce",
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#00A1E0" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.2 8.4c.4.6.8 1.3.8 2.1 0 1.9-1.5 3.4-3.4 3.4-.2 0-.4 0-.6-.1-.4.2-.8.3-1.3.3-1.5 0-2.8-1.2-2.8-2.8 0-.3.1-.6.2-.9-.1-.2-.2-.5-.2-.8 0-1 .8-1.8 1.8-1.8.4 0 .8.1 1.1.4.4-.3.9-.5 1.4-.5 1.3 0 2.4 1 2.4 2.3 0 .5-.1.9-.4 1.4zm-2.6-1.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm-6.8 3.4c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.02\"%3E%3Cpolygon points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-[#001F3F] bg-gradient-to-r from-[#001F3F] to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Certified partners and industry leaders trust us with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center px-8 py-6 bg-background rounded-2xl border border-border/50 hover:border-[#001F3F]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#001F3F]/10 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {partner.logo}
                </div>
                <span className="text-foreground font-semibold text-sm lg:text-base group-hover:text-[#001F3F] transition-colors duration-300">
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
