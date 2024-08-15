import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '../../../context/active-section-context';

const ProjectHeader = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 bg-white shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
        <div className="text-xl font-bold">Your Logo</div>
        <ul className="flex space-x-8 text-gray-500">
          <li>
            <Link href="#spotlight">
              <a className={activeSection === 'SpotLight' ? 'text-blue-500' : ''}>Spot Light</a>
            </Link>
          </li>
          <li>
            <Link href="#story">
              <a className={activeSection === 'Story' ? 'text-blue-500' : ''}>Story</a>
            </Link>
          </li>
          <li>
            <Link href="#craft">
              <a className={activeSection === 'Craft' ? 'text-blue-500' : ''}>Craft</a>
            </Link>
          </li>
          <li>
            <Link href="#tools">
              <a className={activeSection === 'Tools' ? 'text-blue-500' : ''}>Tools</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ProjectHeader;
