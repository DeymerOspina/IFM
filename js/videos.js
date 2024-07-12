// document.addEventListener("DOMContentLoaded", function () {
//   const videos = [
//     document.getElementById("video1"),
//     document.getElementById("video2"),
//     document.getElementById("video3"),
//     document.getElementById("video4"),
//     document.getElementById("video5"),
//   ];

//   for (let i = 0; i < videos.length - 1; i++) {
//     videos[i].addEventListener("ended", function () {
//       videos[i].style.filter = "grayscale()";
//       videos[i + 1].play();
//     });
//     if (videos[i] == 3) {
//       videos[3].style.filter = "grayscale()";
//     }
//   }

//   videos[0].play();
// });

// ------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const videos = [
    document.getElementById("video1"),
    document.getElementById("video2"),
    document.getElementById("video3"),
    document.getElementById("video4"),
  ];

  const containImg = document.querySelector(".contain-img");

  let videosEnded = 0;

  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("ended", function () {
      videos[i].style.filter = "grayscale()";
      videosEnded++;

      if (videosEnded === videos.length) {
        containImg.style.display = "flex";
      } else if (i < videos.length - 1) {
        videos[i + 1].play();
      }
    });
  }

  videos[0].play();
});
