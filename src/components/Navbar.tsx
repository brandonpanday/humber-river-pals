import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const LOGO_URL = "/hrp-transparent.png";

const navLinks = [
{
  label: 'Home',
  href: '/',
  isRoute: true
},
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

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6
      }}
      className="w-full px-6 md:px-12 py-3 border-b relative"
      style={{
        backgroundColor: 'var(--cream)',
        borderColor: 'rgba(0,0,0,0.08)'
      }}>
      
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}>
          
          <img
            src={LOGO_URL}
            alt="Humber River Pals logo"
            className="h-14 md:h-20 w-auto object-contain" />
          
          <span
            className="font-semibold text-lg md:text-xl tracking-tight"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Humber River Pals
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          link.isRoute ?
          <Link
            key={link.label}
            to={link.href}
            className="text-sm font-semibold tracking-wide transition-colors duration-200 hover:opacity-70"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
                {link.label}
              </Link> :

          <a
            key={link.label}
            href={link.href}
            className="text-sm font-semibold tracking-wide transition-colors duration-200"
            style={{
              color: 'var(--earth-brown)'
            }}
            onMouseEnter={(e) =>
            e.currentTarget.style.color = 'var(--river-blue)'
            }
            onMouseLeave={(e) =>
            e.currentTarget.style.color = 'var(--earth-brown)'
            }>
            
                {link.label}
              </a>

          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          
          {mobileOpen ?
          <XIcon
            size={24}
            style={{
              color: 'var(--earth-brown)'
            }} /> :


          <MenuIcon
            size={24}
            style={{
              color: 'var(--earth-brown)'
            }} />

          }
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="md:hidden overflow-hidden">
          
            <div className="flex flex-col gap-4 pt-6 pb-4">
              {navLinks.map((link) =>
            link.isRoute ?
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold tracking-wide py-2"
              style={{
                color: 'var(--earth-brown)'
              }}>
              
                    {link.label}
                  </Link> :

            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold tracking-wide py-2"
              style={{
                color: 'var(--earth-brown)'
              }}>
              
                    {link.label}
                  </a>

            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}