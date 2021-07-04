import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn-my');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.my-nav');
// hide/show sideabar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4><a href="${links}" class"link_color">${page}</a></h4>
</article>`;
  })
  .join('');


