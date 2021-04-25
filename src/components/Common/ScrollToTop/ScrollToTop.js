/* eslint-disable jsx-a11y/no-static-element-interactions */
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';

function ScrollToTop() {
  const [show, setShow] = useState(false);

  const scroll = Scroll.animateScroll;

  const onSetShow = () => {
    if (!show && window.pageYOffset > 400) {
      setShow(true);
    } else if (show && window.pageYOffset < 400) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onSetShow);
    return () => document.removeEventListener('scroll', onSetShow);
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={show ? 'back-to-top show' : 'back-to-top'} onClick={scrollToTop}>
      <span>
        <ExpandLessIcon style={{ fontSize: '1.5rem', color:'#FF6F61',paddingTop:'0.3rem' }} />
      </span>
    </div>
  );
}

export default ScrollToTop;
