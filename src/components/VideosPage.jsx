import React, { useState, useEffect } from 'react'
import videosInfo from '../service/videos';
import VideosCard from './VideosCard';


export default function HomePage({profilePic}) {

    const [videos, setVideos] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);

 

    useEffect(() => {
        const loadData = async () => {
            const response = await videosInfo(page);
            setVideos(response.data);
            setTotalPages(response.totalPages);
            console.log(totalPages);
        }
        loadData();
    }, [page]);

  
    const  handleNextPage=()=>{
        if (page < totalPages) setPage(page + 1 );
        
    }

    const handlePreviousPage = ()=> {
        if (page > 1) setPage(page - 1);

    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                {
                    videos.map((video, index) => (
                        <VideosCard key={index} video={video} profilePic={profilePic} />
                    ))
                }
                <div className='flex justify-center gap-6 mt-20'>
                    <button
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                        className="px-4 py-2 text-black bg-white hover:bg-gray-400 rounded disabled:opacity-50"
                    >
                        Previouss
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="px-4 py-2 text-black bg-white hover:bg-gray-400 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
