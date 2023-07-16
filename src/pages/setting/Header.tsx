import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { useTranslation } from 'next-i18next';
import Router from 'next/router';
import { memo } from 'react';

const useStyles = createStyles(({ css, token }) => ({
  title: css`
    font-size: 16px;
    font-weight: bold;
    color: ${token.colorText};
  `,
}));
const Header = memo(() => {
  const { t } = useTranslation('common');

  const { styles } = useStyles();
  return (
    <ChatHeader
      left={<div className={styles.title}>{t('setting')}</div>}
      onBackClick={() => Router.back()}
      showBackButton
    />
  );
});

export default Header;