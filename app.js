const APIkey = "AIzaSyC9lUxJ6tC46is2Txg6hxX-spT2EKHXZjA"
const youtubeID = "UC4BRTi6PhJxJPG8bqWauCiA"

const subCount = document.querySelector(".sub-count");

const getYoutubeSubs = async () =>
{
    const getData = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`
    )

    const ytSubs = getData.data.items[0].statistics.subscriberCount;
    let formattedSub;
    if (ytSubs.length >=4 && ytSubs.length <=6)
    {
        formattedSub = Math.floor(ytSubs/1000);
        subCount.innerHTML = `${formattedSub}K`;
        return;
    }
    if (ytSubs.length >=7)
    {
        formattedSub = Math.floor(ytSubs/1000000);
        subCount.innerHTML = `${formattedSub}M`;
        return;
    }

    subCount.innerHTML = ytSubs;
};

getYoutubeSubs();