import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media, shadow } from '../../styles';
import useHeader from '../../libs/hooks/common/useHeader';
import MenuButton from './MenuButton';
import MenuList from './MenuList';

interface Props {}

const Header: React.FC<Props> = () => {
  const { ref, menu, toggleMenu, onOutsideClick } = useHeader();

  return (
    <Container>
      <Content>
        <Link href="/">
          <Logo>Dorm Info</Logo>
        </Link>

        <Spacer />

        <div ref={ref}>
          <MenuButton onClick={toggleMenu} />
          <MenuList onClose={onOutsideClick} visible={menu} />
        </div>
      </Content>
    </Container>
  );
};

// Styles
const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #313131;
  ${shadow(1)}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1200px;
  height: 56px;
  position: relative;

  ${media.large} {
    width: 992px;
  }

  ${media.medium} {
    width: 100%;
  }
`;

const Logo = styled.a`
  font-size: 1.4rem;
  font-family: 'Rajdhani';
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    text-shadow: 0.5px 0.5px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default Header;
