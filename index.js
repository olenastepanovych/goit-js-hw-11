import{a as u,S as d,i}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="48850020-35b7e0c8bab00d4ebe2ae0444",f="https://pixabay.com/api/";async function m(s){try{return(await u.get(f,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){return console.error("Error fetching images:",r),[]}}function p(s){const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=s.map(o=>`
    <li class="card">
        <a href="${o.largeImageURL}" class="gallery-link">
        <img src="${o.webformatURL}" alt="${o.tags}" class="gallery-image"/>
        </a>
        <div class="describtion-cont">
        <div class="block"><h4>Likes</h4><p>${o.likes}</p></div>
        <div class="block"><h4>Views</h4><p>${o.views}</p></div>
        <div class="block"><h4>Comments</h4><p>${o.comments}</p></div>
        <div class="block"><h4>Downloads</h4><p>${o.downloads}</p></div>
        </div>
    </li>`).join("");r.innerHTML=a}const h=document.querySelector(".form"),c=document.querySelector(".input"),l=document.querySelector(".loader"),g=document.querySelector(".gallery");let b=new d(".gallery a");h.addEventListener("submit",async s=>{s.preventDefault();const r=c.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query!"});return}g.innerHTML="",l.style.display="block";try{const a=await m(r);p(a),b.refresh()}catch{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{l.style.display="none",c.value=""}});
//# sourceMappingURL=index.js.map
