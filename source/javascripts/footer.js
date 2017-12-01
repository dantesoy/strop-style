function openFooter () {
	document.getElementById("footer-open").classList.remove('is-hidden');
    document.getElementById("footer-open2").classList.remove('is-hidden');
    document.getElementById("footer-arrowdown").classList.remove('is-hidden');
    document.getElementById("footer-arrowup").classList.add('is-hidden');
    document.getElementById("overlay").classList.add('footer-overlay');
}

function closeFooter () {
	document.getElementById("footer-open").classList.add('is-hidden');
    document.getElementById("footer-open2").classList.add('is-hidden');
    document.getElementById("footer-arrowdown").classList.add('is-hidden');
    document.getElementById("footer-arrowup").classList.remove('is-hidden');
    document.getElementById("overlay").classList.remove('footer-overlay');
}

function selectedGraph() {
	document.getElementById("footer-select").classList.toggle('footer-box-selected');
}