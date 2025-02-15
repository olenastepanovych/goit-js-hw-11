import{a as u,S as d,i as n}from"./assets/vendor-hwdYKDic.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="48850020-35b7e0c8bab00d4ebe2ae0444",f="https://pixabay.com/api/";async function p(o){try{return(await u.get(f,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){return console.error("Error fetching images:",r),[]}}function m(o){const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(e=>`
    <li class="card">
        <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image"/>
        </a>
        <div class="describtion-cont">
        <div class="block"><h4>Likes</h4><p>${e.likes}</p></div>
        <div class="block"><h4>Views</h4><p>${e.views}</p></div>
        <div class="block"><h4>Comments</h4><p>${e.comments}</p></div>
        <div class="block"><h4>Downloads</h4><p>${e.downloads}</p></div>
        </div>
    </li>`).join("");r.innerHTML=s,new d(".gallery a").refresh()}const h=document.querySelector(".form"),c=document.querySelector(".input"),l=document.querySelector(".loader");h.addEventListener("submit",async o=>{o.preventDefault();const r=c.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!"});return}l.style.display="block";try{const s=await p(r);m(s)}catch{n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{l.style.display="none",c.value=""}});
//# sourceMappingURL=index.js.map
