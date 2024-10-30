import React from 'react'

function VideosCard({ video,profilePic }) {


    return (
        <div className="max-w-sm bg-gray-950 rounded-xl" onClick={()=>console.log('clicked')}>

            <img
                src={video.items.snippet.thumbnails.high.url}
                alt={video.items.snippet.title}
                className="w-full h-48 rounded-t-2xl object-cover"
            />

            <div className="flex p-4">
                               
                <img
                    src={profilePic} 
                    alt={video.items.snippet.channelTitle}
                    className="w-10 h-10 rounded-full mr-3"
                /> 


                <div>

                    <h3 className="text-white font-semibold text-lg ">
                        {video.items.snippet.title}
                    </h3>


                    <p className="text-gray-400 text-sm mt-1">
                        {video.items.snippet.channelTitle}
                    </p>

                    <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                        <span>{video.items.statistics.viewCount} views</span>
                        <span>{new Date(video.items.snippet.publishedAt).toDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideosCard