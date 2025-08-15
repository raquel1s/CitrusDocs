'use client';

import { useRef, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TocSidebar from './TocSidebar';

export default function DocLayout({ children }) {
  const contentRef = useRef(null);
  const [titles, setTitles] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');

  useEffect(() => {
    const h2Elements = contentRef.current?.querySelectorAll('h2') || [];

    const list = Array.from(h2Elements).map(h2 => {
      const id = h2.id || h2.innerText.toLowerCase().replace(/\s+/g, '-');
      h2.id = id;
      return { text: h2.innerText, id };
    });

    setTitles(list);

    const images = contentRef.current?.querySelectorAll('img') || [];
    images.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        setLightboxSrc(img.src);
        setLightboxOpen(true);
      });
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('click', () => {});
      });
    };
  }, []);

  function handleCloseMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--primary-color)] text-white sm:hidden"
        aria-label="Abrir menu"
        type="button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="grid grid-cols-4 gap-14 mt-10 text-[color:var(--title)] px-8 sm:px-10">

        <aside className="hidden sm:block col-span-1">
          <Sidebar onLinkClick={handleCloseMenu} />
        </aside>

        <main
          ref={contentRef}
          className="col-span-4 sm:col-span-2 main-content min-h-screen max-w-full"
        >
          {children}
        </main>

        <aside className="hidden sm:block col-span-1">
          <TocSidebar titles={titles} />
        </aside>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
    
          <aside className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 p-6 overflow-y-auto sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mb-6 text-gray-700 hover:text-[var(--primary-color)] focus:outline-none"
              aria-label="Fechar menu"
              type="button"
            >
              Fechar ×
            </button>
            <Sidebar onLinkClick={handleCloseMenu} />
          </aside>
        </>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxSrc}
            alt="Imagem expandida"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
