'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import config from '../../app.config.json';
import styles from '@/styles/components/header.module.scss';

const HEADER_DATA = [
  {
    label: 'Hotline',
    value: config.hotline_formatted,
  },
  {
    label: 'Facebook',
    value: config.nameFacebook,
  },
  {
    label: 'Địa chỉ',
    value: config.address,
  },
];

const NAV_DATA = [
  {
    title: 'Trang chủ',
    link: '/',
  },
  {
    title: 'Giới thiệu',
    link: '/about',
  },
  {
    title: 'Sản phẩm',
    link: '/project',
  },
  {
    title: 'Dịch vụ',
    link: '/service',
  },
  {
    title: 'Liên hệ',
    link: '/contact',
  },
];

const HEADER_INFO_HEIGHT = 50;
const HEADER_MAIN_HEIGHT = 80;
export const HEADER_HEIGHT = HEADER_INFO_HEIGHT + HEADER_MAIN_HEIGHT;

export default function Header() {
  const [isShowNavMobile, setShowNavMobile] = React.useState(false);

  const toggleNavMobile = () => {
    setShowNavMobile(!isShowNavMobile);
  };

  function renderHeaderData(headerData = HEADER_DATA) {
    return headerData.map((item, index) => {
      const extraStyle = index > 0 && styles.divider;

      return (
        <p key={index} className={clsx(styles.headerData, extraStyle)}>
          {item.label}: {item.value}
        </p>
      );
    });
  }

  function renderNavHeader() {
    const pathName = usePathname();

    return NAV_DATA.map((item, index) => {
      const extraClassName = pathName == item.link ? 'text-red-500' : '';

      return (
        <Link
          className={'text-neutral-950 hover:text-red-500'}
          key={index}
          href={item.link}>
          <h6
            className={clsx(
              'font-bold lg:font-semibold',
              styles.navItemLinkItem,
              extraClassName,
            )}>
            {item.title}
          </h6>
        </Link>
      );
    });
  }

  return (
    <>
      <header className="w-full shadow-md fixed z-50">
        <div
          className={clsx(
            `bg-neutral-800 px-[15px] py-3 flex items-center justify-center gap-x-3`,
          )}
          style={{height: HEADER_INFO_HEIGHT}}>
          {renderHeaderData()}
        </div>

        <div className={'bg-white'} style={{height: HEADER_MAIN_HEIGHT}}>
          <div
            className={clsx(
              'max-w-app-width flex flex-1 items-center justify-between',
              styles.headerContent,
            )}>
            <div
              className={clsx(
                'flex justify-between items-center w-full px-[15px] py-1 lg:w-auto lg:py-2.5',
              )}>
              <Link href={'/'}>
                <img
                  src={config.logo}
                  alt="logo-tvn"
                  className={clsx('w-[130px] h-auto')}
                />
              </Link>

              <NavMobileToggle
                isOpen={isShowNavMobile}
                onClick={toggleNavMobile}
              />
            </div>

            <div
              className={clsx(
                'relative w-full h-full',
                styles.navItemContainer,
                isShowNavMobile && styles.showNavMobile,
              )}
              style={{height: `calc(100vh - ${HEADER_HEIGHT}px)`}}>
              {renderNavHeader()}
            </div>
          </div>
        </div>
      </header>
      {isShowNavMobile && (
        <div className="absolute w-full h-full bg-white lg:hidden" />
      )}
    </>
  );
}

function NavMobileToggle({onClick, isOpen}) {
  return (
    <button onClick={onClick} className={clsx(styles.navMobileToggleContainer)}>
      <div className={clsx(styles.iconListContainer)}>
        <div
          className={clsx(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath,
          )}
        />
        <div
          className={clsx(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath,
          )}
        />
        <div
          className={clsx(
            styles.iconListPath,
            isOpen && styles.animatingIconListPath,
          )}
        />
      </div>
    </button>
  );
}
