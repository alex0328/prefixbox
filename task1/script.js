window.addEventListener("load", function(){
    console.log("js loaded");
    const mediaTag = document.createElement("meta");
    mediaTag.setAttribute("name", "viewport");
    mediaTag.setAttribute("content", "width=device-width");
    const head = document.getElementsByTagName("head")
    head[0].appendChild(mediaTag)
});

