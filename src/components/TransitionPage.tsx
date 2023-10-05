import React, { useEffect, useState } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap-trial';

const TransitionPage = ({ children }: any) => {
  const {pathname} = useLocation();

  return (
    <SwitchTransition>
      <Transition
        key={pathname}
        timeout={400}
        onEnter={(node: any) => {
          gsap.set(node, { autoAlpha: 0, scale: 0.9, xPercent: 100 });
          gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.6 })
            .to(node, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.9, duration: 0.2 })
            .to(node, { xPercent: -100, autoAlpha: 0, duration: 0.6 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionPage;
