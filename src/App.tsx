/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Globe, 
  Code, 
  Target, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ChevronDown,
  ShieldCheck,
  Users,
  BarChart3,
  Clock
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            Revenue<span className="gradient-text">UpFlow</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                location.pathname === link.path ? "text-brand-blue" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.path ? "text-brand-blue" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-brand-dark border-t border-white/10 pt-20 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              Revenue<span className="gradient-text">UpFlow</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            The world's leading digital growth agency. We don't just market, we multiply your sales with guaranteed results.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-brand-blue/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-brand-blue/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-brand-blue/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li>Performance Marketing</li>
            <li>Website Design</li>
            <li>Software Development</li>
            <li>Sales Funnels</li>
            <li>Automation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-blue" />
              hello@revenueupflow.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-blue" />
              +91 9522912089
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-blue" />
              Gwalior, MP, India
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 RevenueUpFlow. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </motion.footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp */}
      <a 
        href="https://wa.me/919522912089" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Phone className="text-white fill-white" />
      </a>
      {/* Chat */}
      <button className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <MessageSquare className="text-white" />
      </button>
    </div>
  );
};

// --- Pages ---

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Top Banner - Google Form Link */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-brand-blue/10 border-b border-brand-blue/20 py-3 px-6 text-center relative z-[60]"
      >
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <span className="bg-brand-blue text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-bold animate-pulse">New</span>
          Ready for a Growth Audit? 
          <a 
            href="https://forms.gle/aznXVT4EukyKUBcU8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline font-bold flex items-center gap-1"
          >
            Fill the Form Now <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-10 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-blue/20 blur-[140px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-purple/20 blur-[140px] rounded-full" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8 text-sm font-medium border-brand-blue/30">
              <Zap className="w-4 h-4 text-brand-blue" />
              <span className="gradient-text uppercase tracking-widest text-[10px]">Revenue Growth Engine</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
              Multiply <br />
              <span className="gradient-text">Your Sales.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light">
              Guaranteed growth in 2 months — or 100% money back. We engineer high-performance digital systems that dominate markets.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 group">
                Start Scaling Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#feature-highlights" className="btn-secondary flex items-center justify-center">
                Explore Features
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 flex items-center gap-8"
            >
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <motion.img 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, x: -20 },
                      visible: { opacity: 1, scale: 1, x: 0 }
                    }}
                    src={`https://picsum.photos/seed/${i+50}/100/100`} 
                    className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-lg">500+ Scale-Ups</p>
                <p className="text-white/40">Trust our revenue systems</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-2 relative z-10 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img 
                src="https://picsum.photos/seed/agency-hero/1000/800" 
                className="rounded-xl opacity-80"
                alt="Agency Dashboard"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 glass-card p-6 shadow-2xl border-brand-blue/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Conversion Rate</p>
                    <p className="text-2xl font-bold">+284%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -left-10 glass-card p-6 shadow-2xl border-brand-purple/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <Zap className="text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Ad Efficiency</p>
                    <p className="text-2xl font-bold">4.8x ROI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="feature-highlights" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI Precision", desc: "Hyper-targeted customer acquisition using neural networks.", icon: <Zap /> },
              { title: "Scale Velocity", desc: "Rapid deployment systems that cut time-to-market by 60%.", icon: <TrendingUp /> },
              { title: "Revenue First", desc: "Every pixel and line of code is optimized for conversion.", icon: <BarChart3 /> }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)"
                }}
                className="glass-card p-8 border-white/5 flex items-start gap-6 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-brand-blue" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {[
            "Meta Ads", "Google Ads", "Shopify Plus", "React", "Next.js", "Node.js", "Python", "AI Models", "Salesforce", "HubSpot", "Klaviyo", "TikTok Ads"
          ].map((tech, i) => (
            <div key={i} className="mx-12 text-2xl font-display font-bold text-white/20 hover:text-brand-blue transition-colors cursor-default">
              {tech}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Meta Ads", "Google Ads", "Shopify Plus", "React", "Next.js", "Node.js", "Python", "AI Models", "Salesforce", "HubSpot", "Klaviyo", "TikTok Ads"
          ].map((tech, i) => (
            <div key={i + 100} className="mx-12 text-2xl font-display font-bold text-white/20 hover:text-brand-blue transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">Why Most Businesses <span className="text-red-500/80">Struggle</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">
              Traditional agencies focus on vanity metrics. We focus on the only number that matters: your revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Wasted Ad Spend", desc: "Burning budgets on campaigns that reach the wrong people with the wrong message.", icon: <Zap className="text-red-400" /> },
              { title: "Leaky Funnels", desc: "Losing 90% of your traffic because your website isn't engineered to convert.", icon: <Target className="text-orange-400" /> },
              { title: "Invisible Brand", desc: "Getting drowned out by competitors who are using more advanced growth systems.", icon: <Globe className="text-blue-400" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)"
                }}
                className="glass-card p-10 border-white/5 transition-all group cursor-default"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl mb-4 font-display">{item.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="advanced-features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">Advanced <span className="gradient-text">Growth Features</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">
              We leverage cutting-edge technology and psychological triggers to outperform your competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI-Driven Personalization", 
                icon: <Zap />, 
                desc: "Dynamic content that adapts to user behavior in real-time, increasing engagement by up to 40%." 
              },
              { 
                title: "Predictive Analytics", 
                icon: <BarChart3 />, 
                desc: "We forecast market trends and customer behavior to stay three steps ahead of the competition." 
              },
              { 
                title: "Automated Sales Funnels", 
                icon: <Target />, 
                desc: "Self-optimizing journeys that nurture leads and close sales while you sleep." 
              },
              { 
                title: "Dynamic Retargeting", 
                icon: <Zap />, 
                desc: "Follow your prospects across the web with hyper-relevant ads based on their exact interactions." 
              },
              { 
                title: "Lead Scoring AI", 
                icon: <Users />, 
                desc: "Automatically identify and prioritize high-value leads so your sales team focuses on what matters." 
              },
              { 
                title: "Real-time ROI Dashboard", 
                icon: <TrendingUp />, 
                desc: "Full transparency with a live dashboard showing every dollar spent and every dollar earned." 
              },
              { 
                title: "Multi-channel Attribution", 
                icon: <Globe />, 
                desc: "Understand exactly which touchpoints are driving revenue with advanced fractional attribution." 
              },
              { 
                title: "Behavioral Biometrics", 
                icon: <Users />, 
                desc: "Analyze micro-interactions to predict intent and trigger high-converting interventions." 
              },
              { 
                title: "Self-Healing Funnels", 
                icon: <Zap />, 
                desc: "AI that automatically detects bottlenecks and reroutes traffic to higher-performing paths." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: i * 0.1 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.25)",
                  borderColor: "rgba(59, 130, 246, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)"
                }}
                className="glass-card p-10 border-white/5 transition-all group cursor-default"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue/20 transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-brand-blue" })}
                </div>
                <h3 className="text-2xl mb-4 font-display">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylish Process Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl mb-12 tracking-tighter">Our <span className="gradient-text">Execution</span> Framework</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Intelligence Gathering", desc: "Data-driven audit of your current performance and market landscape." },
                  { step: "02", title: "System Engineering", desc: "Building the custom growth architecture tailored to your goals." },
                  { step: "03", title: "Aggressive Deployment", desc: "Launching multi-channel campaigns with precision targeting." },
                  { step: "04", title: "Scale & Dominate", desc: "Optimizing for maximum ROI and expanding your market share." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="text-5xl font-display font-bold text-white/5 group-hover:text-brand-blue/20 transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3 font-display">{item.title}</h3>
                      <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/process-stylish/800/1000" 
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Process"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/20 blur-[80px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
          className="max-w-5xl mx-auto glass-card p-12 md:p-24 text-center relative overflow-hidden border-brand-blue/20"
        >
          <div className="absolute top-0 left-0 w-full h-2 gradient-bg" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/10 blur-[100px] rounded-full" />
          
          <ShieldCheck className="w-24 h-24 text-brand-blue mx-auto mb-10" />
          <h2 className="text-5xl md:text-7xl mb-10 tracking-tighter">The 2-Month <br />Ironclad Guarantee</h2>
          <p className="text-xl text-white/50 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            We take 100% of the risk. If your sales don't increase within 2 months of implementation, we refund every single penny. No questions, no friction.
          </p>
          <Link to="/contact" className="btn-primary px-12 py-5 text-lg">Start Risk-Free Growth</Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto glass-card p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border-white/10"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter">Ready to <span className="gradient-text">Scale?</span></h2>
            <p className="text-2xl text-white/40 max-w-xl font-light">Fill out our growth audit form and let's build your machine.</p>
          </div>
          <div className="flex flex-col gap-6 relative z-10 w-full md:w-auto">
            <a 
              href="https://forms.gle/aznXVT4EukyKUBcU8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center py-5 px-10 flex items-center justify-center gap-3 group"
            >
              Start Growth Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-3 text-white/30 text-sm">
              <Clock className="w-4 h-4" />
              <span>Only 2 slots left this month</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};


