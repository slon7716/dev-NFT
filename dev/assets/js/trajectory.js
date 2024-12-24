// const move = (object, path, duration = 15000) => {
//   const motionPath = path;
//   const pathLength = motionPath.getTotalLength();

//   function moveAlongPath(timestamp) {
//     const animationDuration = duration;
//     const progress = (timestamp % animationDuration) / animationDuration;
//     const point = motionPath.getPointAtLength(pathLength * progress);

//     object.style.transform = `translate(${point.x}px, ${point.y}px)`;
//     requestAnimationFrame(moveAlongPath);
//   }

//   requestAnimationFrame(moveAlongPath);
// };

// $("[data-svg-trajectory]").each(function () {
//   const currentSvg = $(this);
//   const objects = currentSvg.find("image");

//   objects.each(function() {
//     const time = this.dataset.trajectoryDuration;
//     const pathFor = currentSvg.find(`path[data-path="${this.dataset.path}"]`);
//     move(this, pathFor[0], time ? time : undefined);
//   });
// });
