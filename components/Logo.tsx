import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LogoImage = styled(Image)`
  cursor: pointer;
`;

const Logo = () => (
  <Link href="/" target="_blank">
    <LogoImage
      src="/images/logo.svg"
      width={169}
      height={50}
    />
  </Link>
);

export default Logo;
