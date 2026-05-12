import Image from "next/image";
import Link from "next/link";

import { PasskeyModal } from "@/components/PasskeyModal";
import { Doctors } from "@/constants";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="landing-page">
      {isAdmin && <PasskeyModal />}

      <nav className="landing-nav">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/logokhome.png"
            height={1000}
            width={1000}
            alt="K Home Services logo"
            className="h-8 w-fit"
          />
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#services" className="landing-nav-link">
            Services
          </a>
          <a href="#about" className="landing-nav-link">
            About
          </a>
          <a href="#contact" className="landing-nav-link">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/?admin=true"
            className="landing-nav-link hidden sm:block"
          >
            Admin
          </Link>
          <Link
            href="/sign-in"
            className="landing-btn-outline hover:scale-95 transition-all duration-200"
          >
            Join the platform
          </Link>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1 className="landing-hero-title">
            Your Home,
            <br />
            <h1 className="text-24-bold text-green-500">Our Priority.</h1>
          </h1>
          <p className="landing-hero-description">
            Professional home services at your fingertips. From plumbing to
            painting, we connect you with trusted providers to keep your home in
            perfect shape.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/sign-up" className="landing-btn-primary-lg">
              Book a Service
            </Link>
            <a href="#services" className="landing-btn-outline-lg">
              View Services
            </a>
          </div>
          <div className="landing-hero-stats">
            <div className="landing-stat">
              <span className="text-24-bold text-white">500+</span>
              <span className="text-12-regular text-dark-600">
                Jobs Completed
              </span>
            </div>
            <div className="landing-stat-divider" />
            <div className="landing-stat">
              <span className="text-24-bold text-white">98%</span>
              <span className="text-12-regular text-dark-600">
                Satisfaction Rate
              </span>
            </div>
            <div className="landing-stat-divider" />
            <div className="landing-stat">
              <span className="text-24-bold text-white">50+</span>
              <span className="text-12-regular text-dark-600">
                Expert Providers
              </span>
            </div>
          </div>
        </div>
        <div className="landing-hero-image">
          <div className="landing-hero-image-glow" />
          <Image
            src="/handy.jpg"
            height={800}
            width={800}
            alt="Professional home services"
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      <section id="services" className="landing-section">
        <div className="landing-section-header">
          <h1 className="text-24-bold text-green-500">What We Offer</h1>
          <p className="landing-section-description">
            From routine maintenance to specialized repairs, our certified
            professionals handle everything your home needs.
          </p>
        </div>
        <div className="landing-services-grid">
          {Doctors.map((service, index) => (
            <div key={index} className="landing-service-card group">
              <div className="landing-service-icon">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={100}
                    height={100}
                    className="size-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <h3 className="text-16-semibold text-white">{service.name}</h3>
              <p className="text-14-regular text-dark-600">
                Professional {service.name.toLowerCase()} delivered by verified
                experts with guaranteed quality.
              </p>
              <Link
                href="/sign-up"
                className="text-14-medium mt-auto inline-flex items-center gap-1 text-green-500 transition-all duration-200 group-hover:gap-2"
              >
                Book Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M6 12l4-4-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section landing-section-alt">
        <div className="landing-section-header">
          <h1 className="text-24-bold text-green-500">Simple Process</h1>
          <p className="landing-section-description">
            Getting started with K Home Services is easy — just three simple
            steps.
          </p>
        </div>
        <div className="landing-steps-grid">
          <div className="landing-step-card">
            <div className="landing-step-number">1</div>
            <h3 className="text-18-bold text-white">Create an Account</h3>
            <p className="text-14-regular text-dark-600">
              Sign up in seconds with your name, email, and phone number to get
              started.
            </p>
          </div>
          <div className="landing-step-connector" />
          <div className="landing-step-card">
            <div className="landing-step-number">2</div>
            <h3 className="text-18-bold text-white">Choose a Service</h3>
            <p className="text-14-regular text-dark-600">
              Browse our services and select the one that fits your home&apos;s
              needs.
            </p>
          </div>
          <div className="landing-step-connector" />
          <div className="landing-step-card">
            <div className="landing-step-number">3</div>
            <h3 className="text-18-bold text-white">Book & Relax</h3>
            <p className="text-14-regular text-dark-600">
              Pick a date and time, confirm your booking, and let our experts
              handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="landing-section">
        <div className="landing-about">
          <div className="landing-about-image">
            <Image
              src="/assets/images/welcome.jpg"
              height={600}
              width={600}
              alt="About K Home Services"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="landing-about-content">
            <h1 className="text-24-bold text-green-500">Who We Are</h1>
            <p className="text-16-regular text-dark-700">
              K Home Services connects homeowners with skilled, vetted
              professionals for every home need. We believe everyone deserves a
              safe, well-maintained home — and we make that happen with
              reliability, transparency, and care.
            </p>
            <div className="landing-about-features">
              <div className="landing-about-feature">
                <div className="landing-feature-icon">
                  <Image
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h4 className="text-14-medium text-white">
                    Verified Professionals
                  </h4>
                  <p className="text-12-regular text-dark-600">
                    Every provider is background-checked and certified.
                  </p>
                </div>
              </div>
              <div className="landing-about-feature">
                <div className="landing-feature-icon">
                  <Image
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h4 className="text-14-medium text-white">
                    Transparent Pricing
                  </h4>
                  <p className="text-12-regular text-dark-600">
                    No hidden fees — you know exactly what you&apos;re paying.
                  </p>
                </div>
              </div>
              <div className="landing-about-feature">
                <div className="landing-feature-icon">
                  <Image
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h4 className="text-14-medium text-white">
                    Satisfaction Guaranteed
                  </h4>
                  <p className="text-12-regular text-dark-600">
                    Not happy? We&apos;ll make it right, every time.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/sign-up" className="landing-btn-primary-lg w-fit">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-cta">
        <div className="landing-cta-glow" />
        <h2 className="landing-cta-title">Ready to Transform Your Home?</h2>
        <p className="landing-section-description max-w-xl">
          Join hundreds of homeowners who trust K Home Services. Sign up today
          and book your first appointment.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link href="/sign-up" className="landing-btn-primary-lg">
            Create Your Account
          </Link>
          <Link href="/sign-in" className="landing-btn-outline-lg">
            I Already Have an Account
          </Link>
        </div>
      </section>

      <footer id="contact" className="landing-footer">
        <div className="landing-footer-top">
          <div className="landing-footer-brand">
            <Image
              src="/assets/icons/logokhome.png"
              height={1000}
              width={1000}
              alt="K Home Services logo"
              className="h-8 w-fit"
            />
            <p className="text-14-regular text-dark-600 max-w-xs">
              Professional home services at your fingertips. Quality work,
              trusted providers, guaranteed satisfaction.
            </p>
          </div>
          <div className="landing-footer-links">
            <div>
              <h4 className="text-14-medium mb-4 text-white">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#services"
                  className="text-14-regular text-dark-600 hover:text-green-500 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-14-regular text-dark-600 hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
                <Link
                  href="/sign-up"
                  className="text-14-regular text-dark-600 hover:text-green-500 transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  href="/sign-in"
                  className="text-14-regular text-dark-600 hover:text-green-500 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-14-medium mb-4 text-white">Services</h4>
              <div className="flex flex-col gap-2">
                {Doctors.slice(0, 5).map((service, index) => (
                  <span key={index} className="text-14-regular text-dark-600">
                    {service.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-14-medium mb-4 text-white">Contact</h4>
              <div className="flex flex-col gap-2">
                <span className="text-14-regular text-dark-600">
                  info@khomeservices.com
                </span>
                <span className="text-14-regular text-dark-600">
                  +233 55 123 4567
                </span>
                <span className="text-14-regular text-dark-600">
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-footer-bottom">
          <p className="text-14-regular text-dark-600">
            © 2026 K Home Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
