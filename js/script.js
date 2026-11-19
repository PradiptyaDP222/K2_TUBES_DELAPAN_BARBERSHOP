// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*0.12+'s';io.observe(el)});
// Menu mobile & progress bar
document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');
addEventListener('scroll',()=>{const h=document.documentElement;document.getElementById('progress').style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+'%'});
// Animasi teks mengetik
const t=document.getElementById('typed');
if(t){const w=['memotong rambut dengan rapi','merawat sepatu kesayangan Anda','memberi layanan terpercaya'];let i=0,j=0,d=false;
(function type(){const s=w[i];t.textContent=s.slice(0,j);if(!d&&j++===s.length){d=true;return setTimeout(type,1400)}
if(d&&j--===0){d=false;i=(i+1)%w.length}setTimeout(type,d?35:70)})()}
// Counter angka
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.count;let c=0;
const k=setInterval(()=>{c+=Math.ceil(n/40);if(c>=n){c=n;clearInterval(k)}el.textContent=c+(el.dataset.s||'')},35);co.unobserve(el)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));
