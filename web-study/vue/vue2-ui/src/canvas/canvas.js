const canvas = document.getElementById('canvas');

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight - 160

const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.strokeStyle = 'red'
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = 1

ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(100, 400)
ctx.lineTo(400, 400)
ctx.closePath();
ctx.stroke()

ctx.beginPath()
ctx.arc(500, 200, 50, 0, 2 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(800, 200, 50, 0, Math.PI, false);
ctx.moveTo(850, 200);
ctx.lineTo(750, 200);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(1000, 200, 50, 0, Math.PI + Math.PI / 2, false);
ctx.moveTo(1000, 150);
ctx.lineTo(1000, 200);
ctx.lineTo(1050, 200);
ctx.fill();
ctx.stroke();























