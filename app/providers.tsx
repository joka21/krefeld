'use client';

import { useEffect } from 'react';

export function Providers() {
  useEffect(() => {
    const initAxe = async () => {
      if (process.env.NODE_ENV !== 'production') {
        const axe = (await import('@axe-core/react')).default;
        const ReactDOM = (await import('react-dom')).default;
        const React = (await import('react')).default;
        axe(React, ReactDOM, 1000);
      }
    };
    initAxe();
  }, []);

  return null;
}