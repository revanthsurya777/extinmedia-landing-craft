
import { useEffect, useState } from "react";

const KeyMetrics = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const targetStudents = 5000;
  const targetProjects = 1200;
  const targetSatisfaction = 99.8;

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const frameRate = 60; // 60 FPS
    const totalFrames = Math.round(duration / (1000 / frameRate));
    
    let currentFrame = 0;
    
    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      
      // Easing function for smooth animation
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

    return () => clearInterval(timer);
  }, []);

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
    <section id="stats" className="py-24 bg-[#001F3F] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That <span className="text-white">Speak Volumes</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="inline-block transition-all duration-300 hover:scale-110">
                  {metric.value}{metric.suffix}
                </span>
              </div>
              <div className="text-lg text-white/80 font-medium">
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
