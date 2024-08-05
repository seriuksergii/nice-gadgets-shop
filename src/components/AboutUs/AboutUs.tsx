import { Fade} from 'react-awesome-reveal';
import './Team.scss';
import TeamMember from './TeamMember';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('about_us.YP'),
      role: 'Team Lead | Full-stack Developer',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'I can code',
      githubUrl: 'https://github.com/yuliaPel',
      linkedinUrl: 'https://linkedin.com/',
      email: 'pyuliya2016@gmail.com',
    },
    {
      name: t('about_us.OS'),
      role: 'Full-stack Developer',
      imageUrl: 'src/images/sasha.jpg',
      bio: 'I can code',
      githubUrl: 'https://github.com/OSpyrydonov',
      linkedinUrl: 'https://linkedin.com/',
      email: 'spiridonovsasa731@gmail.com',
    },
    {
      name: t('about_us.IK'),
      role: 'Full-stack Developer',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'I can code',
      githubUrl: 'https://github.com/ikocherovets',
      linkedinUrl: 'https://linkedin.com/',
      email: 'illiakocherovets@gmail.com',
    },
    {
      name: t('about_us.SS'),
      role: 'Full-stack Developer',
      imageUrl: 'src/images/serhi-photo1.jpg',
      bio: 'I can code',
      githubUrl: 'https://github.com/seriuksergii',
      linkedinUrl: 'https://linkedin.com/',
      email: 'sergejserduk096@gmail.com',
    },
    {
      name: t('about_us.OP'),
      role: 'Full-stack Developer',
      imageUrl: 'src/images/oleksandr1.jpg',
      bio: 'I can code',
      githubUrl: 'https://github.com/pushyshyn',
      linkedinUrl: 'https://linkedin.com/',
      email: 'o.pushyshyn@gmail.com',
    },
  ];
   
  return (
     <div className="team">
        <Fade direction='up' triggerOnce={true}>
      <div className="team__discription">
        <div className="titleAndText">
          <h1 className="title">Tech Titans</h1>
          <p className="text">{t('about_us.title')}</p>
        </div>
        <img src="src/images/teamPhoto1.jpg" alt="team photo" className="team__img" />
      </div>
      <h1 className="team__title">{t('about_us.our_team')}</h1>
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
        <h1 className="project__title">{t('about_us.about_project')}</h1>
        <p className="project__text">
          {t('about_us.paragraph1')}
          <hr />
          {t('about_us.paragraph2')}
          <hr />
          {t('about_us.paragraph3')}
          <hr />
          {t('about_us.paragraph4')}
        </p>
           </div>
           </Fade>
    </div>
  );
};

export default AboutUs;
