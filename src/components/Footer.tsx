import React from 'react';
import { Link } from 'react-router-dom';
const LOGO_URL = "/hrp-transparent.png";

const footerLinks = [
{
  label: 'About',
  href: '/about',
  isRoute: true
},
{
  label: 'Media',
  href: '/media',
  isRoute: true
},
{
  label: 'Volunteer',
  href: '/#volunteer',
  isRoute: false
},
{
  label: 'Contact',
  href: '/contact',
  isRoute: true
}];

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full px-6 md:px-12 py-10 md:py-12"
      style={{
        backgroundColor: 'var(--earth-brown)'
      }}>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Humber River Pals logo"
            className="h-12 md:h-16 w-auto object-contain" />
          
          <span className="font-semibold text-base text-white">
            Humber River Pals
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {footerLinks.map((link) =>
          link.isRoute ?
          <Link
            key={link.label}
            to={link.href}
            className="text-sm transition-opacity duration-200 opacity-70 hover:opacity-100"
            style={{
              color: 'var(--sage-light)'
            }}>
            
                {link.label}
              </Link> :

          <a
            key={link.label}
            href={link.href}
            className="text-sm transition-opacity duration-200 opacity-70 hover:opacity-100"
            style={{
              color: 'var(--sage-light)'
            }}>
            
                {link.label}
              </a>

          )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://www.eventbrite.com/o/humber-river-pals-44504686233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--olive)',
              color: 'white'
            }}>
            
            Sign Up
          </a>
          <p
            className="text-xs text-center"
            style={{
              color: 'var(--sage-light)',
              opacity: 0.5
            }}>
            
            © 2026 Humber River Pals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}