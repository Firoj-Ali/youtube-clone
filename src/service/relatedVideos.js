const relatedVideos = async(id)=>{
try {
    const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/related/${id}`);
    const result = await response.json();
    return result;
} catch (error) {
    console.log('relatedVideos error' + error)
    return {data:[]}
}
}

export default relatedVideos