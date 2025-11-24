import React from 'react';
import { FaCamera, FaBinoculars, FaFish } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCamera className="w-12 h-12" />,
      title: 'Wildlife Media',
      description: 'Capturing the raw beauty and untamed spirit of Africa\'s wildlife through stunning photography and videography.',
    },
    {
      icon: <FaBinoculars className="w-12 h-12" />,
      title: 'Hunting Expeditions',
      description: 'Documenting authentic hunting experiences and expeditions across the African wilderness.',
    },
    {
      icon: <FaFish className="w-12 h-12" />,
      title: 'Freshwater Fishing Media',
      description: 'Showcasing the thrill and serenity of freshwater fishing adventures in Africa\'s pristine waters.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-light-grey">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6 text-brand-red">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

