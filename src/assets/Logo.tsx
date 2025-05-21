import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-center">
        <div className="text-2xl md:text-3xl font-bold relative text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{
          textShadow: '0 0 10px rgba(245,158,11,0.3), 0 2px 3px rgba(0,0,0,0.4)'
        }}>
          <span className="italic">Ƨ</span>ika<span className="text-amber-300">•i</span>De
        </div>
      </div>
    </Link>
  );
};

export default Logo;