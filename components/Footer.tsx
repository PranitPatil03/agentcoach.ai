import React from "react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer
      className="bg-black text-white py-12 px-6"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <div className="space-y-4">
          <h3 className="text-xl font-bold">
            AGENTCOACH.AI
          </h3>
          <p className="text-sm text-gray-400">
            Discover an AI platform tailored for getting expertise in your Real
            Estate Business.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                className="hover:text-blue-400"
                onClick={() => {/* Add your action here */}}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-400"
                onClick={() => {/* Add your action here */}}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-400"
                onClick={() => {/* Add your action here */}}
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-400"
                onClick={() => {/* Add your action here */}}
              >
                FAQ&apos;s
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Contact Us
          </h4>
          <p className="text-sm">
            Email: support@agentcoach.ai
          </p>
          <p className="text-sm">
            Phone: (555) 123-4567
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Newsletter
          </h4>
          <p className="text-sm">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-black rounded-l-md focus:outline-none"
            />

            <Button
              className="bg-blue-600 hover:bg-blue-700 rounded-l-none"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div
        className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
      >
        © 2024 Agentcoach.ai. All rights reserved.
      </div>
    </footer>
  );
}
