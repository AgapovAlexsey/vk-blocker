var feed_lock=true;

function hidefeed()
{
	if(feed_lock==false)
	return;

	var child = document.getElementById("feed_rows");
	if(child==null)
		return;
	var feed = document.getElementById("main_feed");
	if(feed!=null)
	{
			feed.innerHTML="<div style=\"width: 100%;    text-align: center;   background: white;    min-height: 150px;    margin-top: 15px; \"><img src='https://psv4.vk.me/c615616/u30437599/docs/8e94214ea781/muz.jpg?extra=zMjPfp9davvZNV91Jn-ztmeRXj6alngOVodfVaxlUd4U32yWhm5brC1BP_yFn35Bfop-kwDXdS9_5xxnURicJhjXDOAIBPTJ1At5zXjlyWimW6T_WGM0vg' style='max-width: 100%;'/></div>";
	}
}

//hidefeed();
setInterval(hidefeed, 100);
