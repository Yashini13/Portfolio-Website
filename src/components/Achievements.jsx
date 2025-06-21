import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  BookOpen,
  ExternalLink,
  Star,
  ShieldCheck,
  Flag,
  FileText,
} from 'lucide-react';

const achievements = [
  {
    title: 'Runner Up - CodeCraft',
    description:
      '48Hrs National Hackathon by Apptware. Built a Leaf Disease Detection System with 96% accuracy on 10,000+ data points.',
    icon: <Star className="text-yellow-500 w-5 h-5" />,
  },
  {
    title: 'Top 50 - Tech-Divathon',
    description:
      'Women’s Hackathon. Developed a Cyber Threat Monitoring System using Wireshark, Zeek, Suricata, Kafka, and Flask.',
    icon: <ShieldCheck className="text-green-500 w-5 h-5" />,
  },
  {
    title: 'Finalist - Product Breakdown',
    description:
      'Crafted a Product Case Study of Dhan (Fintech) for The Product Folks competition.',
    icon: <Flag className="text-red-500 w-5 h-5" />,
  },
];

const publications = [
  {
    title: 'Survey Paper on IEEE Xplore',
    link: 'https://ieeexplore.ieee.org/document/10823268/', // Replace with actual link
    icon: <FileText className="text-purple-600 w-5 h-5" />,
  },
  {
    title: 'Product Case Study on The Product Folks',
    link: 'https://www.theproductfolks.com/product-management-case-studies/alexa-aims-to-deliver-superior-sound-quality-suggest-product-improvement', // Replace with actual link
    icon: <FileText className="text-blue-600 w-5 h-5" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const AchievementsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold flex items-center gap-2"
      >
        <Trophy className="text-yellow-500" /> Achievements
      </motion.h2>

      <div className="space-y-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-secondary text-[17px] max-w-3xl leading-[30px] p-4 rounded-xl shadow-md border border-gray-100 flex gap-4 items-start"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mt-12 flex  gap-2"
      >
        <BookOpen className="text-blue-600" /> Research and Publications
      </motion.h2>

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.a
            key={i}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex  gap-2 text-blue-500 hover:underline"
          >
            {pub.icon}
            <span>{pub.title}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
