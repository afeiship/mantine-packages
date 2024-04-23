import React from 'react';
import { Menu } from '@/main';

export default () => {
  return (
    <div className="relative border w-4/5 mx-auto mt-10">
      <Menu
        onItemClick={(e) => console.log('Command clicked', e)}
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { type: 'divider' },
          { label: 'Login', href: '/login' },
          { label: 'Register', href: '/register' }
        ]}>
        <button>ShowMenu</button>
      </Menu>
    </div>
  );
};
