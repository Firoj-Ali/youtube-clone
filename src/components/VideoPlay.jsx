import React, { useState,useEffect } from 'react'
import PlayVideo from '../service/PlayVideo';
import comments from '../service/comments'
import relatedVideos from '../service/relatedVideos'

export default function VideoPlay() {
    
    const [video,setVideo] = useState([]);
    const [related,setRelated] = useState([]);
    const [allComments,setAllComments] = useState([]);

    useEffect(()=>{
        const loadVideo = async()=>{
            const response = await PlayVideo();
            setVideo(response);
        }
        loadVideo();
    });

    useEffect(()=>{
        const loadRelatedVideos = async()=>{
            const response = await relatedVideos();
            setRelated(response);

        }
        loadRelatedVideos();
    })

    useEffect(()=>{
        const loadComments = async()=>{
            const response = await comments();
            setAllComments(response);
        }
        loadComments();
    })


    return (
        <>
            
        </>
    )
}
