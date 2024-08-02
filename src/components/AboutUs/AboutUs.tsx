
import { useEffect } from 'react';
import './Team.scss';
import TeamMember from './TeamMember';


const teamMembers = [
  {
    name: 'Yulia Pelypenko',
    role: 'Team Lead | Full-stack Developer',
    imageUrl: 'https://via.placeholder.com/150',
      bio: 'I can code',
    githubUrl: 'https://github.com/yuliaPel',
      linkedinUrl: 'https://linkedin.com/',
    email: 'pyuliya2016@gmail.com'
    
  },
  {
    name: 'Oleksandr Spyrydonov',
    role: 'Full-stack Developer',
    imageUrl: 'src/images/sasha.jpg',
     bio: 'I can code',
     githubUrl: 'https://github.com/OSpyrydonov',
      linkedinUrl: 'https://linkedin.com/',
    email: 'spiridonovsasa731@gmail.com'
    
  },
  {
    name: 'Illia Kocherovets',
    role: 'Full-stack Developer',
    imageUrl: 'https://via.placeholder.com/150',
     bio: 'I can code',
    githubUrl: 'https://github.com/ikocherovets',
      linkedinUrl: 'https://linkedin.com/',
    email: 'illiakocherovets@gmail.com'
  },
  {
    name: 'Serhii Serdiuk',
    role: 'Full-stack Developer',
    imageUrl: 'src/images/serhi-photo1.jpg',
     bio: 'I can code',
    githubUrl: 'https://github.com/seriuksergii',
      linkedinUrl: 'https://linkedin.com/',
      email: 'sergejserduk096@gmail.com'
  },
  {
    name: 'Oleksandr Pushyshyn',
    role: 'Full-stack Developer',
    imageUrl: 'src/images/oleksandr1.jpg',
    bio: 'I can code',
     githubUrl: 'https://github.com/pushyshyn',
      linkedinUrl: 'https://linkedin.com/',
     email: 'o.pushyshyn@gmail.com'
   
  },
  
];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
   
  return (
    <div className="team">
      <div className="team__discription">
        <div className="titleAndText">
          <h1 className='title'>Tech Titans</h1>
          <p className='text'>We believe that the coolest creations come from the coolest people. It is never wrong to do the right thing.</p>
        </div>
        <img src="src/images/teamPhoto1.jpg" alt="team photo" className='team__img' />
      </div>
      <h1 className='team__title'>Our Team</h1>
      <div className="team__members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            bio={member.bio}
            linkedinUrl={member.linkedinUrl}
            githubUrl={member.githubUrl}
            email={member.email}
          />
        ))}
      </div>
      <div className="project__discription">
        <h1 className='project__title'>About Project</h1>
        <p className='project__text'>
          Tech Titans is a website forged by a dynamic team of five coding wizards. Armed with the magic of React, TypeScript, and SASS, they conjured up an electrifying platform featuring a treasure trove of gadgets. The grand quest? To create a site where users can embark on epic adventures to explore and purchase an array of gadgets. With built-in shopping spells, users can effortlessly add their desired gadgets to their carts.
          <hr />
          The site is as user-friendly as a friendly dragon, boasting an interface that makes navigating through gadget info—like model, manufacturer, specs, and prices—a breeze. Need to filter your search? No problem! The site lets you sift through gadgets like a seasoned treasure hunter.
          <hr />
          The team didn’t just stop at making the site look good; they made sure it’s as smooth as a wizard’s silk robe and adaptable as a shapeshifter. Whether you’re on a desktop, tablet, or smartphone, the site morphs to fit your screen, ensuring a magical experience no matter what device you’re using.
          <hr />
          Thanks to the collective sorcery of the programming team, the Tech Titans project brought to life the concept of a gadget database with top-notch shopping functionality. It provides users a fun and convenient way to choose and purchase gadgets while delivering an enchanting interface and a spellbinding user experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
