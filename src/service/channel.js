
const channelInfo = async()=>{
    try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/channel`)
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.log('error fetching data'+ error)
        return {data:[]};
    }
};

export default channelInfo;