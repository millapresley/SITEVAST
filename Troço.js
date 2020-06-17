var player = videojs('reallyCoolVideo');

var MAX = 3;
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
adTagXML: fightflexbrazz
});
}




function requestVASTXML1(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://vz-cdn2.adtng.com/a7/creatives/39/409/800907/883843/883843_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function requestVASTXML2(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://hw-cdn2.adtng.com/a7/creatives/39/617/800579/896572/896572_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function fightflexbrazz(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://dv.phncdn.com/videos/202006/17/324379051/720P_4000K_324379051.mp4?ttl=1592366464&ri=1024000&rs=4000&clientip=108.61.209.80&hash=c47db3ca6717d3670c0c64b8a1dbabae</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}




