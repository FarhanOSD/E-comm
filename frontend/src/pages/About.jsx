import React from 'react'
import Titel from '../components/Titel'
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';
function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Titel text1={'About'} text2={'Us'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-300">
          <p>
            MongoDB Atlas will automatically pause this cluster after 60 days of
            inactivity, at 11:40 AM EST on 2025/02/28
          </p>
          <p>
            ORGANIZATION Farhan's Org - 2024-11-28 PROJECT Recipe app Hi Farhan,
            Your M0 free tier cluster, recipe-app, has been idle since
            2024/12/27. MongoDB Atlas will automatically pause this cluster
            after 60 days of inactivity, at 11:40 AM EST on 2025/02/28. To
            prevent this cluster from being paused, initiate a connection to
            your cluster before 2025/02/28. View our documentation for
            instructions on how to connect to your cluster.
          </p>
          <b className="text-white ">Our Mission</b>
          <p>
            Hello Farhan, At FlexJobs, we don’t just focus on quantity—we pride
            ourselves on quality. Every job posting you see on our site has been
            hand-screened by our Job Research Team to ensure it’s 100%
            legitimate, scam-free, and worth your time.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Titel text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-100'>
            Farhan Ahmed Stories for Farhan Ahmed @ff3841362·Become a member
            Medium daily digest Today's highlights Manpreet SinghManpreet
            SinghinAI Advances Goodbye RAG? Gemini 2.0 Flash Have Just Killed
            It! Goodbye RAG? Gemini 2.0 Flash Have Just Killed It! Alright!!!
            Member-only content4 min readClaps2.2KResponses90 Balram
            ChavanBalram Chavan Angular 19: Transforming HTTP API Calls with
            Signals and Resources Angular 19: Transforming HTTP API Calls with
            Signals and Resources Modern Angular development continues to evolve
            with…
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-100'>
            Farhan Ahmed Stories for Farhan Ahmed @ff3841362·Become a member
            Medium daily digest Today's highlights Manpreet SinghManpreet
            SinghinAI Advances Goodbye RAG? Gemini 2.0 Flash Have Just Killed
            It! Goodbye RAG? Gemini 2.0 Flash Have Just Killed It! Alright!!!
            Member-only content4 min readClaps2.2KResponses90 Balram
            ChavanBalram Chavan Angular 19: Transforming HTTP API Calls with
            Signals and Resources Angular 19: Transforming HTTP API Calls with
            Signals and Resources Modern Angular development continues to evolve
            with…
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customar Service:</b>
          <p className='text-gray-100'>
            Farhan Ahmed Stories for Farhan Ahmed @ff3841362·Become a member
            Medium daily digest Today's highlights Manpreet SinghManpreet
            SinghinAI Advances Goodbye RAG? Gemini 2.0 Flash Have Just Killed
            It! Goodbye RAG? Gemini 2.0 Flash Have Just Killed It! Alright!!!
            Member-only content4 min readClaps2.2KResponses90 Balram
            ChavanBalram Chavan Angular 19: Transforming HTTP API Calls with
            Signals and Resources Angular 19: Transforming HTTP API Calls with
            Signals and Resources Modern Angular development continues to evolve
            with…
          </p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  );
}

export default About