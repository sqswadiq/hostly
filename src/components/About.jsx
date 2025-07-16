import React from 'react';
import { Home, Shield, Users, MapPin, Heart, Star, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-hostly-primary -mt-10 md:-mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 text-hostly-primary">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">About Hostly</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              More than a hostel — a space to feel at home, grow, and belong.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Hostly is a modern co-living concept crafted with comfort, simplicity, and community in mind. 
              We understand that finding the right place to stay isn't just about four walls and a roof — 
              it's about creating an environment where you can thrive, connect, and truly belong.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Born from the vision of redefining hostel living, we've created spaces that prioritize 
              safety, comfort, and community building, setting new standards for co-living experiences.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 flex items-center justify-center">
              <div className="text-center">
                <Home className="w-16 sm:w-20 h-16 sm:h-20 text-yellow-600 mx-auto mb-4" />
                <p className="text-base sm:text-lg font-medium text-gray-700">Your Home Away From Home</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-yellow-200 transition-colors">
                <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Comfort</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Every corner is designed with your comfort in mind. From cozy private spaces to welcoming common areas, 
                we ensure you feel at ease from day one.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition-colors">
                <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Simplicity</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We've streamlined the living experience, making it effortless to move in, settle down, 
                and focus on what truly matters to you.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors">
                <Users className="w-8 sm:w-10 h-8 sm:h-10 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Community</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Connect with like-minded individuals and build lasting friendships in our thoughtfully designed 
                community spaces that encourage interaction and growth.
              </p>
            </div>
          </div>
        </div>

        {/* Current & Future */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Current Offerings */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">Available Now</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kozhikode Location</h4>
                    <p className="text-gray-600">
                      Our flagship location in the heart of Kozhikode, offering easy access to the city's 
                      business districts, educational institutions, and cultural attractions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Female-Only Accommodations</h4>
                    <p className="text-gray-600">
                      Secure, comfortable, and empowering spaces designed specifically for women, 
                      with 24/7 security and women-focused amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Plans */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Multiple Cities</h4>
                    <p className="text-gray-600">
                      Expanding our footprint across major Indian cities, bringing the Hostly experience 
                      to students and professionals nationwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">All-Gender Accommodations</h4>
                    <p className="text-gray-600">
                      Introducing male and mixed-gender hostels, creating diverse communities while 
                      maintaining our commitment to safety and comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Hostly */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Choose Hostly?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">Modern amenities and thoughtful design in every space</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Safety First</h4>
              <p className="text-gray-600 text-sm">24/7 security and comprehensive safety measures</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Vibrant Community</h4>
              <p className="text-gray-600 text-sm">Connect with like-minded individuals and build lasting friendships</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hassle-Free</h4>
              <p className="text-gray-600 text-sm">Simple booking process and flexible stay options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}