window.onload = start()


function start() {
    let storyData = localStorage.getItem("story")
    if (storyData == null || undefined) {
        window.location.pathname.replace("story", "")
    } else {
        alert("Welcome to " + storyData.info.title)
    }
}