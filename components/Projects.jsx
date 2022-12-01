import React from 'react';
import weather from '../public/assets/projects/weather.jpg';
import chewy from '../public/assets/projects/chewy.jpeg';
import mern from '../public/assets/projects/mern.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='GoalSetter'
            backgroundImg={mern}
            projectUrl='/goalSetter'
            tech='MERN Stack'
          />
          <ProjectItem
            title='Chewy Sweet Factory'
            backgroundImg={chewy}
            projectUrl='/chewy'
            tech='Next JS'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weather}
            projectUrl='/weather'
            tech='React JS'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
