import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <div>
             <Heading
                          title='Veluvana Bali - Owl Bamboo House'
                          subtitle='Sidemen, Indonesia'
                         
                        
                        />
            <div className='w-full mt-6 md:h-[60vh]overflow-hidden rounded-xl'>
                <img className='object-cover ' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            </div>
                        
        </div>
    );
};

export default Header;