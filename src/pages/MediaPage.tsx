import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, PlayCircleIcon } from 'lucide-react';
const videos = [
{
  title:
  "CBC News — Talking trash and how it factors into Toronto's mayoral election",
  url: 'https://www.youtube.com/watch?v=dFwE3VP1fLY',
  embedId: 'dFwE3VP1fLY',
  source: 'CBC News'
},
{
  title: 'Linea Uno CDH — Humber River Pals',
  url: 'https://www.youtube.com/watch?v=MHn5Uhnp0bw',
  embedId: 'MHn5Uhnp0bw',
  source: 'Linea Uno CDH'
},
{
  title: 'CityNews — Litter cleanup pushes through heat wave',
  url: 'https://www.youtube.com/watch?v=6crXT5Cj4xc',
  embedId: '6crXT5Cj4xc',
  source: 'CityNews'
}];

export function MediaPage() {
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
            
            Media & Resources
          </p>
          <h1
            className="text-3xl md:text-5xl leading-tight mb-5"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Humber River Pals{' '}
            <span
              className="italic"
              style={{
                color: 'var(--olive)'
              }}>
              
              in the News
            </span>
          </h1>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            See how our community's work along the Humber River has been covered
            by local and national media.
          </p>
        </motion.div>
      </section>

      {/* Act on Litter Link */}
      <section className="w-full px-6 md:px-12 py-8">
        <motion.a
          href="https://www.ontario.ca/page/act-on-litter"
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
            duration: 0.5
          }}
          className="block max-w-4xl mx-auto rounded-2xl px-8 md:px-12 py-8 transition-transform duration-200 hover:scale-[1.01]"
          style={{
            backgroundColor: 'var(--olive)',
            color: 'var(--cream)'
          }}>
          
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2 opacity-70">
                Ontario.ca
              </p>
              <h3 className="text-lg md:text-xl font-bold">
                Act on Litter — Ontario's Plan to Reduce Litter
              </h3>
              <p className="text-sm mt-2 opacity-80">
                Learn about Ontario's province-wide initiative to tackle litter
                and keep our communities clean.
              </p>
            </div>
            <ExternalLinkIcon size={24} className="flex-shrink-0 opacity-70" />
          </div>
        </motion.a>
      </section>

      {/* Video Section */}
      <section className="w-full px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-8 text-center"
            style={{
              color: 'var(--olive)'
            }}>
            
            Featured Videos
          </p>
          <div className="flex flex-col gap-8">
            {videos.map((video, i) =>
            <motion.div
              key={video.embedId}
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
                margin: '-60px'
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1
              }}
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundColor: 'var(--cream)'
              }}>
              
                <div
                className="relative w-full"
                style={{
                  paddingBottom: '56.25%'
                }}>
                
                  <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full" />
                
                </div>
                <div className="px-6 md:px-8 py-5 flex items-center justify-between gap-4">
                  <div>
                    <p
                    className="text-xs font-semibold tracking-wide uppercase mb-1"
                    style={{
                      color: 'var(--olive)'
                    }}>
                    
                      {video.source}
                    </p>
                    <h3
                    className="text-base md:text-lg font-semibold"
                    style={{
                      color: 'var(--earth-brown)'
                    }}>
                    
                      {video.title}
                    </h3>
                  </div>
                  <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-full transition-colors duration-200"
                  style={{
                    color: 'var(--olive)'
                  }}
                  aria-label={`Watch ${video.title} on YouTube`}>
                  
                    <PlayCircleIcon size={28} />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}