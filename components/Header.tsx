import React from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header
      className="py-4 px-6 flex justify-between items-center bg-black text-white"
    >
      <div className="text-2xl font-bold">
        agentcoach.ai
      </div>
      <nav>
        <ul className="flex space-x-6">
          {["Home", "About", "Pricing", "FAQ's", "Blog"].map((item) => (
            <li key={item}>
              <button
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4">
        <Button
          variant="ghost"
          className="text-white hover:text-blue-400 transition-colors"
        >
          Log In
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}
