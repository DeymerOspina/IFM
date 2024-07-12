// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         var video = document.getElementById('myVideo');
//         var videoContainer = document.getElementById('video-container');

//         video.style.width = "80%";
//         video.style.height = "80%";
//         video.style.position = "relative";

//         videoContainer.style.justifyContent = "center";
//         videoContainer.style.alignItems = "center";
//     }, 5000);
// });

// ---------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     var videos = document.querySelectorAll("video");
//     videos.forEach(function (video) {
//       var container = video.parentElement;

//       video.style.width = "80%";
//       video.style.height = "80%";
//       video.style.position = "relative";

//       container.style.width = "20%";
//       container.style.height = "20%";
//     });
//   }, 5000);
// });

// -----------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var delay = 0;
//   var interval = 70000;
//   var videos = document.querySelectorAll("video");

//   videos.forEach(function (video, index) {
//     setTimeout(function () {
//       var container = video.parentElement;

//       video.style.width = "80%";
//       video.style.height = "80%";
//       video.style.position = "relative";

//       container.style.width = "20%";
//       container.style.height = "20%";
//     }, delay);

//     delay += interval;
//   });
// });

// ------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var videos = document.querySelectorAll("video");
//   var durations = [17000, 15000, 10000, 5000];

//   videos.forEach(function (video, index) {
//     setTimeout(function () {
//       var container = video.parentElement;

//       video.style.width = "80%";
//       video.style.height = "80%";
//       video.style.position = "relative";

//       container.style.width = "20%";
//       container.style.height = "20%";
//     }, durations[index]);
//   });
// });

// ------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var videos = document.querySelectorAll("video");
//   var durations = [17000, 17000, 6000, 29000];
//   var totalDuration = 0;

//   videos.forEach(function (video, index) {
//     setTimeout(function () {
//       video.style.width = "100%";
//       video.style.height = "100%";
//       video.style.position = "absolute";
//       video.style.top = "0";
//       video.style.left = "0";
//       video.parentElement.style.width = "100%";
//       video.parentElement.style.height = "100%";

//       video.play();

//       setTimeout(function () {
//         video.style.width = "100%";
//         video.style.height = "100%";
//         video.style.position = "relative";
//         video.style.top = "";
//         video.style.left = "";
//         video.parentElement.style.width = "20%";
//         video.parentElement.style.height = "20%";
//       }, durations[index]);
//     }, totalDuration);

//     totalDuration += durations[index];
//   });
// });

// -------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var videos = document.querySelectorAll("video");
//   var durations = [17000, 17000, 6000, 29000];
//   var totalDuration = 0;

//   videos.forEach(function (video, index) {
//     setTimeout(function () {
//       video.style.width = "100%";
//       video.style.height = "100%";
//       video.style.position = "absolute";
//       video.style.top = "0";
//       video.style.left = "0";
//       video.parentElement.style.width = "100%";
//       video.parentElement.style.height = "100%";

//       video.play();

//       setTimeout(function () {
//         video.style.width = "100%";
//         video.style.height = "100%";
//         video.style.position = "absolute";
//         video.style.top = "50%";
//         video.style.left = "50%";
//         video.parentElement.style.width = "20%";
//         video.parentElement.style.height = "70%";

//         video.parentElement.style.clipPath = getComputedStyle(
//           video.parentElement
//         ).clipPath;
//       }, durations[index]);
//     }, totalDuration);

//     totalDuration += durations[index];
//   });
// });
