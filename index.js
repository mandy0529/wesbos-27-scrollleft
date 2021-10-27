const items = document.querySelector('.items');
const btn = document.querySelector('button');

let isDown = false;
let startPoint;
let endPoint;

const handleMouseMove = () => {
  if (!isDown) return;
};
const handleMouseLeave = () => {
  isDown = false;
};
const handleMouseDown = (e) => {
  isDown = true;
  const coords = {
    x: e.pageX,
  };
  startPoint = coords.x - items.offsetLeft;
  items.classList.add('active');
  items.scrollLeft += 300;
};

const handleClick = () => {
  items.scrollLeft -= 300;
};
items.addEventListener('mousemove', handleMouseMove);
items.addEventListener('mousedown', handleMouseDown);
btn.addEventListener('click', handleClick);
