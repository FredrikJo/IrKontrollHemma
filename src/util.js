export function makeUnsafeHttpGetRequest(url) {
	let w = window.open("",
		'_blank', 
		'toolbar=no,titlebar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=12000,top=12000,width=10,height=10,visible=none', 
		'');
	 w.location.href = url;
	 setTimeout(function() { w.close(); }, 10);	
}
