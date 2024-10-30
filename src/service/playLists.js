
const playLists = async () => {
    try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/youtube/playlists`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('playList error' + error)
        return { data: [] }
    }
}

export default playLists;