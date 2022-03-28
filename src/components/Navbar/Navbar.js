import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = (props) => {
    const [open, setOpen] = useState(false);

    const routes = [{ name: 'Home', id: 0, link: '/home' },
    { name: 'Shop', id: 1, link: '/product' },
    { name: 'Deals', id: 2, link: '/Deals' },
    { name: 'About', id: 3, link: '/About' },
    { name: 'Contact', id: 4, link: '/contact' }]


    return (
        <nav className='bg-indigo-400'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {
                    open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
                }
            </div>
            <ul className={`md:flex justify-center md:static w-full absolute duration-500 ease-in bg-indigo-400 ${open ? 'top-6' : 'top-[-134px]'}`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}>
                        </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;