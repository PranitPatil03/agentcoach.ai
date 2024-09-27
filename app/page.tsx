"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TEXTS = [
  "General Advisor",
  "Negotiation Expert",
  "Sales Advisor",
  "Marketing Guru",
  "Motivation Guide",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % TEXTS.length),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-black text-white">
      <Hero text={TEXTS[index]} />
      <Features />
      <Expertise />
      <Testimonials />
      <CTA />
    </div>
  );
}

function Hero({ text }: { text: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-black to-blue-900 overflow-hidden">
      <div className="relative z-10">
        <p className="text-xl mb-6 text-blue-300">
          Introducing AI-Powered Coaching for Real Estate Agents
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
        >
          Accelerate Your Real Estate Career
          <br />
          With Cutting-Edge Generative
          <br />
          <span className="text-blue-400">
            {text}{" "}
            <span className="text-white">
              AI Coaching
            </span>
          </span>
        </h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 px-8 rounded-full transition-colors"
        >
          GET STARTED FREE!
        </Button>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Sales Advisor",
      description:
        "Boost your property sales with expert tips and proven strategies.",
      icon: "💬",
    },
    {
      title: "Negotiation Expert",
      description:
        "Master the art of negotiation with advice on closing deals.",
      icon: "🤝",
    },
    {
      title: "Marketing Guru",
      description:
        "Elevate your marketing game with creative campaigns and insights.",
      icon: "📢",
    },
    {
      title: "Motivation Guide",
      description:
        "Stay inspired and focused with personalized tips and strategies.",
      icon: "🎯",
    },
    {
      title: "General Advisor",
      description:
        "Get comprehensive advice on various aspects of real estate.",
      icon: "📊",
    },
  ];

  return (
    <div
      className="py-8 px-4 bg-gradient-to-b from-blue-900 to-black"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Explore AI Chatbots
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg"
          >
            <div
              className="text-4xl mb-4 bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto"
            >
              {feature.icon}
            </div>
            <h3
              className="text-xl font-bold mb-2 text-center"
            >
              {feature.title}
            </h3>
            <p
              className="text-sm text-center text-gray-300"
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
        >
          TRY IT NOW
        </Button>
      </div>
    </div>
  );
}

function Expertise() {
  const prompts = [
    "How can AI real estate coaching benefit me?",
    "What legal documents are required for selling a property?",
    "What are the best practices for cold calling in real estate?",
    "How can I improve my property listings?",
    "What are effective negotiation techniques for real estate?",
    "How do I create a compelling marketing strategy?",
  ];

  return (
    <div className="bg-black py-16 px-4">
      <h2
        className="text-4xl font-bold text-center mb-8 text-white"
      >
        Explore AgentCoach.ai's Expertise
      </h2>
      <p
        className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
      >
        Discover how our AI delivers expert advice on real estate topics.
      </p>
      <div
        className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
      >
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-between w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <p className="text-sm">
              {prompt}
            </p>
            <span className="ml-2">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Lisa Kim",
      role: "Broker Associate",
      quote:
        "I love how convenient it is to access coaching resources at any time!",
      avatarUrl: "https://picsum.photos/seed/lisa/200/200",
    },
    {
      name: "Mike Rodriguez",
      role: "Realtor",
      quote:
        "The real-time feedback is invaluable. It's like having a mentor in my pocket.",
      avatarUrl: "https://picsum.photos/seed/mike/200/200",
    },
    {
      name: "Jan Stiedemann",
      role: "Global Applications Representative",
      quote:
        "Agent Coach.ai has revolutionized my approach to negotiations. I feel more confident than ever!",
      avatarUrl: "https://picsum.photos/seed/jan/200/200",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-black to-blue-900 py-16 px-4"
    >
      <h2
        className="text-4xl font-bold text-center mb-8 text-white"
      >
        What Users Say About Agent Coach.ai
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg"
          >
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h3 className="font-bold text-center">
              {testimonial.name}
            </h3>
            <p
              className="text-sm text-blue-300 text-center mb-4"
            >
              {testimonial.role}
            </p>
            <p
              className="text-sm text-center italic"
            >
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div
      className="bg-blue-900 text-white py-16 px-4"
    >
      <div
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Start Transforming Your Real Estate Career Today - For Free!
        </h2>
        <p
          className="text-blue-200 mb-12 max-w-3xl mx-auto"
        >
          Unlock expert AI-driven advice for real estate, sales, and
          negotiation. Get started for free and elevate your career today!
        </p>
        <Button
          className="bg-white text-blue-900 hover:bg-blue-100 text-xl py-6 px-8 rounded-full transition-colors"
        >
          SIGN UP FOR FREE & UNLOCK YOUR POTENTIAL TODAY!
        </Button>
      </div>
    </div>
  );
}
