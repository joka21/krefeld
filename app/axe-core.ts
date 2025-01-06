// app/axe-core.ts
'use client';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}