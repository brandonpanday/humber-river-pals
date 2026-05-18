import React from 'react';
import { motion } from 'framer-motion';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  ExternalLinkIcon } from
'lucide-react';
const socials = [
{
  name: 'Instagram',
  handle: '@humberriverpals',
  url: 'https://www.instagram.com/humberriverpals/',
  icon: InstagramIcon,
  description:
  'We are most active on Instagram! Tons of photos and videos of our volunteers in action can be found there — check us out!',
  highlight: true
},
{
  name: 'Facebook',
  handle: 'Humber River Pals',
  url: 'https://www.facebook.com/humberriverpals/',
  icon: FacebookIcon,
  description: 'Follow us on Facebook for event updates and community news.',
  highlight: false
},
{
  name: 'Twitter / X',
  handle: '@HumberRiverPals',
  url: 'https://x.com/HumberRiverPals',
  icon: TwitterIcon,
  description:
  'Join the conversation and share your cleanup stories with us.',
  highlight: false
}];

export function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--sage)'
      }}>
      
      {/* Hero */}
      <section className="w-full px-6 md:px-12 pt-16 pb-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          className="max-w-3xl mx-auto">
          
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
            style={{
              color: 'var(--olive)'
            }}>
            
            Get in Touch
          </p>
          <h1
            className="text-3xl md:text-5xl leading-tight mb-5"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Connect with{' '}
            <span
              className="italic"
              style={{
                color: 'var(--olive)'
              }}>
              
              Humber River Pals
            </span>
          </h1>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            Whether you want to volunteer, partner with us, or just say hello —
            we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Social Links */}
      <section className="w-full px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {socials.map((social, i) =>
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
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
            className="block rounded-2xl px-8 md:px-10 py-8 transition-transform duration-200 hover:scale-[1.01] shadow-sm"
            style={{
              backgroundColor: social.highlight ?
              'var(--olive)' :
              'var(--cream)',
              color: social.highlight ? 'var(--cream)' : 'var(--earth-brown)'
            }}>
            
              <div className="flex items-start gap-5">
                <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: social.highlight ?
                  'rgba(255,255,255,0.15)' :
                  'rgba(0,0,0,0.05)'
                }}>
                
                  <social.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg md:text-xl font-bold">
                      {social.name}
                    </h3>
                    <ExternalLinkIcon size={16} className="opacity-50" />
                  </div>
                  <p
                  className="text-sm font-medium mb-2"
                  style={{
                    opacity: 0.7
                  }}>
                  
                    {social.handle}
                  </p>
                  <p
                  className="text-sm leading-relaxed"
                  style={{
                    opacity: 0.85
                  }}>
                  
                    {social.description}
                  </p>
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </section>

      {/* Email Section */}
      <section className="w-full px-6 md:px-12 py-12">
        <motion.div
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
            duration: 0.6
          }}
          className="max-w-3xl mx-auto rounded-3xl px-8 md:px-16 py-14 text-center"
          style={{
            backgroundColor: 'var(--cream)'
          }}>
          
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor: 'rgba(0,0,0,0.05)'
            }}>
            
            <MailIcon
              size={28}
              style={{
                color: 'var(--earth-brown)'
              }} />
            
          </div>
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Send Us an Email
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            Have questions about upcoming events, sponsorship opportunities, or
            want to get involved? Drop us a line and we'll get back to you.
          </p>
          <a
            href="mailto:humberriverpals@gmail.com"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--earth-brown)'
            }}>
            
            humberriverpals@gmail.com
          </a>
        </motion.div>
      </section>
    </div>);

}