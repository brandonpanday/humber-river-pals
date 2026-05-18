import React, { lazy } from 'react';
import { motion } from 'framer-motion';
const photos = [
{
  src: "/672992571_18086422925579637_1706588785616110731_n.jpg",
  alt: 'Young volunteer cleaning up by the Humber River',
  rotate: -7,
  top: '40%',
  left: '-2%',
  width: 200,
  height: 260
},
{
  src: "/673178082_18086422952579637_6392880267126401504_n.jpg",
  alt: 'Volunteer picking up litter along the riverbank',
  rotate: 4,
  top: '25%',
  left: '14%',
  width: 220,
  height: 280
},
{
  src: "/671246085_18086422979579637_3666016990255895250_n.jpg",
  alt: 'Volunteer holding collected waste by the river',
  rotate: -2,
  top: '30%',
  left: '36%',
  width: 240,
  height: 300
},
{
  src: "/557962776_18063310622579637_5569077755134181061_n.jpg",
  alt: 'Community gathering in the park',
  rotate: 6,
  top: '20%',
  left: '58%',
  width: 210,
  height: 270
},
{
  src: "/555040981_18063310613579637_6113571362621527000_n.jpg",
  alt: 'Family volunteering along the river trail',
  rotate: -5,
  top: '35%',
  left: '78%',
  width: 230,
  height: 290
}];

export function VolunteerSection() {
  return (
    <section id="volunteer" className="w-full px-4 md:px-12 py-8 md:py-12">
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
          margin: '-100px'
        }}
        transition={{
          duration: 0.7
        }}
        className="rounded-3xl overflow-hidden"
        style={{
          backgroundColor: 'var(--cream)'
        }}>
        
        {/* Text content */}
        <div className="pt-12 md:pt-16 pb-8 px-5 md:px-16 text-center max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
            style={{
              color: 'var(--olive)'
            }}>
            
            Volunteer
          </p>
          <h2
            className="text-2xl md:text-5xl leading-tight mb-5"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Joining Humber River Pals isn't just volunteering.{' '}
            <span
              className="italic inline-block px-2 rounded"
              style={{
                backgroundColor: 'rgba(197, 196, 161, 0.4)',
                color: 'var(--olive)'
              }}>
              
              It's building community.
            </span>
          </h2>
          <p
            className="text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            Our mission is to organize regular ravine cleanups to reduce the
            amount of litter in our ravine system while introducing the beauty
            and history of the Humber River to the neighbourhood of Weston.
          </p>
          <a
            href="https://www.eventbrite.com/o/humber-river-pals-44504686233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full text-sm font-semibold border-2 transition-colors duration-200"
            style={{
              borderColor: 'var(--earth-brown)',
              color: 'var(--earth-brown)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--earth-brown)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--earth-brown)';
            }}>
            
            Join Eventbrite
          </a>
        </div>

        {/* Photo collage — scrollable on mobile, absolute positioned on desktop */}
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto px-5 pb-8 mt-4 snap-x snap-mandatory">
          {photos.map((photo, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40
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
              delay: i * 0.08
            }}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg snap-center"
            style={{
              width: 180,
              height: 240,
              rotate: `${photo.rotate}deg`
            }}>
            
              <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              width={180}
              height={240}
              className="w-full h-full object-cover" />
            
            </motion.div>
          )}
        </div>

        {/* Desktop: absolute positioned collage */}
        <div className="hidden md:block relative w-full h-[500px] overflow-hidden mt-4">
          {photos.map((photo, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.1
            }}
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            className="absolute rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            style={{
              rotate: `${photo.rotate}deg`,
              top: photo.top,
              left: photo.left,
              width: photo.width,
              height: photo.height
            }}>
            
              <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              width={photo.width}
              height={photo.height}
              className="w-full h-full object-cover" />
            
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}