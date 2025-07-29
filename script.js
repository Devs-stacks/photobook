window.onload = function() {
    if (window.innerWidth < 768) {
        document.querySelector(".mobile-content").style.display = "block";
        document.querySelector(".desktop-message").style.display = "none";
    } else {
        document.querySelector(".mobile-content").style.display = "none";
        document.querySelector(".desktop-message").style.display = "block";
    }
};

const media = [
  { type: 'image', src: '1.jpg' },
  { type: 'video', src: '1.mp4' },
  // ...many more
];

const grid = document.querySelector('.masonry-grid');

media.forEach(item => {
  const wrapper = document.createElement('div');
  wrapper.className = 'masonry-item';

  if (item.type === 'image') {
    wrapper.innerHTML = `<img src="${item.src}" loading="lazy" />`;
  } else {
    wrapper.innerHTML = `
      <video controls autoplay loop muted>
        <source src="${item.src}" type="video/mp4">
      </video>`;
  }

  grid.appendChild(wrapper);
});
