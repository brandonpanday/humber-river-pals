import React from 'react';
import { motion } from 'framer-motion';
export function LandAcknowledgement() {
  return (
    <section
      className="w-full px-6 md:px-12 py-16"
      style={{
        backgroundColor: 'var(--sage)'
      }}>
      
      <motion.div
        initial={{
          opacity: 0,
          y: 30
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
        className="max-w-3xl mx-auto text-center">
        
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{
            backgroundColor: 'var(--olive)',
            opacity: 0.4
          }} />
        
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          style={{
            color: 'var(--olive)'
          }}>
          
          Land Acknowledgement
        </p>
        <p
          className="text-sm md:text-base leading-relaxed mb-4"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          The Humber River Pals originated in the Weston Village. We would like
          to acknowledge that this community is situated upon traditional
          Indigenous territories that include: the Wendat, the Anishnabeg
          Nation, the Haudenosaunee Confederacy, and the Mississaugas of the
          Credit First Nations.
        </p>
        <p
          className="text-sm md:text-base leading-relaxed mb-4"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          The treaty that was signed for this particular parcel of land is
          collectively referred to as the Toronto Purchase and applies to lands
          east of Brown's Line to Woodbine Avenue and north towards Newmarket.
        </p>
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          We also recognize and respect the enduring presence of Indigenous
          peoples on this land. Weston is situated on what is commonly known as{' '}
          <span
            className="italic"
            style={{
              color: 'var(--olive)'
            }}>
            
            'The Carrying Place Trail'
          </span>
          .
        </p>
        <div
          className="w-12 h-px mx-auto mt-6"
          style={{
            backgroundColor: 'var(--olive)',
            opacity: 0.4
          }} />
        
      </motion.div>
    </section>);

}