import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Awesome feature', 'Life time free service', 'Gorgeous look', 'Crazy deals', 'Fantastic deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Regular feature', 'Life time free service', 'Gorgeous look', 'Crazy deals', 'Fantastic deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 9.99, benefits: [
                'Premium feature', 'Life time free service', 'Gorgeous look', 'Crazy deals', 'Fantastic deals'
            ]
        },

    ]
    return (

        <div>
            <div className="bg-indigo-300 p-4 mt-8">
                <h2 className='text-6xl font-mono text-white'>Best Deals in town</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti eligendi laboriosam eum dolorum, cumque cupiditate tempore rerum soluta delectus.</p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    {
                        pricingOption.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Pricing;