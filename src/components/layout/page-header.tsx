"use client";

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export function PageHeader() {
  const headerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const headerHoverAnimation = gsap
        .timeline({ paused: true })
        .to(headerRef.current, {
          backgroundColor: "#101828",
          borderRadius: "0 0 2rem 2rem",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          ".header-title",
          {
            color: "#fff",
            duration: 0.2,
            ease: "power2.inOut",
          },
          "<0.1"
        )
        .to(
          ".navbar-link",
          {
            color: "#fff",
            duration: 0.2,
            ease: "power2.inOut",
          },
          "<"
        );

      headerRef.current?.addEventListener("mouseenter", () => {
        headerHoverAnimation.play();
      });

      headerRef.current?.addEventListener("mouseleave", () => {
        headerHoverAnimation.reverse();
      });

      const navLinkHoverIncreaseHeaderAnimation = gsap
        .timeline({ paused: true })
        .to(headerRef.current, {
          height: "10rem",
          duration: 0.3,
          ease: "power3.inOut",
        });

      const navLinks = gsap.utils.toArray<HTMLElement>(".navbar-link");
      navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          navLinkHoverIncreaseHeaderAnimation.play();
        });

        link.addEventListener("mouseleave", () => {
          navLinkHoverIncreaseHeaderAnimation.reverse();
        });
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="bg-transparent fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-extrabold tracking-tighter header-title">
        ISLANDS.COM
      </h1>
      <div className="flex items-center space-x-32">
        <nav className="text-lg flex items-center space-x-6 font-medium">
          <Link className="navbar-link" href="/">
            Home
          </Link>
          <Link className="navbar-link" href="/about">
            About
          </Link>
          <Link className="navbar-link" href="/contact">
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="font-semibold bg-sky-600 px-3 py-1 rounded-full cursor-pointer  hover:bg-sky-400  hover:text-white transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
