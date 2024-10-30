

const videosInfo = async(page = 1)=>{

    try {
     const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}`);
     const result = await response.json();
     return result.data
    } catch (error) {
        console.log('error fetching data'+ error)
        return {data:[], totalPages: 0}
    }

};

export default videosInfo ;