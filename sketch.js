const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let painting;

canvas.addEventListener("mousedown", () => {
  painting = true;
});

canvas.addEventListener("mouseup", () => {
  painting = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!painting) return;

  ctx.lineWidth = 4.5;
  ctx.lineCap = "round";
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ctx.strokeStyle = "#ffffff";
} else {
  ctx.strokeStyle = "#212121";
}
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
});

canvas.addEventListener("touchmove", (e) => {
  //if (!painting) return;

  ctx.lineWidth = 4.5;
  ctx.lineCap = "round";
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ctx.strokeStyle = "#ffffff";
} else {
  ctx.strokeStyle = "#212121";
}
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
});