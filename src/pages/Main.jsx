import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

function Main() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <body style={{ minWidth: '950px' }}>
      {/* <Header /> */}
      {/* <Sidebar openModal={openModal} /> */}
      {/* <PostLists /> */}
      {/* <Modal closeModal={closeModal} isOpenModal={isOpenModal} /> */}
      <ScrollToTopButton onClick={scrollToTop}>TOP</ScrollToTopButton>
    </body>
  );
}

export default Main;

// 스타일
const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  left: 123px;
  padding: 0.7rem;
  background-color: #d6d6d6;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  font-weight: 600;
  font-size: 1.1rem;
`;
