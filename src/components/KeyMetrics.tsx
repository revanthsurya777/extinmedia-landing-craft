
import { useEffect, useState } from "react";

const KeyMetrics = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  const targetStudents = 5000;
  const targetProjects = 1200;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const studentsIncrement = targetStudents / steps;
    const projectsIncrement = targetProjects / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setStudentsCount(Math.floor(studentsIncrement * currentStep));
      setProjectsCount(Math.floor(projectsIncrement * currentStep));

      if (currentStep >= steps) {
        setStudentsCount(targetStudents);
        setProjectsCount(targetProjects);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      value: studentsCount.toLocaleString(),
      label: "Students Trained",
      suffix: "+"
    },
    {
      value: projectsCount.toLocaleString(),
      label: "Projects Completed",
      suffix: "+"
    },
    {
      value: "99.8",
      label: "Client Satisfaction",
      suffix: "%"
    },
    {
      value: "24/7",
      label: "Support Available",
      suffix: ""
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
              className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {metric.value}{metric.suffix}
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
