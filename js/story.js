let page
let story

window.onload = start

window.onerror = function errorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);
    return false;
}

function loadPage(num) {
    let pageNum = "page" + num.toString()
    let pageData = story.story[pageNum]
    storyDiv = document.getElementsByClassName("story-stuff")[0]
    storyDiv.innerHTML = `<p>${pageData.title}<p><p>${pageData.text}</p>`
}

function start() {
    story = localStorage.getItem("story")
    if (story == null || undefined) {
        window.location.pathname = window.location.pathname.replace("story", "")
    } else {

        story = JSON.parse(story)
        page = parseInt(window.location.hash.slice(1, ))
        loadPage(1)

    }
}