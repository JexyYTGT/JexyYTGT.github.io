const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//scale because it looks better-
ctx.translate(40, 40); // recenter after scaling
ctx.scale(0.8, 0.8);

ctx.lineWidth = 2;
ctx.strokeStyle = "black";

//shirt shoulders half arms
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(60, 330);
ctx.quadraticCurveTo(120, 280, 170, 300);
ctx.lineTo(230, 300);
ctx.quadraticCurveTo(280, 280, 340, 330);
ctx.lineTo(340, 450);
ctx.lineTo(60, 450);
ctx.closePath();
ctx.fill();

//neck
ctx.fillStyle = "#f2c8a0";
ctx.beginPath();
ctx.moveTo(170, 250);
ctx.quadraticCurveTo(200, 260, 230, 250);
ctx.lineTo(235, 305);
ctx.lineTo(165, 305);
ctx.closePath();
ctx.fill();

//head
ctx.beginPath();
ctx.arc(200, 160, 80, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

//ears
ctx.beginPath();
ctx.arc(120, 170, 18, 0, Math.PI * 2);
ctx.arc(280, 170, 18, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

//hair
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(200, 120, 85, Math.PI, 0);
ctx.fill();

//hair contiued
ctx.beginPath();
ctx.arc(200, 130, 75, Math.PI, 0);
ctx.stroke();

//glasses
ctx.strokeRect(145, 150, 45, 30);
ctx.strokeRect(210, 150, 45, 30);

ctx.beginPath();
ctx.moveTo(190, 165);
ctx.lineTo(210, 165);
ctx.stroke();

//eyes
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(168, 165, 4, 0, Math.PI * 2);
ctx.arc(232, 165, 4, 0, Math.PI * 2);
ctx.fill();

//eyes
ctx.beginPath();
ctx.moveTo(155, 145);
ctx.lineTo(180, 145);
ctx.moveTo(220, 145);
ctx.lineTo(245, 145);
ctx.stroke();

//nose
ctx.beginPath();
ctx.moveTo(200, 170);
ctx.lineTo(194, 200);
ctx.lineTo(206, 200);
ctx.closePath();
ctx.stroke();

//smile
ctx.beginPath();
ctx.arc(200, 220, 22, 0, Math.PI);
ctx.stroke();
