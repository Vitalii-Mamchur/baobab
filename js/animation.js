function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('elem-show');
    } else {
      change.target.classList.remove('elem-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.elem-animation');
for (let elm of elements) {
  observer.observe(elm);
}
