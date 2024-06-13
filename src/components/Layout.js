import clsx from 'clsx';
import Header from './Header';
import config from '../../app.config.json';
import styles from '@/styles/components/layout.module.scss';
import {HEADER_HEIGHT} from './Header';

const CONTACT_FOOTER_DATA = [
  {
    title: 'Điện thoại',
    value: config.hotline,
  },
  {
    title: 'Email',
    value: config.email,
  },
  {
    title: 'VP Đại diện',
    value: config.address,
  },
];

const INFO_COMPANY_DATA = [
  {
    title: 'Mã số thuế',
    value: config.masothue,
  },
  {
    title: 'Ngày thành lập',
    value: config.foundedTime,
  },
  {
    title: 'Trụ sở',
    value: config.headquarter,
  },
];

export default function Layout({children}) {
  const renderContactFooter = (contactData = CONTACT_FOOTER_DATA) => {
    return contactData.map((item, index) => {
      return (
        <p key={index} className={clsx(styles.navFooterItem, styles.navFooterContactItem)}>
          {item.title}: {item.value}
        </p>
      );
    });
  };

  const renderInfoCompany = (infoData = INFO_COMPANY_DATA) => {
    return infoData.map((item, index) => {
      return (
        <p key={index} className={clsx(styles.navFooterItem, styles.navFooterContactItem)}>
          {item.title}: {item.value}
        </p>
      );
    });
  };

  return (
    <div
      className={clsx('flex flex-col justify-between relative min-h-[100vh]')}>
      <Header />

      <main style={{marginTop: HEADER_HEIGHT}}>{children}</main>

      <footer className="w-full bg-neutral-900">
        <div
          className={clsx(
            'flex flex-col lg:flex-row',
            styles.footerMainContainer,
          )}>
          <div className={clsx('', styles.footerBlock)}>
            <div>
              <img
                src={config.logo}
                alt="logo-tvn"
                className={clsx('w-[130px] h-auto')}
              />
            </div>
            <div className={clsx(styles.blockContent)}>
              {renderContactFooter()}
            </div>
          </div>

          <div className={clsx('', styles.footerBlock)}>
            <div className={clsx(styles.blockTitle)}>Dịch vụ</div>

          </div>

          <div className={clsx('', styles.footerBlock)}>
            <div className={clsx('uppercase', styles.blockTitle)}>
              {config.fullNameCompany}
            </div>
            <div className={clsx(styles.blockContent)}>
              {renderInfoCompany()}
            </div>
          </div>
        </div>

        <div
          className={clsx(
            'flex items-center justify-center bg-black h-[50px]',
          )}>
          <p className={clsx('text-sm text-gray-200')}>
            Copyright © 2024 - TVN. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
