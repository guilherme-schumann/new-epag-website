'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui';
import { withBasePath } from '@/lib/base-path';
import { useContent } from '@/hooks/useContent';
import { contactContent } from '@/content';

type ContactTab = 'sales' | 'merchant';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>('sales');
  const c = useContent(contactContent);

  const tabContent = activeTab === 'sales' ? c.sales : c.merchant;

  return (
    <section className="relative overflow-hidden bg-background">

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

      <div className="page-section page-container relative">

        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-[72px]">
            <span className="text-dark-gray">{c.headline} </span>
            <span className="text-theme-secondary">{c.headlineHighlight}</span>
          </h1>
          <p className="mt-4 text-xl text-dark-gray lg:text-[28px]">{c.subheadline}</p>
        </div>

        <div className="flex flex-col gap-8 lg:max-w-[60%]">

          <p className="text-center text-lg font-semibold text-dark-gray lg:text-left">{c.chooseTopic}</p>

          <div className="rounded-panel bg-light px-9 py-2 shadow-card">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('sales')}
                className={`flex flex-1 cursor-pointer items-center justify-between rounded-tab p-4 transition-colors ${activeTab === 'sales' ? 'bg-secondary-100' : 'bg-light hover:bg-secondary-100/50'}`}
              >
                <span className={`text-lg font-semibold ${activeTab === 'sales' ? 'text-theme-secondary' : 'text-dark-gray font-normal'}`}>
                  {c.tabs.sales}
                </span>
                <Icon name="arrow-right" size={16} className={activeTab === 'sales' ? 'text-theme-secondary' : 'text-dark-gray'} />
              </button>

              <button
                onClick={() => setActiveTab('merchant')}
                className={`flex flex-1 cursor-pointer items-center justify-between rounded-tab p-4 transition-colors ${activeTab === 'merchant' ? 'bg-secondary-100' : 'bg-light hover:bg-secondary-100/50'}`}
              >
                <span className={`text-lg font-semibold ${activeTab === 'merchant' ? 'text-theme-secondary' : 'text-dark-gray font-normal'}`}>
                  {c.tabs.merchant}
                </span>
                <Icon name="arrow-right" size={16} className={activeTab === 'merchant' ? 'text-theme-secondary' : 'text-dark-gray'} />
              </button>
            </div>
          </div>

          <div className="rounded-panel bg-light p-9 shadow-card">

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-icon bg-theme-secondary text-light">
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
              <h2 className="text-4xl font-extrabold text-dark-gray">{tabContent.title}</h2>
            </div>

            <p className="mb-6 text-base leading-relaxed text-dark-gray">{tabContent.description}</p>

            <form className="flex flex-col gap-4 rounded-panel bg-background p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">{c.form.firstName}</label>
                  <input type="text" placeholder={c.form.firstNamePlaceholder} className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">{c.form.lastName}</label>
                  <input type="text" placeholder={c.form.lastNamePlaceholder} className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark-gray">{c.form.email}</label>
                <input type="email" placeholder={c.form.emailPlaceholder} className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">{c.form.company}</label>
                  <input type="text" placeholder={c.form.companyPlaceholder} className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-dark-gray">{c.form.phone}</label>
                  <input type="tel" placeholder={c.form.phonePlaceholder} className="rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-dark-gray">{c.form.message}</label>
                <textarea rows={4} placeholder={c.form.messagePlaceholder} className="resize-none rounded-lg border border-light-gray/40 bg-light px-4 py-3 text-sm text-dark-gray placeholder-light-gray outline-none transition focus:border-theme-secondary focus:ring-2 focus:ring-theme-secondary/20" />
              </div>

              <button type="submit" className="mt-2 cursor-pointer self-start rounded-full bg-primary-500 px-8 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-600 active:bg-primary-700">
                {c.form.submit}
                <Icon name="arrow-right" size={16} className="ml-2 inline-block" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
