import React from 'react';

import Image from 'next/image';

import homePageIdeaBg from '../../../public/background/home-page-idea.svg';

const IdeaExecutionSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right w-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${
            homePageIdeaBg.src
          })`,
        }}
      />
      <div className="container relative mx-auto flex flex-col md:flex-row items-center min-h-[75vh]">
        <div className="md:w-1/2 mb-10 md:mb-0 px-8">
          <Image unoptimized
            src="/homepage/idea-execution.svg"
            alt="Idea Execution Illustration"
            className="w-[80vw] h-auto"
            width={600}
            height={400}
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            YOUR <span className="text-orange-light">IDEA</span>, OUR EXECUTION
          </h2>
          <p className="mb-6 text-charcoal">
            Lorem ipsum dolor sit amet consectetur. Senectus amet sed gravida
            mauris ut sed blandit massa.
            <br />
            <br />
            Condimentum vel eget arcu euismod tempus sagittis sed. Senectus amet
            sed gravids ut sed blandit massa. Condimentum vel eget arcu euismod
            tempus sagittis sed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdeaExecutionSection;
