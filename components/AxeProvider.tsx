'use client';

// app/providers.tsx
import Script from 'next/script';

export function Providers() {
  return process.env.NODE_ENV !== 'production' ? (
    <Script
      id="axe-core"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (async () => {
            const axe = await import('@axe-core/react');
            const React = await import('react');
            const ReactDOM = await import('react-dom');
            axe.default(React.default, ReactDOM.default, 1000);
          })();
        `
      }}
    />
  ) : null;
}