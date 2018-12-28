let nav = document.getElementById("planeten");

nav.addEventListener("mouseover", function() {
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  right.style.borderBottomColor = 'rgba(85, 79, 189, 0.7)';
  right.style.borderLeftColor = 'rgba(85, 79, 189, 0.7)';
  left.style.borderRightColor = 'rgba(85, 79, 189, 0.7)';
  left.style.borderBottomColor = 'rgba(85, 79, 189, 0.7)';
});

nav.addEventListener("mouseleave", function() {
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  right.style.borderBottomColor = 'rgba(90, 90, 90, 0.7)';
  right.style.borderLeftColor = 'rgba(90, 90, 90, 0.7)';
  left.style.borderRightColor = 'rgba(90, 90, 90, 0.7)';
  left.style.borderBottomColor = 'rgba(90, 90, 90, 0.7)';
});