import React from 'react';
import { IconSpeakerphone, IconBrandTwitter, IconBrandGithub, IconBrandDiscord, IconBook } from '@tabler/icons';
import StyledWrapper from './StyledWrapper';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <div className="rows">
        <div className="mt-2">
          <a href="https://home.nekoverse.me/" target="_blank" className="flex items-end">
            <IconBook size={18} strokeWidth={2} />
            <span className="label ml-2">{t('COMMON.DOCUMENTATION')}</span>
          </a>
        </div>
        <div className="mt-2">
          <a href="https://github.com/nekoverse-api/neko-api-tools/issues" target="_blank" className="flex items-end">
            <IconSpeakerphone size={18} strokeWidth={2} />
            <span className="label ml-2">{t('COMMON.REPORT_ISSUES')}</span>
          </a>
        </div>
        <div className="mt-2">
          <a href="https://github.com/nekoverse-api/neko-api-tools" target="_blank" className="flex items-end">
            <IconBrandGithub size={18} strokeWidth={2} />
            <span className="label ml-2">{t('COMMON.GITHUB')}</span>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Support;
