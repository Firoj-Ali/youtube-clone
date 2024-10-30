import React ,{useState,useEffect} from 'react'
import bannerImage from '../assets/car.jpg'


export default function ChannelPage({channel}) {
    
    const profilePic = channel?.info?.snippet?.thumbnails?.high?.url;

    return (
        <>
            <div >
          {/* Banner */}
          <div
            className="w-full h-72 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          >
            {/* Profile Picture */}
            {profilePic && (
              <img
                src={channel.info.snippet.thumbnails.high.url}
                alt={channel.info.snippet.title}
                className="w-40 h-40 rounded-full border-4 border-stone-950 absolute left-10 bottom-[-40px]"
              />
            )}
          </div>

          {/* Channel Info */}
          <div className="px-10 mt-20 flex items-center">
            <div>
              <h1 className="text-4xl mb-3 font-bold">{channel?.info?.snippet?.title}</h1>
              <div className="text-base  text-gray-400">
                <span>{channel?.info?.snippet?.customUrl} • </span>
                <span>{channel?.info?.statistics?.subscriberCount} subscribers • </span>
                <span>{channel?.info?.statistics?.videoCount} videos</span>
              </div>

            </div>
            {/* Buttons */}
            <div className="ml-auto flex gap-3">
              <button className="bg-white hover:bg-gray-400 text-black px-5 py-2 rounded-lg">Subscribe</button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg">Join</button>
            </div>
          </div>
        </div>
        </>
    )
}
