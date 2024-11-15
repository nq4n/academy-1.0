import React from 'react';
import { BookCheck, Users, Lightbulb, Clock, FileSearch, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Lightbulb className="h-6 w-6 text-indigo-600" />,
      title: "Topic Selection",
      description: "AI-powered suggestions for research topics based on your interests and academic trends"
    },
    {
      icon: <FileSearch className="h-6 w-6 text-indigo-600" />,
      title: "Literature Review",
      description: "Automated search and analysis of relevant academic papers and research materials"
    },
    {
      icon: <BookCheck className="h-6 w-6 text-indigo-600" />,
      title: "Writing Structure",
      description: "Smart templates and outlines to organize your research effectively"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Expert Support",
      description: "Connect with experienced researchers and get personalized guidance"
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Time Management",
      description: "Intelligent scheduling and progress tracking for your research projects"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
      title: "AI Consultation",
      description: "24/7 AI-powered research assistant for immediate support and guidance"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Research Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines artificial intelligence with expert guidance to support
            every aspect of your academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-indigo-200 transition">
              <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}