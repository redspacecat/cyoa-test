let storyData

document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      input.files[0])
  }
}

function playStory() {
    window.location.href = "story"
}

function finish(result) {
    localStorage.setItem("story", result)
    errorBox = document.getElementById("error-box")
    titleBox = document.getElementById("title-box")
    descBox = document.getElementById("desc-box")
    try {
        storyData = JSON.parse(result)
        errorBox.innerHTML = ""

        descBox.innerHTML = storyData.info.description
        titleBox.innerHTML = storyData.info.titleBox

    }
    catch (error) {
        errorBox.innerHTML = "Error loading the adventure file: " + error
    }
}

function placeFileContent(file) {
	readFileContent(file).then(content => {
    finish(content)
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}