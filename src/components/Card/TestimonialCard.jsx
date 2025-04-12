import React from 'react';

const TestimonialCard = ({
  name,
  location,
  rating,
  content,
  avatar,
  isActive,
}) => {
  return (
    <div
      className={`rounded-xl bg-white p-6 ${isActive ? 'border-primary-orange border-l-4 shadow-xl' : 'shadow-sm'} mx-auto h-full max-w-[370px] transition duration-300`}
    >
      <div className='mb-6 flex items-center gap-4'>
        <img src={avatar} alt={name} className='h-14 w-14 rounded-full' />
        <div>
          <h4 className='text-primary-black text-lg font-bold'>{name}</h4>
          <p className='text-light-gray text-sm'>{location}</p>
        </div>
      </div>

      <p className='text-light-gray mb-5 text-base'>{content}</p>

      <div className='flex items-center'>
        {[...Array(rating)].map((_, i) => (
          <img
            key={i}
            src='/assets/star.svg'
            alt='star'
            className='mr-1 h-2 w-2'
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
