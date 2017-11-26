function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.body.style.background = "rgba(0,0,0,.4)";
    document.getElementById("visible-open").classList.remove('is-hidden');
    document.getElementById("is-visible").classList.remove('is-hidden');
    document.getElementById("sidebarContainer").classList.remove('align-flex');
    document.getElementById("sidebarSubcontainer").classList.add('sidebar-subcontainer');
    document.getElementById("sidebarButton").classList.remove('button-dark');
    document.getElementById("sidebarButton").classList.add('button-segment');
    document.getElementById("segment-view").classList.remove('segment-view-small');
    document.getElementById("warning").classList.remove('is-hidden');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "18%";
    document.body.style.backgroundColor = "#fff";
    document.getElementById("visible-open").classList.add('is-hidden');
    document.getElementById("is-visible").classList.add('is-hidden');
    document.getElementById("is-visible2").classList.add('is-hidden');
    document.getElementById("sidebarContainer").classList.add('align-flex');
    document.getElementById("sidebarSubcontainer").classList.remove('sidebar-subcontainer');
    document.getElementById("sidebarButton").classList.add('button-dark');
    document.getElementById("sidebarButton").classList.remove('button-segment');
    document.getElementById("segment-view").classList.add('segment-view-small');
    document.getElementById("is-visible").classList.add('is-hidden');
}