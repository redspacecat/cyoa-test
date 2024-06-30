function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
// Start file download.
// download("hello.json","This is the content of my file :)");

window.onload = begin

function begin() {

}