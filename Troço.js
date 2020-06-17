var player = videojs('reallyCoolVideo');

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
adTagXML: fumaçinha5
});
}

if (rand == 6) {
  var vastPlugin = player.vastClient({
adTagXML: cueio6
});
}





function requestVASTXML1(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/webm" bitrate="324" scalable="true" maintainAspectRatio="true">http://s1.webmshare.com/93w8a.webm</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}

function requestVASTXML2(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/webm" bitrate="324" scalable="true" maintainAspectRatio="true">http://s1.webmshare.com/GxO8w.webm</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function requestVASTXML3(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://vz-cdn2.adtng.com/a7/creatives/39/409/800907/883843/883843_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}


function requestVASTXML4(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/booty-calls/14-asa/?atc=10002798_728552_25947_907785_NTK_800579&a2cid=eyJleHRfemlkIjoiIiwiY2xpZCI6IjgxNDY3NGZhOTg1NjI5ODA0MWJmMjkwZDhmYjkyYTAyIiwiZXh0X2FpZCI6IiIsImNyYyI6IjUiLCJzaWQiOiIxMDAwMjc5OCIsIm5pZHMiOiIzNTMwOSIsImV4dF9paWQiOiIiLCJjcmlkIjoiOTA3Nzg1Iiwic3YiOiIyOSIsInBpZCI6IjYxNyIsImV4dF9jaWQiOiIiLCJjcCI6IjEwMCIsInRzbmFtZSI6IkFGRiIsInJlZl9kbW4iOiJ3d3cuYWR1bHRmb3JjZS5jb20iLCJjbiI6IjMxNVgzMDBfTlRLX1BDX1JPTiIsImNpZCI6IjI1OTQ3IiwibmlkIjoiMzUzMDkiLCJjcnAiOiIxMC4zNCIsInRpZCI6IjIiLCJpdCI6IjE1XC9KdW5cLzIwMjA6MjA6MzQ6MTYgKzAwMDAiLCJjYyI6IjEiLCJzbmNpZCI6IjM3NzI0IiwiY2x0IjoiMTVcL0p1blwvMjAyMDoyMDozNjowNSArMDAwMCIsImV4dF91aWQiOiIiLCJleHRfcHViIjoiIiwic25jY2lkIjoiNzI4NTUyIiwiaWlkIjoiMzQyNWIzMTZlZWFhMjliYmQzYWY0OTg0ODc0MTI1MzAifQ==&ata=milla_presley</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://hw-cdn2.adtng.com/a7/creatives/39/617/800579/896572/896572_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}

function fumaçinha5(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://hw-cdn2.adtng.com/a7/creatives/39/617/800579/896572/896572_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}

function cueio6(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description> </Description><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://network.nutaku.net/images/landing/tgp/22/page.html?atc=10002799_1207234_25954_933398_NTK_800654&a2cid=eyJleHRfemlkIjoiIiwiY2xpZCI6IjJjZjFiMTljNmU0ZjExYTc3YjA5YWExYzY4MTNjMzM5IiwiZXh0X2FpZCI6IiIsImNyYyI6IjEyIiwic2lkIjoiMTAwMDI3OTkiLCJuaWRzIjoiMzUzMTAiLCJleHRfaWlkIjoiIiwiY3JpZCI6IjkzMzM5OCIsInN2IjoiNDg4MyIsInBpZCI6IjU3MCIsImV4dF9jaWQiOiIiLCJjcCI6IjEwMCIsInRzbmFtZSI6IkFGRiIsInJlZl9kbW4iOiJ3d3cuYWR1bHRmb3JjZS5jb20iLCJjbiI6IjMwMFgyNTBfUENfTlRLX1JPTiIsImNpZCI6IjI1OTU0IiwibmlkIjoiMzUzMTAiLCJjcnAiOiIxOC43OCIsInRpZCI6IjIiLCJpdCI6IjE1XC9KdW5cLzIwMjA6MjA6Mzk6NDUgKzAwMDAiLCJjYyI6IjEiLCJzbmNpZCI6IjM3NzI1IiwiY2x0IjoiMTVcL0p1blwvMjAyMDoyMDo0MzoxMiArMDAwMCIsImV4dF91aWQiOiIiLCJleHRfcHViIjoiIiwic25jY2lkIjoiMTIwNzIzNCIsImlpZCI6ImNmNjcyODJjYjUwMDRjYjE2OTU0MDQxYTU5MTJhNTNhIn0=&ata=milla_presley</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="324" scalable="true" maintainAspectRatio="true">https://vz-cdn2.adtng.com/a7/creatives/39/527/800658/876000/876000_video_with_sound.mp4</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg"> </StaticResource><CompanionClickThrough> https://www.nutaku.net/signup/landing/project-qt/1/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxLCJzIjoxLCJlIjo5MjM3LCJwIjoyfQ== </CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}







var player = videojs('reallyCoolVideo');

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
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/webm" bitrate="324" scalable="true" maintainAspectRatio="true">http://s1.webmshare.com/93w8a.webm</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
    }, 0);
}

function requestVASTXML2(callback) {
 setTimeout(function(){
        callback(null, '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0"><Ad id="0"><InLine><AdSystem version="0">Test</AdSystem><Description /><Creatives><Creative sequence="1"><Linear skipoffset="00:00:05"><Duration>00:00:30</Duration><VideoClicks><ClickThrough id="GDFP">https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="progressive" width="640" height="360" type="video/webm" bitrate="324" scalable="true" maintainAspectRatio="true">http://s1.webmshare.com/GxO8w.webm</MediaFile></MediaFiles></Linear></Creative><Creative id="Companion"><CompanionAds><Companion width="728" height="90"><StaticResource creativeType="image/jpeg" /><CompanionClickThrough>https://landing.brazzersnetwork.com/?ats=eyJhIjozMDQ3MzIsImMiOjU4ODI2NDg3LCJuIjoxNCwicyI6OTAsImUiOjg4MDMsInAiOjExfQ==</CompanionClickThrough></Companion></CompanionAds></Creative></Creatives></InLine></Ad></VAST>'); 
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





