let page
let story

window.onload = start

window.onerror = function errorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);
    return false;
}

function loadPage(num) {
    let pageNum = num.toString()
    let pageData = story.story[pageNum]
    storyDiv = document.getElementsByClassName("story-stuff")[0]
    storyDiv.innerHTML = `<h3>${pageData.title}</h3><p>${pageData.text}</p>`

    let options = pageData.options
    let optionsDiv = document.getElementById("options-list")

    for (let i = 0; i < options.length; i++) {
        optionsDiv.innerHTML += `<li><a href="#${options.id}" onclick="loadPage(${options.id})">${options.text}</a></li>`
    }

}

function start() {
    story = localStorage.getItem("story")
    if (story == null || undefined) {
        window.location.pathname = window.location.pathname.replace("story", "")
    } else {

        story = JSON.parse(story)
        page = parseInt(window.location.hash)

        if (!page == undefined) {
            page = page.slice(1, )
        }

        loadPage(1)
    }
}