const ServicesPage = () => {
  return (
    <div className="pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Our <span className="gradient-text">Services</span></h1>
          <p className="text-xl text-white/50 max-w-2xl">We provide the full spectrum of digital growth solutions, engineered for maximum ROI.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {[
            { 
              title: "Performance Marketing", 
              desc: "We don't just run ads; we build revenue engines. Our team manages millions in ad spend across Meta, Google, TikTok, and LinkedIn with a focus on ROAS.",
              features: ["Multi-channel Strategy", "Creative Production", "Media Buying", "Retargeting Systems"],
              image: "https://picsum.photos/seed/ads/800/500"
            },
            { 
              title: "Web Page Design", 
              desc: "Get a modern, high-converting web page designed for only INR 5000. We design and develop lightning-fast, mobile-first experiences that guide users to the checkout.",
              features: ["UI/UX Design", "INR 5000 Starting Price", "Speed Optimization", "SEO Foundations"],
              image: "https://picsum.photos/seed/web/800/500"
            },
            { 
              title: "Software & AI Development", 
              desc: "Bespoke software and AI models tailored to your project needs. We build intelligent systems that automate and scale your operations.",
              features: ["Custom Software", "AI Model Integration", "Project-based Pricing", "Workflow Automation"],
              image: "https://picsum.photos/seed/software/800/500"
            },
            { 
              title: "Sales Growth Optimization", 
              desc: "We map out the entire customer journey, identifying bottlenecks and implementing psychological triggers to increase conversion rates at every step.",
              features: ["Landing Page Design", "Email Marketing", "SMS Automation", "A/B Testing"],
              image: "https://picsum.photos/seed/funnel/800/500"
            }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: i * 0.1 
              }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.03)"
              }}
              className={cn(
                "glass-card p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-300",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl mb-6">{service.title}</h2>
                <p className="text-white/60 mb-8 text-lg leading-relaxed">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-4 mb-10">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary inline-block">Get a Quote</Link>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <img src={service.image} className="rounded-xl shadow-2xl" alt={service.title} referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl mb-8 tracking-tighter">Let's Build Your <span className="gradient-text">Empire</span></h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed font-light">
              Ready to stop guessing and start growing? Fill out our growth audit form below. Our experts will analyze your business and provide a custom roadmap.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-card flex items-center justify-center border-brand-blue/30">
                  <Mail className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Email us at</p>
                  <p className="text-xl font-bold">hello@revenueupflow.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-card flex items-center justify-center border-brand-blue/30">
                  <Phone className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Call us at</p>
                  <p className="text-xl font-bold">+91 9522912089</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 border-brand-blue/20 bg-brand-blue/5">
              <h3 className="text-2xl mb-6 flex items-center gap-3 font-display">
                <ShieldCheck className="text-brand-blue w-8 h-8" />
                No-Risk Consultation
              </h3>
              <p className="text-white/50 leading-relaxed font-light">
                Your strategy call is 100% free. We'll provide a custom growth roadmap even if you don't hire us. We only win when you win.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 border-white/10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-8">
              <MessageSquare className="text-brand-blue w-10 h-10" />
            </div>
            <h2 className="text-4xl font-display mb-6 tracking-tighter">Growth Audit Form</h2>
            <p className="text-white/50 mb-10 max-w-sm leading-relaxed font-light">
              Click the button below to fill out our detailed growth audit form. This helps us understand your business better before our strategy call.
            </p>
            
            <a 
              href="https://forms.gle/aznXVT4EukyKUBcU8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-12 py-5 text-lg flex items-center gap-3 group w-full sm:w-auto"
            >
              Fill Audit Form
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-white/30 text-sm italic">Already submitted?</p>
              <Link to="/thank-you" className="text-brand-blue hover:underline text-sm font-medium">
                View Confirmation Page
              </Link>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/5 w-full">
              <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Secure & Confidential Data Processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThankYouPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full glass-card p-12 md:p-20 text-center border-brand-blue/20"
      >
        <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-10">
          <CheckCircle2 className="text-emerald-500 w-12 h-12" />
        </div>
        <h1 className="text-5xl md:text-7xl mb-8 tracking-tighter font-display">Submission <span className="gradient-text">Received!</span></h1>
        <p className="text-xl text-white/50 mb-12 leading-relaxed font-light">
          Thank you for completing the growth audit. Our team is already analyzing your data. We will reach out to you within 24 hours to schedule your strategy call.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/" className="btn-primary px-10 py-4">Back to Home</Link>
          <Link to="/services" className="btn-secondary px-10 py-4">Explore Services</Link>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark selection:bg-brand-blue/30">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
