var toggle = document.getElementById("toggle");
var IsLocked=false;

chrome.storage.sync.get('IsLocked', function (obj) {
	IsLocked=obj.IsLocked;
	if(IsLocked==true)
		toggle.checked=true;
});




toggle.onclick = function(event) 
{
	if (this.checked) 
	{
		chrome.storage.sync.set({'IsLocked': true}, function() {         
        });				
	} 
	else 
	{
		chrome.storage.sync.set({'IsLocked': false}, function() {         
        });		
	}
};
