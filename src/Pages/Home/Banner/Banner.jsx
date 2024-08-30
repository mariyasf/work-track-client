import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse gap-5  justify-between
        '>
            <div className='flex-1'>
                <img
                    className='w-full'
                    src="/Images/banner.webp" alt="" />
            </div>

            <div className='flex-1 flex flex-col pt-5 justify-center gap-5'>
                <h2 className='text-[#066782] text-2xl md:text-3xl lg:text-5xl font-Poppins font-bold'>
                    Welcome to Psyworker
                </h2>
                <h4 className='text-[#447684] italic text-lg md:text-2xl'>
                    Where Dreams Meet Reality
                </h4>
                <p className='text-lg'>
                    Discover Naruto-inspired outfits and character dolls, crafted with passion by Psyworker—where the world of Naruto comes to life through stunning designs and collectibles.
                </p>
            </div>
        </div>
    );
};

export default Banner;