var player = videojs('uniqueID');

var MAX = 6;
var rand = Math.floor((Math.random() * MAX) + 1);
if (rand == 1) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML1
});
}




if (rand == 2) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML2
});
}

if (rand == 3) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML3
});
}

if (rand == 4) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML4
});
}

if (rand == 5) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML5
});
}

if (rand == 6) {
  var vastPlugin = player.vastClient({
adTagXML: requestVASTXML6
});
}





function requestVASTXML1(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://cdn-videos.kum.com/media/7/f/e/a/4/7fea42764c9a9fb1a9ec49b8a3915dc95a86e21c.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}

function requestVASTXML2(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://cdn-videos.kum.com/media/1/7/c/4/8/17c48eead9be74e02ef8f6d0abd275ccb97430f2.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function requestVASTXML3(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://vz-cdn2.adtng.com/a7/creatives/39/409/800907/883843/883843_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function requestVASTXML4(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://bit.ly/3df4MmO</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://hw-cdn2.adtng.com/a7/creatives/39/617/800579/896572/896572_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}






function requestVASTXML5(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://hw-cdn2.adtng.com/a7/creatives/39/409/800907/882059/882059_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}








function requestVASTXML6(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://vz-cdn2.adtng.com/a7/creatives/39/527/800658/876000/876000_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


console.log(rand);





