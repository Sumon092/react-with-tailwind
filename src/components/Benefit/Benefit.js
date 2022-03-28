import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    return (
        <div >

            <p className='flex items-center gap-5 mt-2'>
                <CheckCircleIcon className='w-5 h-5 text-green-600 mr-2'></CheckCircleIcon>{props.benefit}
            </p>
        </div>
    );
};

export default Benefit;