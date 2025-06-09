
const TrustBar = () => {
  const partners = [
    "Google Partner",
    "Meta Business",
    "HubSpot Certified",
    "Shopify Plus",
    "WordPress VIP",
    "Salesforce",
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground font-medium">
            Trusted by industry leaders and certified partners
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-4 bg-background rounded-lg border border-border hover:border-[#001F3F] transition-colors duration-300"
            >
              <span className="text-foreground font-semibold text-sm lg:text-base">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
