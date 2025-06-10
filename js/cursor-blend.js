// js/cursor-blend.js

// 1. Crée la div qui servira de curseur inversé
const blendCursor = document.createElement('div');
blendCursor.classList.add('cursor-blend');
document.body.appendChild(blendCursor);

// 2. À chaque mouvement de souris, on déplace cette div
document.addEventListener('mousemove', function(e) {
  blendCursor.style.left = e.clientX + 'px';
  blendCursor.style.top  = e.clientY + 'px';
});