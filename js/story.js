window.onload = start()


function start() {
    let storyData = localStorage.getItem("story")
    if (storyData == null || undefined) {
        window.location.pathname = window.location.pathname.replace("story", "")
    } else {
        storyData = JSON.parse(storyData)
        alert("Welcome to " + storyData.info.title)
    }
}