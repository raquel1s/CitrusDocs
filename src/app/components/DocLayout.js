'use client';

import { useRef, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TocSidebar from './TocSidebar';

export default function DocLayout({ children }) {
    const contentRef = useRef(null);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const h2Elements = contentRef.current?.querySelectorAll('h2') || [];

        const list = Array.from(h2Elements).map(h2 => {
            const id = h2.id || h2.innerText.toLowerCase().replace(/\s+/g, '-');
            h2.id = id;
            return { text: h2.innerText, id };
        });

        setTitles(list);
    }, []);

    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <main ref={contentRef}>
                {children}
            </main>
            <aside>
                <TocSidebar titles={titles} />
            </aside>
        </div>
    )
}