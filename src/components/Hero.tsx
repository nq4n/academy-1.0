import React, { useState } from 'react';
import { BookOpen, Brain, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Transform Your Academic Journey with{' '}
          <span className="heading-gradient">AI-Powered</span> Support
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          From research planning to final submission, Academy provides intelligent tools
          and expert guidance to help you excel in your academic pursuits.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="btn-primary">
            Start Your Research
          </button>
          <button className="btn-secondary">
            Watch Demo
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">Smart recommendations and insights for your research</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">Find relevant sources and references instantly</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Writing Assistant</h3>
            <p className="text-gray-600">Enhance your writing with intelligent suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
}