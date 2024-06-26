let page
let story

window.onload = start
window.onhashchange = reloadData

window.onerror = function errorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);
    return false;
}

function reloadData() {
    start()
}

function loadPage(num) {
    window.location.hash = num

    let pageNum = num.toString()
    let pageData = story.story[pageNum]
    storyDiv = document.getElementsByClassName("story-stuff")[0]
    optionsDiv = document.getElementById("options-list")
    if (pageData == undefined) {
        storyDiv.innerHTML = `<h3>404 - Page not found</h3><p>Sorry, we couldn't find the requested page in the story</p>`
        optionsDiv.innerHTML = ""
    } else {
        storyDiv.innerHTML = `<h3>${pageData.title}</h3><p>${pageData.text}</p>`

        let options = pageData.options
        optionsDiv.innerHTML = ""

        for (let i = 0; i < options.length; i++) {
            optionsDiv.innerHTML += `<li><a class="blue" href="#${options[i].id}" onclick="loadPage(${options[i].id})">${options[i].text}</a></li>`
        }
    }

}

function start() {
    story = localStorage.getItem("story")
    if (story == null || story == undefined) {
        window.location.pathname = window.location.pathname.replace("story", "")
    } else {

        story = JSON.parse(story)
        page = window.location.hash

        if (!(page == "#NaN" || page == "")) {
            page = parseInt(page.slice(1, ))
        } else {
            page = 1
        }

        loadPage(page) 
    }
}