import React from 'react';
import { motion } from 'framer-motion';
export function MissionSection() {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 py-20"
      style={{
        backgroundColor: 'var(--sage)'
      }}>
      
      <motion.div
        initial={{
          opacity: 0,
          y: 40
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.7
        }}
        className="max-w-4xl mx-auto rounded-3xl px-8 md:px-16 py-16 text-center"
        style={{
          backgroundColor: 'var(--cream)'
        }}>
        
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          style={{
            color: 'var(--olive)'
          }}>
          
          Our Mission
        </p>
        <h2
          className="text-3xl md:text-4xl leading-snug mb-6"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          A healthier river starts with{' '}
          <span
            className="italic"
            style={{
              color: 'var(--olive)'
            }}>
            
            people who care.
          </span>
        </h2>
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-4"
          style={{
            color: 'var(--sage-dark)'
          }}>
          
          Humber River Pals was founded on a simple belief: when communities
          take ownership of their natural spaces, everyone benefits. We organize
          regular cleanups, habitat restoration projects, and educational
          workshops along the Humber River watershed — connecting people with
          the land and water that sustains us all.
        </p>
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          style={{
            color: 'var(--sage-dark)'
          }}>
          
          Whether you're a first-time volunteer or a seasoned conservationist,
          there's a place for you here. Together, we're proving that small,
          consistent actions create lasting change.
        </p>
      </motion.div>
    </section>);

}