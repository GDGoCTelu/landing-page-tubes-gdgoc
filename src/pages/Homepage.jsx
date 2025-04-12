import * as React from 'react';
import Navbar from '../components/Section/Navbar';
import FeatureCard from '../components/Card/FeatureCard';
import TodoList from '../constants/ToDoList';
import DealsList from '../constants/DealsList';
import DealCard from '../components/Card/DealCard';

function Homepage() {
  return (
    <>
      <section
        id='home'
        className='bg-background-white text-primary-black h-[999px] w-full'
      >
        <Navbar />
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-[521px] mt-auto ml-[375px]'>
            <h1 className='text-h1 font-display text-primary-black leading-[70px] font-bold'>
              Get started your exciting{' '}
              <span className='text-primary-orange'>journey</span> with us.
            </h1>
            <p className='text-p1 text-light-gray font-body mt-[37px] w-[497px] leading-[40px]'>
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.
            </p>
            <button className='text-p2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-background-white mt-[59px] h-[60px] w-[178px] rounded-[5px] border-1 font-medium transition-all duration-300 hover:border-none'>
              Discover Now
            </button>
          </div>
          <div className='col-span-[785px]'>
            <img src='/assets/jumbotron.svg' alt='Jumbotron' />
          </div>
        </div>
      </section>
      <section className='bg-background-ash text-primary-black font-body h-[724px] w-full'>
        <div className='grid grid-cols-3 gap-7 pt-[120px]'>
          <div className='col-start-2 flex flex-col gap-3'>
            <h2 className='font-display text-h2 text-center font-bold'>
              Things you need <span className='text-primary-orange'>to do</span>
            </h2>
            <p className='text-p2 text-light-gray mx-auto w-[482px] text-center leading-[32px]'>
              We ensure that you'll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </p>
          </div>
          <img className='my-auto' src='/assets/plane.svg' alt='Plane' />
        </div>
        <div className='mx-auto grid max-w-[1170px] grid-cols-3 gap-[30px] pt-8'>
          {TodoList.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </section>
      <section className='bg-background-white text-primary-black font-body h-[960px] w-full'>
        <h2 className='font-display text-h2 pt-[120px] text-center font-bold'>
          Exclusive{' '}
          <span className='text-primary-orange'>deals & discounts</span>
        </h2>
        <p className='text-p2 text-light-gray mx-auto mt-4 w-[433px] text-center leading-[32px]'>
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
        <div className='mx-auto mt-8 grid w-[1170px] grid-cols-4'>
          {DealsList.map((item, index) => (
            <DealCard key={index} {...item} />
          ))}
        </div>
        <div className='mt-[71px] flex flex-row items-center justify-center gap-3'>
          <button className='bg-background-white h-[40px] w-[40px] rounded-full border-[1px] border-[#999999]/50'>
            <img
              className='mx-auto my-auto'
              src='/assets/arrow-gray.svg'
              alt='Arrow Left'
            />
          </button>
          <button className='bg-primary-orange h-[40px] w-[40px] rounded-full'>
            <img
              className='mx-auto my-auto'
              src='/assets/arrow-white.svg'
              alt='Arrow Right'
            />
          </button>
        </div>
      </section>

      {/* Destinations Section */}
      <section className='bg-background-ash text-primary-black font-body w-full py-[120px]'>
        <div className='mx-auto max-w-[1170px]'>
          <h2 className='font-display text-h2 text-center font-bold'>
            Explore top{' '}
            <span className='text-primary-orange'>destinations</span>
          </h2>
          <p className='text-p2 text-light-gray mx-auto mt-4 w-[433px] text-center leading-[32px]'>
            Explore your suitable and dream places around the world. Here are
            the best destinations for you.
          </p>

          <div className='mt-16 flex justify-between'>
            <div className='destination-card bg-background-white w-[270px] rounded-lg p-4 shadow-md'>
              <img
                src='/assets/destination1.svg'
                alt='Paradise Beach'
                className='h-[270px] w-full rounded-lg object-cover'
              />
              <div className='mt-4 flex items-center justify-between'>
                <h3 className='text-title font-medium'>Paradise Beach</h3>
                <p className='text-primary-orange font-semibold'>$550</p>
              </div>
              <div className='mt-2 flex items-center'>
                <img
                  src='/assets/location-icon.svg'
                  alt='Location'
                  className='mr-2 h-4'
                />
                <p className='text-light-gray'>Bali, Indonesia</p>
                <div className='ml-auto flex items-center'>
                  <p className='text-content mr-1'>4.8</p>
                  <img src='/assets/star.svg' alt='Rating' className='h-4' />
                </div>
              </div>
            </div>

            <div className='destination-card bg-background-white w-[270px] rounded-lg p-4 shadow-md'>
              <img
                src='/assets/destination2.svg'
                alt='Ocean View'
                className='h-[270px] w-full rounded-lg object-cover'
              />
              <div className='mt-4 flex items-center justify-between'>
                <h3 className='text-title font-medium'>Ocean View</h3>
                <p className='text-primary-orange font-semibold'>$450</p>
              </div>
              <div className='mt-2 flex items-center'>
                <img
                  src='/assets/location-icon.svg'
                  alt='Location'
                  className='mr-2 h-4'
                />
                <p className='text-light-gray'>Phuket, Thailand</p>
                <div className='ml-auto flex items-center'>
                  <p className='text-content mr-1'>4.5</p>
                  <img src='/assets/star.svg' alt='Rating' className='h-4' />
                </div>
              </div>
            </div>

            <div className='destination-card bg-background-white w-[270px] rounded-lg p-4 shadow-md'>
              <img
                src='/assets/destination3.svg'
                alt='Mountain Retreat'
                className='h-[270px] w-full rounded-lg object-cover'
              />
              <div className='mt-4 flex items-center justify-between'>
                <h3 className='text-title font-medium'>Mountain Retreat</h3>
                <p className='text-primary-orange font-semibold'>$620</p>
              </div>
              <div className='mt-2 flex items-center'>
                <img
                  src='/assets/location-icon.svg'
                  alt='Location'
                  className='mr-2 h-4'
                />
                <p className='text-light-gray'>Swiss Alps</p>
                <div className='ml-auto flex items-center'>
                  <p className='text-content mr-1'>4.9</p>
                  <img src='/assets/star.svg' alt='Rating' className='h-4' />
                </div>
              </div>
            </div>

            <div className='destination-card bg-background-white w-[270px] rounded-lg p-4 shadow-md'>
              <img
                src='/assets/destination4.svg'
                alt='City Skyline'
                className='h-[270px] w-full rounded-lg object-cover'
              />
              <div className='mt-4 flex items-center justify-between'>
                <h3 className='text-title font-medium'>City Skyline</h3>
                <p className='text-primary-orange font-semibold'>$680</p>
              </div>
              <div className='mt-2 flex items-center'>
                <img
                  src='/assets/location-icon.svg'
                  alt='Location'
                  className='mr-2 h-4'
                />
                <p className='text-light-gray'>New York, USA</p>
                <div className='ml-auto flex items-center'>
                  <p className='text-content mr-1'>4.7</p>
                  <img src='/assets/star.svg' alt='Rating' className='h-4' />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 flex justify-center'>
            <button className='bg-primary-orange text-background-white text-p2 hover:bg-opacity-90 rounded-md px-6 py-3 font-medium transition-all'>
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-background-white text-primary-black font-body w-full py-[120px]'>
        <div className='mx-auto max-w-[1170px]'>
          <h2 className='font-display text-h2 text-center font-bold'>
            What people say{' '}
            <span className='text-primary-orange'>about us</span>
          </h2>
          <p className='text-p2 text-light-gray mx-auto mt-4 w-[433px] text-center leading-[32px]'>
            Our clients send us bunch of smiles with our services and we love
            them.
          </p>

          <div className='mt-16 flex justify-between'>
            <div className='testimonial-card bg-background-white w-[370px] rounded-lg border border-gray-100 p-6 shadow-md'>
              <div className='mb-4 flex items-center'>
                <img
                  src='/assets/avatar1.svg'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full'
                />
                <div className='ml-4'>
                  <h3 className='text-title font-medium'>Michael Johnson</h3>
                  <div className='mt-1 flex'>
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img src='/assets/star.svg' alt='Star' className='h-4' />
                  </div>
                </div>
              </div>
              <p className='text-light-gray'>
                "On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no."
              </p>
            </div>

            <div className='testimonial-card bg-background-white w-[370px] rounded-lg border border-gray-100 p-6 shadow-md'>
              <div className='mb-4 flex items-center'>
                <img
                  src='/assets/avatar2.svg'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full'
                />
                <div className='ml-4'>
                  <h3 className='text-title font-medium'>Sarah Williams</h3>
                  <div className='mt-1 flex'>
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img src='/assets/star.svg' alt='Star' className='h-4' />
                  </div>
                </div>
              </div>
              <p className='text-light-gray'>
                "For who thoroughly her boy estimating conviction. Removed
                demands expense account in outward tedious do."
              </p>
            </div>

            <div className='testimonial-card bg-background-white w-[370px] rounded-lg border border-gray-100 p-6 shadow-md'>
              <div className='mb-4 flex items-center'>
                <img
                  src='/assets/avatar3.svg'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full'
                />
                <div className='ml-4'>
                  <h3 className='text-title font-medium'>Thomas Clark</h3>
                  <div className='mt-1 flex'>
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img
                      src='/assets/star.svg'
                      alt='Star'
                      className='mr-1 h-4'
                    />
                    <img src='/assets/star.svg' alt='Star' className='h-4' />
                  </div>
                </div>
              </div>
              <p className='text-light-gray'>
                "Particular unaffected projection sentiments no my. Music marry
                as at cause party worth weeks. Saw how marianne graceful
                dissuade."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='w-full bg-[#F7F8FC] py-[120px]'>
        <div className='bg-primary-orange mx-auto max-w-[1170px] rounded-xl p-12 text-center'>
          <h2 className='font-display text-h2 text-background-white mx-auto max-w-[650px] font-bold'>
            Subscribe and get exclusive deals & offers
          </h2>
          <div className='mt-10 flex justify-center'>
            <div className='relative w-[500px]'>
              <input
                type='email'
                placeholder='Enter your email'
                className='text-content w-full rounded-lg px-6 py-4'
              />
              <button className='bg-primary-orange text-background-white absolute top-1/2 right-2 -translate-y-1/2 transform rounded-lg px-5 py-2 font-medium'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-background-white w-full py-16'>
        <div className='mx-auto grid max-w-[1170px] grid-cols-4 gap-8'>
          <div>
            <div className='flex flex-row gap-1'>
              <h3 className='text-h3 text-primary-black font-bold'>Trabook</h3>
              <img src='/assets/logo.svg' alt='logo' />
            </div>
            <p className='text-light-gray mt-4'>
              Book your trip in minute, get full control for much longer.
            </p>
            <div className='mt-6 flex gap-4'>
              <a href='#' className='bg-background-ash rounded-full p-2'>
                <img
                  src='/assets/facebook.svg'
                  alt='Facebook'
                  className='h-5 w-5'
                />
              </a>
              <a href='#' className='bg-background-ash rounded-full p-2'>
                <img
                  src='/assets/instagram.svg'
                  alt='Instagram'
                  className='h-5 w-5'
                />
              </a>
              <a href='#' className='bg-background-ash rounded-full p-2'>
                <img
                  src='/assets/twitter.svg'
                  alt='Twitter'
                  className='h-5 w-5'
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-primary-black mb-6 font-bold'>Company</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-primary-black mb-6 font-bold'>Contact</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Help/FAQ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-primary-black mb-6 font-bold'>More</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Airline Fees
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Airline
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light-gray hover:text-primary-orange'
                >
                  Low Fare Tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='text-light-gray mx-auto mt-10 max-w-[1170px] border-t border-gray-200 pt-8 text-center'>
          <p>© 2023 Trabook. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
