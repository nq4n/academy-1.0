import React from 'react';
import { Play } from 'lucide-react';

export default function DemoVideo() {
  return (
    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        alt="Demo Preview"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="bg-white rounded-full p-4">
          <Play className="h-12 w-12 text-indigo-600" />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
        <h3 className="text-white text-xl font-semibold">
          See Academy in Action
        </h3>
        <p className="text-gray-200">
          Watch how our AI-powered platform transforms academic research
        </p>
      </div>
    </div>
  );
}