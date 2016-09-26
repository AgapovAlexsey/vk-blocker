var IsLocked=false;

chrome.storage.sync.get('IsLocked', function (obj) {
	IsLocked=obj.IsLocked;	
});


function hidefeed()
{
	if(IsLocked!=true)
	return;

	var child = document.getElementById("feed_wall");
	if(child==null)
		return;
	var feed = document.getElementById("main_feed");
	if(feed!=null)
	{

			feed.innerHTML="<div style=\"width: 100%;    text-align: center;   background: white;    min-height: 150px;    margin-top: 15px; \"><img src='https://otvet.imgsmail.ru/download/5106592209c4b3c3eb09b8a46e5f4c4d_i-68.jpg' style='max-width: 100%;'/></div>";
	}
}

function init()
{	
	if(IsLocked==true)
		hidefeed();
}


setInterval(init, 100);	

