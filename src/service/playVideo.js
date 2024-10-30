
const PlayVideo = async(id)=>{
    try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/videos/${id}`);
        const result = await response.json()
        return result;
    } catch (error) {
        console.log('playvideo error' + error)
        return {data:[]}
    }
}

export default PlayVideo;