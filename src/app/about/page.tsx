"use client";
import Timeline from "@/components/Timeline";
import PinWithinSection from "@/components/PinWithinSection";
import { motion } from "framer-motion";

export default function AboutPage() {


  return (
    
     <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

    <section className="about" id="about" >
      {/* <h1 className="about-heading">About Me</h1> */}
        <div  className="about-wrap container">
        {/* LEFT — pinned within the section */}
        <aside className="about-left">
          <PinWithinSection top={96}>
            <h2 className="about-title">Hi, I’m Nouf 👋</h2>

            <p>
              I’m a QA Engineer, graduated from King Abdulaziz University. I’ve
              built my path with a strong focus on quality, detail, and user
              experience. Beyond testing, I enjoy designing clean and creative
              interfaces, and I love bringing ideas to life by building apps and
              websites that people enjoy using.
            </p>

            <p className="about-note">
              When I’m not testing or designing, I’m probably exploring new ideas
              for apps or learning something creative ✨
            </p>
          </PinWithinSection>
        </aside>

        {/* RIGHT — timeline (tall so scrolling happens) */}
        <div className="about-right">
          <Timeline />
        </div>
      </div>
    </section>
        </motion.section>

  );
}
