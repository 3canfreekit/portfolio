import React from 'react';

const ExperienceCard = ({ title, period, company, description }: {
  title: string;
  period: string;
  company: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-purple-600">{company}</p>
      </div>
      <span className="text-sm text-gray-500">{period}</span>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Bachelor's in Software Development & Security",
      company: "Your University",
      period: "2020 - 2024",
      description: "Focused on software engineering principles, cybersecurity, and modern development practices. Specialized in blockchain technology and secure application development."
    },
    {
      title: "Executive Chef",
      company: "DC Fine Dining Establishments",
      period: "2015 - 2020",
      description: "Led high-performing kitchen teams in prestigious establishments. Developed systems for inventory management, cost control, and team coordination. Managed complex operations under pressure."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A unique journey from culinary arts to software development
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;