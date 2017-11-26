//= require jquery

// $( document ).on("click",".segment-edit",function() {
//   dataId= $(this).data("id")
//   $( "#"+dataId ).toggleClass( "is-hidden" );
//   $("#"+dataId+"-arrowup").toggleClass("is-hidden");
//   $("#"+dataId+"-arrowdown").toggleClass("is-hidden");
// });


function arrowUp() {
	document.getElementById("seg1-arrowup").classList.add('is-hidden');
	document.getElementById("seg1-arrowdown").classList.remove('is-hidden');
	document.getElementById("is-visible2").classList.add('is-hidden');
}

function arrowDown() {
	document.getElementById("seg1-arrowdown").classList.add('is-hidden');
	document.getElementById("seg1-arrowup").classList.remove('is-hidden');
	document.getElementById("is-visible2").classList.remove('is-hidden');
}
