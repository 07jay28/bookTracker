import React from 'react';
import { Menu, Button, Navbar } from 'react-daisyui';

const NavbarComponent = () => {
  return (
    <Navbar className="rounded-box bg-primary text-primary-content shadow-lg flex flex-row items-center justify-between">
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          ReadTrack
        </Button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4">
          <li><a>Link</a></li>
          <li>
            <details className="dropdown">
              <summary>Parent</summary>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;