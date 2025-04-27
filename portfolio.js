// filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const grid = document.querySelector('#portfolio-grid');

filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    grid.querySelectorAll('.pf-card').forEach(card=>{
      if(cat==='all'||card.dataset.cat===cat){
        card.style.display='';
      }else{
        card.style.display='none';
      }
    });
  });
});

// modal pdf viewer
const overlay = document.querySelector('.modal-overlay');
const frame = document.querySelector('#pdf-frame');
const closeBtn = document.querySelector('.modal-close');

grid.addEventListener('click',e=>{
  const btn = e.target.closest('[data-file]');
  if(!btn) return;
  const file = btn.dataset.file;
  // use Mozilla PDF.js viewer via CDN
    const viewer = `/viewer/viewer.html?file=${encodeURIComponent(file)}`;
  frame.src = viewer;
  overlay.setAttribute('aria-hidden','false');
  overlay.classList.add('open');
});

closeBtn.addEventListener('click',closeModal);
overlay.addEventListener('click',e=>{
  if(e.target===overlay) closeModal();
});

function closeModal(){
  overlay.setAttribute('aria-hidden','true');
  overlay.classList.remove('open');
  frame.src='';
}
