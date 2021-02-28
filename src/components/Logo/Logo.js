import React from 'react';
import { ReactComponent as LogoNormal } from '../../assets/logo/svg/Pizza-Time.svg';
import { ReactComponent as LogoGrey } from '../../assets/logo/svg/Pizza-Time-Grey.svg';

const Logo = ({ noColor = false, namaClass }) => {
  return (
    <>
      {noColor ? (
        <LogoGrey className={namaClass} />
      ) : (
        <LogoNormal className={namaClass} />
      )}
    </>
  );
};

export default Logo;
