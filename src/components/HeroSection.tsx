import React from 'react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section
      className="w-full px-6 md:px-12 py-24 md:py-36 flex flex-col items-center text-center"
      style={{
        backgroundColor: 'var(--sage)'
      }}>
      
      <motion.div
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
        className="max-w-3xl">
        
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
          style={{
            color: 'var(--olive)'
          }}>
          
          Community · Conservation · Action
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          Protecting the Humber River,{' '}
          <span
            className="italic"
            style={{
              color: 'var(--olive)'
            }}>
            
            Together.
          </span>
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            color: 'var(--sage-dark)'
          }}>
          
          The Humber River Pals emerged as a response to the litter problem
          along the riverside. Together we are all taking care of the
          environment and strengthening community bonds.
        </p>
        <a
          href="#volunteer"
          className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
          style={{
            backgroundColor: 'var(--olive)'
          }}>
          
          Get Involved
        </a>
      </motion.div>
    </section>);

}