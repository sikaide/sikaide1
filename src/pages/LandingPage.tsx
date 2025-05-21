import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, DollarSign, Shield, Globe, Users, TrendingUp } from 'lucide-react';
import { mockIdeas } from '../data/mockData';

const LandingPage: React.FC = () => {
  // Get 3 featured ideas for the showcase
  const featuredIdeas = mockIdeas.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-secondary-900 text-white py-20 md:py-32">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform <span className="text-primary-400">Ideas</span> into <span className="text-primary-400">Reality</span> in Ghana
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Ghana's premier marketplace connecting innovative minds with investors. Submit your ideas or discover the next big opportunity.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/submit" className="btn-primary text-center">
                  Submit Your Idea
                </Link>
                <Link to="/marketplace" className="btn-outline text-center">
                  Browse Marketplace
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-ghana-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Ƨika•iDe?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a secure platform where innovators and investors can connect, communicate, and collaborate on ideas that transform Ghana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-500" size={28} />
              </div>
              <h3 className="heading-md mb-3">Secure Protection</h3>
              <p className="text-gray-600">
                Our NDA system ensures your intellectual property remains protected throughout the entire process.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-primary-500" size={28} />
              </div>
              <h3 className="heading-md mb-3">Funding Access</h3>
              <p className="text-gray-600">
                Connect directly with investors interested in Ghanaian innovation and entrepreneurship.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-500" size={28} />
              </div>
              <h3 className="heading-md mb-3">Global Network</h3>
              <p className="text-gray-600">
                While rooted in Ghana, our platform connects local innovators with a worldwide network of investors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Ideas */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="heading-lg mb-2">Featured Ideas</h2>
              <p className="text-gray-600">Discover some of the innovative ideas from Ghanaian entrepreneurs</p>
            </div>
            <Link to="/marketplace" className="text-primary-600 font-semibold hover:text-primary-700">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredIdeas.map((idea) => (
              <Link key={idea.id} to={`/ideas/${idea.id}`} className="card group hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  {idea.imageUrl ? (
                    <img 
                      src={idea.imageUrl} 
                      alt={idea.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary-700 to-secondary-900 flex items-center justify-center">
                      <span className="text-2xl text-white font-semibold">{idea.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="mr-2">{idea.category}</span>
                    <span>•</span>
                    <span className="ml-2">{idea.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">{idea.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{idea.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">How Ƨika•iDe Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform simplifies the process of connecting idea creators with investors, making innovation accessible to all Ghanaians.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-24 h-[calc(100%-4rem)] w-1 bg-primary-200 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-1 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="heading-md mb-3 flex md:justify-end items-center">
                      <span>Submit Your Idea</span>
                      <div className="hidden md:flex md:order-first md:mr-3 w-10 h-10 bg-primary-500 rounded-full items-center justify-center text-white">1</div>
                    </h3>
                    <p className="text-gray-600">
                      Fill out our comprehensive form with your business idea details, including NDA options for protection.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex order-2 md:order-2 justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Lightbulb className="text-primary-500" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex order-2 md:order-1 justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Users className="text-primary-500" size={28} />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="heading-md mb-3 flex items-center">
                      <div className="md:hidden w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white mr-3">2</div>
                      <span>Connect with Investors</span>
                    </h3>
                    <p className="text-gray-600">
                      Your idea becomes visible to our network of investors who can browse, filter, and discover opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-1 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="heading-md mb-3 flex md:justify-end items-center">
                      <span>Negotiate and Close</span>
                      <div className="hidden md:flex md:order-first md:mr-3 w-10 h-10 bg-primary-500 rounded-full items-center justify-center text-white">3</div>
                    </h3>
                    <p className="text-gray-600">
                      Use our secure messaging system to discuss details, arrange meetings, and finalize your partnership or sale.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex order-2 md:order-2 justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <TrendingUp className="text-primary-500" size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monetization Section */}
      <section className="bg-secondary-900 text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Business Model</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ƨika•iDe operates on a fair and transparent monetization system that ensures quality while keeping the platform accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Transaction Fees</h3>
              <p className="text-gray-300">
                We charge a small percentage fee only on successful deals, ensuring you pay only when you succeed.
              </p>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Premium Subscriptions</h3>
              <p className="text-gray-300">
                Get enhanced visibility, detailed analytics, and priority support with our affordable premium plans.
              </p>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Investor Plans</h3>
              <p className="text-gray-300">
                Investors can access early opportunities, detailed metrics, and exclusive events through specialized subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section text-center">
        <div className="container-custom">
          <h2 className="heading-lg mb-6">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of Ghanaian entrepreneurs who are finding funding, selling their ideas, and building the future through Ƨika•iDe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/submit" className="btn-primary">
              Submit Your Idea
            </Link>
            <Link to="/auth/register" className="btn-secondary">
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;