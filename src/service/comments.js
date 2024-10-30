
const comments =async(id)=>{
try {
    const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/comments/${id}`);
    const result = await response.json();
    return result;
} catch (error) {
    console.log('comments error' + error)
    return {data:[]}
}
}

export default comments;