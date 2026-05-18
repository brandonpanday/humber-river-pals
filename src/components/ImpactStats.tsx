import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  value: '12',
  label: 'Unique Cleanup Events'
},
{
  value: '2,734 lbs',
  label: 'Waste Removed from the Riverside'
},
{
  value: '40+',
  label: 'Local Business Partners'
},
{
  value: '46',
  label: 'Avg. Volunteers per Event'
}];

export function ImpactStats() {
  return (
    <section
      className="w-full px-6 md:px-12 py-20"
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
        className="max-w-5xl mx-auto">
        
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-center"
          style={{
            color: 'var(--olive)'
          }}>
          
          In Just Our First Year
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            className="text-center">
            
              <p
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: 'var(--earth-brown)',
                fontFamily: 'DM Serif Display, serif'
              }}>
              
                {stat.value}
              </p>
              <p
              className="text-sm font-medium"
              style={{
                color: 'var(--sage-dark)'
              }}>
              
                {stat.label}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}