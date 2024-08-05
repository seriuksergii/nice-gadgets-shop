import React, { useState } from 'react';
import './Team.scss';
import { useTranslation } from 'react-i18next';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  bio,
  linkedinUrl,
  githubUrl,
  email,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  const copyToClipboard = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="team-member">
      <div className="team-member__bio-container">
        <p className="team-member__bio">`{bio}`</p>
      </div>
      <div className="team-member__photo-container">
        <img src={imageUrl} alt={`${name}'s photo`} className="team-member__photo" />
      </div>
      <div className="team-member__info">
        <h2 className="team-member__name">{name}</h2>
        <p className="team-member__role">{role}</p>
        <div className="team-member__links">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img src="img/icons/linkedin.png" alt="LinkedIn profile" className="link__icon" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img src="img/icons/github.png" alt="GitHub profile" className="link__icon" />
            </a>
          )}
          <div
            className="team-member__tooltip-container"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={copyToClipboard}
          >
            <img
              src="img/icons/email.png"
              alt="Email icon"
              className="link__icon"
              style={{ cursor: 'pointer' }}
            />
            {showTooltip && <div className="team-member__tooltip">{t('about_us.copy_email')}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
