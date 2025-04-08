'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function DashboardPage() {
  const [plants, setPlants] = useState([
    { 
      id: 1, 
      name: 'Fiddle Leaf Fig', 
      species: 'Ficus lyrata',
      healthScore: 87,
      lastWatered: '2025-04-05', 
      image: '/images/plant1.jpg',
      status: 'healthy',
      nextWatering: '2025-04-12'
    },
    { 
      id: 2, 
      name: 'Peace Lily', 
      species: 'Spathiphyllum',
      healthScore: 72,
      lastWatered: '2025-04-07', 
      image: '/images/plant2.jpg',
      status: 'needs-attention',
      nextWatering: '2025-04-10'
    },
    { 
      id: 3, 
      name: 'Snake Plant', 
      species: 'Sansevieria trifasciata',
      healthScore: 95,
      lastWatered: '2025-04-01', 
      image: '/images/plant3.jpg',
      status: 'healthy',
      nextWatering: '2025-04-15'
    }
  ]);

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-900">My Plant Dashboard</h1>
            <p className="text-green-700">Welcome back! Here's how your plants are doing today.</p>
          </div>
          <Link 
            href="/install" 
            className="mt-4 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Plant
          </Link>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Plants Monitored</h2>
              <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-4">{plants.length}</p>
            <p className="text-green-600 text-sm mt-2">All plants are connected</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Average Health</h2>
              <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-4">
              {Math.round(plants.reduce((acc, plant) => acc + plant.healthScore, 0) / plants.length)}%
            </p>
            <p className="text-green-600 text-sm mt-2">Overall good condition</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Needs Attention</h2>
              <div className="bg-yellow-100 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-4">
              {plants.filter(plant => plant.status === 'needs-attention').length}
            </p>
            <p className="text-yellow-600 text-sm mt-2">Plants needing care soon</p>
          </div>
        </div>
        
        {/* Plant List */}
        <h2 className="text-2xl font-bold text-green-900 mb-4">My Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map(plant => (
            <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className={`absolute top-3 right-3 ${
                  plant.status === 'healthy' ? 'bg-green-600' : 'bg-yellow-500'
                } text-white text-xs font-bold px-2 py-1 rounded-full`}>
                  {plant.status === 'healthy' ? 'Healthy' : 'Needs Attention'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{plant.name}</h3>
                    <p className="text-gray-500 italic text-sm">{plant.species}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-lg font-bold h-10 w-10 rounded-full flex items-center justify-center">
                    {plant.healthScore}
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Last Watered</p>
                    <p className="font-semibold">{plant.lastWatered}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Next Watering</p>
                    <p className="font-semibold">{plant.nextWatering}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <button className="text-green-600 hover:text-green-800 font-medium">View Details</button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Water Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Get Started Section */}
        <div className="mt-12 bg-green-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Ready to expand your plant family?</h2>
          <p className="text-green-800 mb-6">
            Add more FlorAI sensors to monitor additional plants in your home or garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/install" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Add More Sensors
            </Link>
            <Link 
              href="/features" 
              className="bg-white text-green-700 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 