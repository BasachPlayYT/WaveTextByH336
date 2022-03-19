function getId(o){return document.getElementById(o)};
function getCl(o){return document.getElementsByClassName(o)};
function getTag(o){return document.getElementsByTagName(o)};

function copyText(e){var t;(t=document.createElement("p")).id="elementId336",t.style.position="absolute",t.style.left="-9999px",t.style.top="0",t.innerHTML=e,function(e){var t,n,o="_hiddenCopyText_",c="INPUT"===e.tagName||"TEXTAREA"===e.tagName;if(c)t=(l=e).selectionStart,n=e.selectionEnd;else{if(!(l=document.getElementById(o))){var l=document.createElement("textarea");l.style.position="absolute",l.style.left="-9999px",l.style.top="0",l.id=o,document.body.appendChild(l)}l.textContent=e.textContent}var a,i=document.activeElement;l.focus(),l.setSelectionRange(0,l.value.length);try{a=document.execCommand("copy")}catch(e){a=!1}i&&"function"==typeof i.focus&&i.focus(),c?e.setSelectionRange(t,n):l.textContent=""}(t)};
var ch = [];
var newStr;
function getText(t) {
	ch = [];
	newStr = '';
	var sp = t.slice(1).replace(/./g, " ");
	for(var i = 0; i < t.length; i++) {
		var str = ' '.repeat(i);
		ch.push(str + t + '\n')
	};

	for(var i = 0; i < t.length; i++) {
		var st = sp.slice(1).slice(i);
		ch.push(st + t + '\n')
	};

	ch.pop();

	for(var i2 = 0; i2 < getId('cv').value; i2++) {
		for(var i = 0; i < ch.length; i++) {
			newStr += ch[i];
		}
	}
};

setInterval(function() {
	getId('length').innerHTML = getId('result').innerHTML.length;

	if(getCl('txta')[0].value !== '') {
		getText(getCl('txta')[0].value);
		getId('result').innerHTML = newStr
	} else {
		getText(' ');
		getId('result').innerHTML = newStr
	}
}, 0)