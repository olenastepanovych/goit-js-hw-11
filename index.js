import{a as d,i as l,S as u}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="48850020-35b7e0c8bab00d4ebe2ae0444",p="https://pixabay.com/api/";async function f(s){try{return(await d.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Помилка запиту:",t),[]}}const a=document.getElementById("images");function h(s){if(a.innerHTML="",s.length===0){l.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=s.map(o=>`
    <div class="card">
        <a href="${o.largeImageURL}" class="img-cont">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="describtion-cont">
        <div class="block">
            <h4>Likes</h4>
            <p>${o.likes}</p>
        </div>
        <div class="block">
            <h4>Views</h4>
            <p>${o.views}</p>
        </div>
        <div class="block">
            <h4>Comments</h4>
            <p>${o.comments}</p>
        </div>
        <div class="block">
            <h4>Downloads</h4>
            <p>${o.downloads}</p>
        </div>
        </div>
    </div>
    `).join("");a.innerHTML=t,new u(".img-cont a").refresh()}const y=document.querySelector(".form"),g=document.getElementById("searchInput"),c=document.querySelector(".loader");y.addEventListener("submit",async s=>{s.preventDefault();const t=g.value.trim();if(!t){l.warning({title:"Warning",message:"Please enter a search term!"});return}c.style.display="block";const n=await f(t);c.style.display="none",h(n)});
//# sourceMappingURL=index.js.map
