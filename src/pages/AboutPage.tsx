import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
const faqs = [
{
  question: 'Do I need to register for an event beforehand?',
  answer:
  'No need to register in advance for our clean up events. Just arrive to the advertised location at the specified time and you will find us ready to greet you with all the necessary supplies for a safe clean up. *Please note you must RSVP via eventbrite for any stewardship events.'
},
{
  question: 'Do I need to bring anything to the clean up?',
  answer:
  'Short answer no, we will supply you with all the essentials: gloves, bags, hand sanitizer etc. Though, we do encourage you to bring your own reusable water container and thicker gloves (ex. garden gloves) to reduce waste.'
},
{
  question: 'Is the event family friendly?',
  answer:
  'Yes! Bring your children, we think it is great role modelling for young children to witness this collective community action. The event is safe for everyone, including your furry pets.'
},
{
  question: 'How can I get more involved?',
  answer:
  'There are many ways you can help us: postering the neighbourhood, sharing our social media posts, arriving early on event day to help set up and then staying later to pack up, sharing any sponsorships/partnerships ideas…. reach out to us and we can work together!'
}];

function FAQItem({ question, answer }: {question: string;answer: string;}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b py-5"
      style={{
        borderColor: 'rgba(0,0,0,0.1)'
      }}>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4">
        
        <h3
          className="text-base md:text-lg font-semibold"
          style={{
            color: 'var(--earth-brown)'
          }}>
          
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.3
          }}
          className="flex-shrink-0">
          
          <ChevronDownIcon
            size={20}
            style={{
              color: 'var(--olive)'
            }} />
          
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="overflow-hidden">
          
            <p
            className="text-sm md:text-base leading-relaxed pt-3"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
              {answer}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function AboutPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--sage)'
      }}>
      
      {/* Organizer Photos Hero */}
      <section className="w-full px-6 md:px-12 pt-12 pb-16">
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
          className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/about-organizers-1.jpg"
                alt="Humber River Pals organizers group photo in front of mural"
                className="w-full h-[300px] md:h-[400px] object-cover" />
              
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/about-organizers-2.jpg"
                alt="Humber River Pals organizers sitting together in storage container"
                className="w-full h-[300px] md:h-[400px] object-cover" />
              
            </div>
          </div>
          <p
            className="italic text-sm md:text-base leading-relaxed mt-6 max-w-4xl mx-auto text-center"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Meet your 2026 organizers: Salina, Eric, Ikinori, Brian, Jup, Diana,
            Alex, and Lamin — a dedicated group of community members who care
            deeply about the Humber River and bring their time, energy, and
            heart to every cleanup and gathering. We would also like to honour
            and thank our past volunteer organizers who put an endless amount of
            time and energy to get us where we are today: Ana, Elissa, Jennifer
            and Harsh — thank you!
          </p>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="w-full px-6 md:px-12 py-16">
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
          className="max-w-4xl mx-auto rounded-3xl px-8 md:px-16 py-14"
          style={{
            backgroundColor: 'var(--cream)'
          }}>
          
          <h2
            className="text-3xl md:text-4xl mb-8 text-center"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            About Us
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed mb-6"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            The Humber River Pals emerged as a response to the litter problem
            along the riverside. The founders of this collective did not want to
            ignore the issue and instead grouped together to host their first
            clean up on May 29, 2021. The community response was fantastic and
            since then, each event has had a turn out of upwards 46 volunteers
            per event. Together we are all taking care of the environment and
            strengthening community bonds.
          </p>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{
              color: 'var(--sage-dark)'
            }}>
            
            Our mission is to organise regular ravine cleanups to reduce the
            amount of litter in our ravine system while introducing the beauty
            and history of the Humber River to the high needs neighbourhood of
            Weston. Our objective is to empower and inspire local residents to
            be more conscientious about their waste and consumption.
          </p>
        </motion.div>
      </section>

      {/* Nature Stewards Section */}
      <section className="w-full px-6 md:px-12 py-16">
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
          className="max-w-4xl mx-auto rounded-3xl px-8 md:px-16 py-14"
          style={{
            backgroundColor: 'var(--olive)',
            color: 'var(--cream)'
          }}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Alongside the clean ups, Humber River Pals also hosts invasive
                species removal groups via the Toronto Nature Stewards. Ikinori
                Lau is a trained Lead Steward at Weston Lions Park and will be
                guiding registered volunteers in workshops to identify and
                remove invasive species.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base leading-relaxed mb-6 opacity-90">
                If you are interested in joining these small groups please RSVP
                at the eventbrite link.
              </p>
              <a
                href="https://www.eventbrite.com/o/humber-river-pals-44504686233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full text-sm font-semibold border-2 transition-colors duration-200"
                style={{
                  borderColor: 'var(--cream)',
                  color: 'var(--cream)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--cream)';
                  e.currentTarget.style.color = 'var(--olive)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--cream)';
                }}>
                
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-6 md:px-12 py-16">
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
          className="max-w-3xl mx-auto">
          
          <h2
            className="text-3xl md:text-4xl mb-10 text-center"
            style={{
              color: 'var(--earth-brown)'
            }}>
            
            Frequently Asked Questions
          </h2>
          <div
            className="rounded-3xl px-8 md:px-12 py-8"
            style={{
              backgroundColor: 'var(--cream)'
            }}>
            
            {faqs.map((faq, i) =>
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
            )}
          </div>
        </motion.div>
      </section>
    </div>);

}