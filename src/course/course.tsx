// Courses
import React from 'react';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 12500,
      duration: '32 hours',
      price: 89,
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced React & Next.js Masterclass',
      instructor: 'Mike Chen',
      rating: 4.8,
      students: 8200,
      duration: '28 hours',
      price: 109,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development',
      level: 'Advanced'
    },
    {
      id: 3,
      title: 'Data Science & Machine Learning',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.9,
      students: 15600,
      duration: '45 hours',
      price: 129,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Data Science',
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 9800,
      duration: '24 hours',
      price: 79,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Marketing',
      level: 'Beginner'
    },
    {
      id: 5,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Jessica Wang',
      rating: 4.8,
      students: 11200,
      duration: '30 hours',
      price: 99,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Design',
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'Cloud Architecture with AWS',
      instructor: 'David Kumar',
      rating: 4.9,
      students: 7400,
      duration: '38 hours',
      price: 149,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cloud',
      level: 'Advanced'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600">
            Discover our most popular courses taught by industry experts and loved by thousands of students.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {course.category}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>

                {/* Course Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price and Enroll */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    ${course.price}
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm group">
                    Enroll Now
                    <ArrowRight className="ml-1 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;


//Hero
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                🎓 Trusted by 50,000+ learners
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="text-blue-600 block">Learning Journey</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access world-class courses, expert instructors, and personalized learning paths. 
                Build skills that matter with our comprehensive learning management platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg group">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 rounded-lg border border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 font-semibold text-lg text-gray-700 group">
                <Play className="mr-2 h-5 w-5 group-hover:text-blue-600" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-600">Expert Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning online"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Session</div>
                  <div className="text-sm text-gray-600">Advanced React Patterns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//Testemonials
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Garcia',
      role: 'Software Engineer at Google',
      content: 'LearnHub transformed my career. The courses are incredibly well-structured and the instructors are top-notch. I landed my dream job at Google after completing the Full Stack Development program.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Data Scientist at Microsoft',
      content: 'The Data Science track on LearnHub is exceptional. The hands-on projects and real-world applications helped me transition from marketing to data science seamlessly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Sophie Chen',
      role: 'UX Designer at Airbnb',
      content: 'I love how LearnHub combines theory with practical projects. The UI/UX Design course not only taught me the fundamentals but also helped me build a portfolio that got me hired at Airbnb.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful professionals who have transformed their careers with LearnHub.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

//Footer
import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Learn',
      links: ['Browse Courses', 'Learning Paths', 'Certificates', 'Free Courses', 'Corporate Training']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'System Status', 'Accessibility', 'Terms & Conditions']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press', 'Investors']
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LearnHub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering learners worldwide with high-quality, accessible education. 
              Join our community of 50,000+ students and transform your career today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">hello@learnhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 LearnHub. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



//Features
import React from 'react';
import { BookOpen, Users, Award, BarChart3, Video, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Access thousands of courses across technology, business, design, and more with expert-crafted content.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and thought leaders who bring real-world experience to every lesson.'
    },
    {
      icon: Award,
      title: 'Certified Learning',
      description: 'Earn recognized certificates and badges to showcase your achievements and advance your career.'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and personalized recommendations.'
    },
    {
      icon: Video,
      title: 'Interactive Content',
      description: 'Engage with multimedia lessons, interactive quizzes, and hands-on projects for better retention.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to content that fits your schedule and learning style.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-xl text-gray-600">
            We provide everything you need to succeed in your learning journey, 
            from beginner-friendly courses to advanced specializations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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


//CTA
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    'Access to 1,200+ expert-led courses',
    'Personalized learning paths',
    'Industry-recognized certificates',
    '24/7 learning support',
    'Mobile app for learning on-the-go',
    '30-day money-back guarantee'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join over 50,000 learners who are advancing their careers and achieving their goals with LearnHub. 
              Start with a free trial and discover the difference quality education makes.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
                View Pricing Plans
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-sm text-blue-200 mb-4">Trusted by employees at</p>
              <div className="flex flex-wrap items-center gap-6 opacity-70">
                <div className="text-white font-semibold">Google</div>
                <div className="text-white font-semibold">Microsoft</div>
                <div className="text-white font-semibold">Amazon</div>
                <div className="text-white font-semibold">Apple</div>
                <div className="text-white font-semibold">Netflix</div>
                <div className="text-white font-semibold">AWS</div>
                <div className="text-white font-semibold">Capegmini</div>
                <div className="text-white font-semibold">XMP India</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Course Progress</span>
                  <span className="text-emerald-400 font-semibold">85%</span>
                </div>
                <div className="bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full h-3 w-4/5"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white/90">
                    <span>React Fundamentals</span>
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>Advanced Hooks</span>
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span>State Management</span>
                    <div className="w-5 h-5 border-2 border-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs">Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

