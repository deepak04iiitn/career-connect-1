import { Blockquote, Timeline } from 'flowbite-react';
import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { IoIosSearch, IoIosCheckmarkCircle, IoIosTrendingUp } from "react-icons/io";
import JobTable from '../components/JobTable';

export default function Home() {
  return (

    <div className="p-4 md:p-8 lg:p-12 bg-gray-50">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 ml-10">

        <img
          src="/assets/gif2.gif"
          className="h-52 w-52"
          alt="CareerConnect Welcome"
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <span className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 block">

            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #00bcd4, #2196f3, #9c27b0)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: 'inherit',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              }}
              startDelay={100}
              cursorColor="black"
              text="Welcome to CareerConnect!"
              typeSpeed={100}
            />

          </span>

          <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
            Explore Opportunities that Align with Your Passion and Skillset!
          </span>

        </div>

      </div>

      <div className="flex justify-center mt-10">

        <div className="relative w-4/5 max-w-lg">

          <input
            type="text"
            placeholder="🔍 Job title | 📍 City, State"
            className="w-full rounded-full px-4 py-2 pr-40 border focus:outline-none"
          />

          <button
            className="absolute right-1 top-1 bottom-1 bg-teal-600 text-white px-6 py-2 rounded-full h-auto flex items-center justify-center hover:bg-teal-700"
          >
            Find Jobs
          </button>

        </div>

      </div>

      {/* Section with Image and Paragraph */}
      <div className="mt-20 flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-12">

        <div className="md:w-1/2 p-4 bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">

          <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fadeInSlideUp">What CareerConnect Offers?</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fadeInSlideUp">
            <Blockquote>
                <svg
                  className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
              <span className='text-gray-600'>"CareerConnect is an innovative platform designed to help individuals explore career opportunities that match their skills, interests, and goals. Whether you're looking for your first job or making a career switch, CareerConnect offers a seamless experience in finding, applying, and securing the right opportunity for you. With advanced job search features, curated job recommendations, and personalized guidance, CareerConnect simplifies the job-hunting process, making it more accessible and effective for everyone."</span>
            </Blockquote>
          </p>

          <div className="mt-8 bg-white shadow-lg rounded-lg p-8 border-2 border-gray-200 w-full hover:shadow-2xl transition-shadow duration-300 animate-slideIn">

            <Timeline horizontal>

              <Timeline.Item>

                <Timeline.Point icon={IoIosSearch} className="text-teal-600" />

                <Timeline.Content>
                  <Timeline.Time className="animate-fadeIn">February 2022</Timeline.Time>
                  <Timeline.Title className="text-lg font-semibold text-teal-600 animate-slideInUp">
                    Search for the job
                  </Timeline.Title>
                </Timeline.Content>

              </Timeline.Item>

              <Timeline.Item>

                <Timeline.Point icon={IoIosTrendingUp} className="text-blue-600" />

                <Timeline.Content>
                  <Timeline.Time className="animate-fadeIn">March 2022</Timeline.Time>
                  <Timeline.Title className="text-lg font-semibold text-blue-600 animate-slideInUp">
                    Find your perfect match
                  </Timeline.Title>
                </Timeline.Content>

              </Timeline.Item>

              <Timeline.Item>

                <Timeline.Point icon={IoIosCheckmarkCircle} className="text-purple-600" />
                
                <Timeline.Content>
                  <Timeline.Time className="animate-fadeIn">April 2022</Timeline.Time>
                  <Timeline.Title className="text-lg font-semibold text-purple-600 animate-slideInUp">
                    Apply Now
                  </Timeline.Title>
                </Timeline.Content>

              </Timeline.Item>

            </Timeline>

          </div>

        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/assets/CC1.png" className="object-contain h-full w-full md:h-auto md:w-auto" alt="CareerConnect Example" />
        </div>

      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-fadeInSlideUp {
          animation: fadeInSlideUp 1s ease-in-out;
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-in-out;
        }
      `}</style>

      <JobTable />
      
    </div>
  );
}
