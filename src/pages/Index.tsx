
import { ArrowRight, Leaf, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-24 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Fund the Future of
            <span className="text-primary"> Renewable Energy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of innovators and investors making sustainable energy
            accessible through decentralized funding.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90"
          >
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/validate"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary border-2 border-primary font-medium text-lg transition-all hover:bg-primary/5"
          >
            Become a Validator
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform connects innovative renewable energy projects with
              passionate investors and validators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                List Your Project
              </h3>
              <p className="text-gray-600">
                Submit your renewable energy project for validation and funding.
                Connect with investors who share your vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DAO Validation
              </h3>
              <p className="text-gray-600">
                Our decentralized community of experts validates projects to ensure
                legitimacy and potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secure Funding
              </h3>
              <p className="text-gray-600">
                Approved projects receive funding from our community of investors
                passionate about renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <div className="bg-primary/5 rounded-3xl py-16 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our platform today and be part of the renewable energy revolution.
            Every project funded brings us closer to a sustainable future.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
