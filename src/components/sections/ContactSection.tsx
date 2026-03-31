'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui';
import { withBasePath } from '@/lib/base-path';

type ContactTab = 'sales' | 'merchant';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>('sales');

  return (
    <section className="relative overflow-hidden bg-background">

      {/* ── Decorative right panel ── */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
        <Image
          src={withBasePath('/assets/images/background-contact-sales.png')}
          alt=""
          width={800}
          height={600}
          style={{ height: 'auto' }}
          className="object-contain object-bottom-right"
        />
      </div>

      {/* ── Main content ── */}
      <div className="page-section page-container relative">

        {/* Page heading */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-[72px]">
            <span className="text-dark-gray">GET IN TOUCH </span>
            <span className="text-theme-secondary">WITH EPAG</span>
          </h1>
          <p className="mt-4 text-xl text-dark-gray lg:text-[28px]">
            Here&apos;s the fastest way to reach us and get where you need to go.
          </p>
        </div>

        {/* Contact container — limited to left half on desktop */}
        <div className="flex flex-col gap-8 lg:max-w-[60%]">

          {/* Choose topic label */}
          <p className="text-center text-lg font-semibold text-dark-gray lg:text-left">
            Please choose what do you want to talk about?
          </p>

          {/* Tab nav */}
          <div className="rounded-[10px] bg-light px-9 py-2 shadow-card">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('sales')}
                className={`flex flex-1 cursor-pointer items-center justify-between rounded-[5px] p-4 transition-colors ${
                  activeTab === 'sales'
                    ? 'bg-secondary-100'
                    : 'bg-light hover:bg-secondary-100/50'
                }`}
              >
                <span
                  className={`text-lg font-semibold ${
                    activeTab === 'sales' ? 'text-theme-secondary' : 'text-dark-gray font-normal'
                  }`}
                >
                  Contact Sales
                </span>
                <Icon
                  name="arrow-right"
                  size={16}
                  className={activeTab === 'sales' ? 'text-theme-secondary' : 'text-dark-gray'}
                />
              </button>

              <button
                onClick={() => setActiveTab('merchant')}
                className={`flex flex-1 cursor-pointer items-center justify-between rounded-[5px] p-4 transition-colors ${
                  activeTab === 'merchant'
                    ? 'bg-secondary-100'
                    : 'bg-light hover:bg-secondary-100/50'
                }`}
              >
                <span
                  className={`text-lg font-semibold ${
                    activeTab === 'merchant' ? 'text-theme-secondary' : 'text-dark-gray font-normal'
                  }`}
                >
                  Become a Merchant
                </span>
                <Icon
                  name="arrow-right"
                  size={16}
                  className={activeTab === 'merchant' ? 'text-theme-secondary' : 'text-dark-gray'}
                />
              </button>
            </div>
          </div>

          {/* Content card */}
          <div className="rounded-[10px] bg-light p-9 shadow-card">

            {/* Title row */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-theme-secondary text-light">
                {activeTab === 'sales' ? (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M4 7h20v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M4 7l2-4h16l2 4" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx="10" cy="14" r="2" stroke="white" strokeWidth="2"/>
                    <circle cx="18" cy="14" r="2" stroke="white" strokeWidth="2"/>
                    <path d="M12 14h4" stroke="white" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4L4 9v10l10 5 10-5V9L14 4Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M14 4v15M4 9l10 5 10-5" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <h2 className="text-4xl font-extrabold text-dark-gray">
                {activeTab === 'sales' ? 'Contact Sales' : 'Become a Merchant'}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-6 text-base leading-relaxed text-dark-gray">
              {activeTab === 'sales' ? (
                <>
                  With <strong>epag</strong>, you access the full potential of the Latin America
                  rising economies. Fill out the form below so a payments specialist from our team
                  can help explore our solution potential for you.
                </>
              ) : (
                <>
                  Join the <strong>epag</strong> merchant network and start accepting cross-border
                  payments across Latin America. Fill out the form below and our team will get in
                  touch with you shortly.
                </>
              )}
            </p>

            {/* Form */}
            <form className="flex flex-col gap-4 rounded-[10px] bg-background p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark-gray">Business Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark-gray">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and payment needs…"
                  className="resize-none rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 cursor-pointer self-start rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-600 active:bg-primary-700"
              >
                Send Message
                <Icon name="arrow-right" size={16} className="ml-2 inline-block" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
