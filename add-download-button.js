document.querySelectorAll("a.concept_audio").forEach(function (el) {
  var id = el.getAttribute("data-id");
  var audio = document.getElementById(id);
  var source = audio.querySelector('source[type="audio/mpeg"]');

  var download = document.createElement("a");
  download.className = "concept_light-status_link";
  download.download = source.src.split("/").pop();
  download.href = source.src;
  download.innerHTML = "Download audio";
  download.target = "_blank";

  el.parentNode.insertBefore(download, el.nextSibling);
});
