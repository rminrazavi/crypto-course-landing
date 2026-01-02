//
"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { GridBackground } from "@/components/ui/grid-background";
import {
  IconBrandTelegram,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "@/components/ui/navbar";

export default function Page() {
  const learnItems = [
    {
      title: "Start Smart: Build Your Crypto Foundation",
      description:
        "Learn the essential concepts and tools to safely enter the world of crypto — no prior experience needed.",
      points: [
        "What is blockchain and how it works",
        "Types of wallets (hot, cold, custodial)",
        "How to create and secure your wallet",
        "Understanding networks (ERC20, BEP20, TRC20)",
        "Sending and receiving crypto safely",
      ],
    },
    {
      title: "Go Beyond Basics: Explore the Web3 Universe",
      description:
        "Dive into the decentralized world of DeFi, NFTs, and Web3 platforms — hands-on and practical.",
      points: [
        "Using Web3 wallets (MetaMask, Rabby)",
        "Interacting with DEXs (Uniswap, PancakeSwap)",
        "Understanding LPs, swaps, and slippage",
        "Exploring PERP and prediction markets",
        "Creating NFTs and listing on marketplaces",
      ],
    },
    {
      title: "Earn, Trade, and Thrive in the Crypto Economy",
      description:
        "Master the tools and strategies to participate in real-world crypto opportunities and ecosystems.",
      points: [
        "Telegram crypto gifts and TON wallets",
        "Trading and transferring Telegram tokens",
        "Identifying airdrops and farming opportunities",
        "Avoiding scams and staying secure",
        "Building your Web3 presence",
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background */}
        <GridBackground />
        <Spotlight className="-top-40 left-0 md:left-60" fill="white" />

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <section id="hero" className="pt-32 pb-24 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img
              src="/ETH.png"
              alt="ETH AI Logo"
              className="w-18 h-auto pt-8 animate-float"
            />

            <style jsx>{`
              @keyframes float {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-15px);
                }
                100% {
                  transform: translateY(0);
                }
              }

              .animate-float {
                animation: float 4s ease-in-out infinite;
              }
            `}</style>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Master Fundamental Crypto Analysis
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Learn Crypto. Earn with Web3. A hands-on course to take you from
            beginner to confident Web3 explorer. No fluff. Just real skills,
            real tools, real opportunities.
          </p>
          <div className="mt-8">
            <a
              href="#cta"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              Buy Course via Telegram
            </a>
          </div>
        </section>

        {/* Logo Marquee */}
        <section className="py-10">
          <LogoMarquee
            logos={[
              "Ethereum",
              "Bitcoin",
              "Glassnode",
              "CoinMarketCap",
              "Binance",
              "Glassnode",
              "CoinMarketCap",
              "Binance",
            ]}
          />
        </section>

        {/* Features */}
        <section id="features" className="py-24 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You’ll Learn
          </h2>
          <CardHoverEffect items={learnItems} />
        </section>

        {/* Course Intro */}
        <section id="course" className="relative py-24 overflow-hidden">
          {/* Background Beams */}
          <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Who This Course Is For
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mb-12">
              This course is designed to give you a clear, practical, and
              confidence-building path into crypto and Web3 — without confusion
              or hype.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              {[
                [
                  "🧠",
                  "Beginners",
                  "who want a clear, jargon-free introduction to crypto and blockchain",
                ],
                [
                  "💼",
                  "Professionals",
                  "looking to understand Web3 for career or investment opportunities",
                ],
                [
                  "🎮",
                  "Tech-savvy users",
                  "curious about NFTs, DEXs, and decentralized platforms",
                ],
                [
                  "📱",
                  "Telegram users",
                  "interested in crypto gifts, TON wallets, and trading inside chat apps",
                ],
                [
                  "🚀",
                  "Anyone",
                  "who wants to learn real skills, avoid scams, and confidently navigate the crypto space",
                ],
              ].map(([emoji, title, text]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl">{emoji}</span>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    <span className="font-medium text-foreground">{title}</span>{" "}
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-muted-foreground text-sm sm:text-base">
              <p className="font-medium text-foreground">
                No prior experience required.
              </p>
              <p>Just curiosity — and a desire to learn.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="relative py-24 max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Testimonial 1 */}
            <div className="relative group rounded-2xl h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl pointer-events-none" />

              {/* Card content */}
              <div className="relative z-10 rounded-2xl bg-card border border-border p-6 shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  “I had zero experience with crypto and was honestly scared of
                  making mistakes. This course explained everything step by
                  step, in simple language. After the first week, I created my
                  wallet, used a DEX, and finally understood what people mean by
                  Web3.”
                </p>
                <div className="font-medium text-foreground">
                  Ali M.
                  <span className="block text-sm text-muted-foreground">
                    Beginner · First Time Crypto User
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative group rounded-2xl h-full">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl pointer-events-none" />
              <div className="relative z-10 rounded-2xl bg-card border border-border p-6 shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  “I work in tech but Web3 always felt confusing and fragmented.
                  This course connected the dots for me — from wallets to DeFi
                  and NFTs — in a very practical way. Now I can confidently talk
                  about blockchain concepts at work and explore new
                  opportunities.”
                </p>
                <div className="font-medium text-foreground">
                  Sara K.
                  <span className="block text-sm text-muted-foreground">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative group rounded-2xl h-full">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl pointer-events-none" />
              <div className="relative z-10 rounded-2xl bg-card border border-border p-6 shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  “The Telegram and TON section alone was worth it. I finally
                  understood how crypto gifts, wallets, and trading inside
                  Telegram actually work. More importantly, I learned how to
                  avoid scams, which saved me real money.”
                </p>
                <div className="font-medium text-foreground">
                  Reza T.
                  <span className="block text-sm text-muted-foreground">
                    Telegram Power User
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Telegram</h2>
          <p className="text-muted-foreground mb-8">
            Contact us directly on Telegram to purchase the course.
          </p>
          <a
            href="https://t.me/danialkhaan"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            <IconBrandTelegram /> Connect on Telegram
          </a>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://x.com/#">
              <IconBrandX />
            </a>
            <a href="https://instagram.com/#">
              <IconBrandInstagram />
            </a>
            <a href="https://t.me/danialkhaan">
              <IconBrandTelegram />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 CryptoPath. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
