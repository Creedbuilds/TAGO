import React from 'react';
import imageOne from '../../assets/globegbe.png';
import imageTwo from '../../assets/saven.png';
import imageThree from '../../assets/hemigan.png';
import largeOne from '../../assets/elmon.png';
import largeTwo from '../../assets/jevron.png';
import { ArrowUpRight } from 'lucide-react';

const topProjects = [
  {
    name: 'Globedge Capital',
    category: 'Consulting & Technology',
    description: 'Globedge Capital Limited is driven by seasoned professionals with over three decades of combined experience across diverse industries — bridging the gap between strategy and execution.',
    image: imageOne,
      url: 'https://www.globedgecapital.com',
  },
  {
    name: 'Saven Elite',
    category: 'Consulting & Technology',
    description: 'Saven Elite Limited is a multidisciplinary business and lifestyle solutions company comprising a team of seasoned professionals with over two decades of combined experience.',
    image: imageTwo,
    
      url: 'https://www.savenelite.com',
  },
  {
    name: 'Hemigan Consulting',
    category: 'Consulting & Technology',
    description: 'Hemigan Consulting Limited is a multidisciplinary consulting and professional services company committed to helping organizations achieve excellence, sustainable growth, and transformational impact.',
    image: imageThree,
      url: 'https://www.hemiganconsulting.com',
  },
];

const bottomProjects = [
  {
    name: 'Jeroven International',
    category: 'Consulting & Technology',
    description: 'With over two decades of combined industry experience, we deliver innovative and sustainable solutions across multiple industries and borders.',
    image: largeOne,
    isWide: true,
      url: 'https://www.jeroveninternational.com',
  },
  {
    name: 'Elmoh Partners',
    category: 'Consulting & Technology',
    description: 'Elmoh Partners Limited is a dynamic and diversified enterprise committed to delivering innovative solutions across media, technology, software, ICT, international projects, and collaborative ventures.',
    image: largeTwo,
    isWide: true,
   url: 'https://www.elmohpartners.com',
  },
];

const ProjectCard = ({ project, isWide = false }) => (
  <article className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
    <div>
   
      <div className={`w-full rounded-xl overflow-hidden bg-slate-100 mb-5 ${isWide ? 'h-[175px] sm:h-[195px] md:h-[210px]' : 'h-[175px] sm:h-[195px] md:h-[210px]'}`}>
        <img 
          src={project.image} 
          alt={`${project.name} preview`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <p className="text-xs md:text-sm text-slate-500 font-medium mb-1">
        {project.category}
      </p>
      <h3 className="text-base md:text-lg font-bold text-[#0052FF] mb-3 leading-snug">
        {project.name}
      </h3>
     
      <div className="border-t border-slate-200/70 my-3" />
      <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
        {project.description}
      </p>
    </div>
    <div className="pt-2">
      <a 
       href="#contact" 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0052FF] hover:text-blue-800 transition-colors uppercase tracking-wider"
      >
        <span>VIEW PROJECT</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </article>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#f7faff] py-16 lg:py-24 px-6 w-full">
      <div className="max-w-7xl mx-auto">
    
        <div className="mb-10 lg:mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Our Projects
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Structured platforms we&apos;ve designed and engineered for organizations working across
            <br className="hidden md:block" /> consulting, trade, media, and capital.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-6 lg:gap-y-7">
          {topProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {bottomProjects.map((project) => (
            <ProjectCard key={project.name} project={project} isWide={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
