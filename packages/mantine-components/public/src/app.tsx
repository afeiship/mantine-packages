import React from 'react';
import { MenuExt } from '@/main';

export default () => {
  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <MenuExt
        onItemClick={(e) => console.log('Command clicked', e)}
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { type: 'divider' },
          { label: 'Login', href: '/login' },
          { label: 'Register', href: '/register' }
        ]}>
        <button className="bg-slate-100 hover:bg-slate-200">ShowMenu</button>
      </MenuExt>
    </div>
  );
};
