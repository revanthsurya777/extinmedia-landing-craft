
import { useEffect, useState, useRef } from "react";

const KeyMetrics = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetStudents = 5000;
  const targetProjects = 1200;
  const targetSatisfaction = 99.8;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2500;
            const frameRate = 60;
            const totalFrames = Math.round(duration / (1000 / frameRate));
            
            let currentFrame = 0;
            
            const timer = setInterval(() => {
              currentFrame++;
              const progress = currentFrame / totalFrames;
              
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              setStudentsCount(Math.floor(targetStudents * easeOutQuart));
              setProjectsCount(Math.floor(targetProjects * easeOutQuart));
              setSatisfaction(parseFloat((targetSatisfaction * easeOutQuart).toFixed(1)));

              if (currentFrame >= totalFrames) {
                setStudentsCount(targetStudents);
                setProjectsCount(targetProjects);
                setSatisfaction(targetSatisfaction);
                clearInterval(timer);
              }
            }, 1000 / frameRate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetStudents, targetProjects, targetSatisfaction]);

  const metrics = [
    {
      value: studentsCount.toLocaleString(),
      label: "Students Trained",
      suffix: "+",
      isAnimated: true
    },
    {
      value: projectsCount.toLocaleString(),
      label: "Projects Completed",
      suffix: "+",
      isAnimated: true
    },
    {
      value: satisfaction.toFixed(1),
      label: "Client Satisfaction",
      suffix: "%",
      isAnimated: true
    },
    {
      value: "24/7",
      label: "Support Available",
      suffix: "",
      isAnimated: false
    }
  ];

  return (
    <section 
      id="stats" 
      className="py-24 bg-gradient-to-br from-[#001F3F] via-[#002A5C] to-[#001F3F] text-white relative overflow-hidden" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-50">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g fill="none" fillRule="evenodd">
            <g fill="#ffffff" fillOpacity="0.05">
              <circle cx="30" cy="30" r="2"/>
            </g>
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Results That <span className="text-white drop-shadow-lg">Speak Volumes</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Numbers that showcase our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                <span className="inline-block transition-all duration-300 group-hover:scale-110 drop-shadow-lg">
                  {metric.value}{metric.suffix}
                </span>
              </div>
              <div className="text-lg text-white/90 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
