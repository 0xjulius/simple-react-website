import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Studies = () => {
  const [inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='studies'>
      <div className="container mx-auto lg:mt-[40px] flex-none text-black">
        <div className='flex flex-col lg:flex-none lg:items-center'>
          <div className='flex-1'>
            <h2 className='h2 text-[28px] lg:text-[36px] uppercase text-center lg:text-center'>My studies and education</h2>
            <div className='flex-1 xl:flex gap-x-6 xl:gap-x-10 text-center'>

              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }} className='mx-auto text-center'>
                <h3 className='font-primary font-semibold mb-4 mt-16 text-lg lg:text-lg max-w-[400px] mx-auto'>Vocational Qualification on Business and Administration.</h3>
                <p className='mx-auto ctext text-center max-w-[400px]'><span className='font-semibold'>Koulutuskeskus Sedu, Seinäjoki.</span> <span className='italic'><br />Upon graduating, I was awarded a <span className='ptx2 font-semibold'>scholarship</span> from the Touko Saari foundation scholarships.</span></p>
              </motion.div>

              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }} className='mx-auto text-center'>
                <h3 className='font-primary font-semibold mb-4 mt-16 text-lg lg:text-lg'>Finnish Defence Forces, < br />Military Service.</h3> 
                <p className='italic mx-auto max-w-[400px]'><span className='not-italic font-semibold max-w-10'>Artillery Brigade, Niinisalo. <br /></span> I am a trained soldier specialized in communications. During my service, I learned technical skills, strategic planning, teamwork and problem solving.</p>
              </motion.div>

              <motion.div variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='mx-auto text-center'>
                <h3 className='font-primary font-semibold ptx mb-4 mt-16 text-xl'>Visual Designer, < br />Cultural Production.</h3>
                <p className='italic mx-auto ctext max-w-[400px]'><span className='not-italic font-semibold'>SeAMK, Seinäjoki University of Applied Sciences.</span><br />

                  I transferred to Vaasa University of Applied Sciences to continue my studies.</p>
              </motion.div>

              <motion.div variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='mx-auto lg:mx-0 text-center'>
                <h3 className='font-primary font-semibold ptx mb-4 mt-16 text-xl lg:text-xl lg:min-w-64'>IT-Bachelor of Business Administration.</h3>
                <p className='italic mx-auto ctext max-w-[400px]'><span className='not-italic font-semibold'>VAMK – Vaasa University of Applied Sciences.</span><br />

                I have successfully completed my studies with grade point average <span className='font-bold'>3.64/5.0.</span></p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;