let page
let story

window.onload = start()

window.onerror = function errorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);
    return false;
}

function loadPage(num) {
    try {
        let pageData = story.story.num
        storyDiv = document.getElementById("story-stuff")
        storyDiv.innerHTML += `<p>${pageData.title}<p><br><p>${pageData.text}</p>`
    }
    catch {
        alert("Error occured loading page " + num)
    }
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