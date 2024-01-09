import{i as c,S as d}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",p="41633959-4ab3a3c79df0d7e6ffc2251eb",v=document.querySelector(".form"),f=document.querySelector(".photo-container"),i=document.querySelector(".loader");let n;const h=()=>{const o=new URL(u);return o.searchParams.append("key",p),o.searchParams.append("image_type","photo"),o.searchParams.append("orientation","horizontal"),o.searchParams.append("safesearch","true"),o};v.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements[0].value;if(t.length<3)alert("Sorry, Yours length is not enough. Min 4 letters.");else{i.style.display="block";try{y(t.toLowerCase())}catch(a){console.error(a)}}});const m=(o="")=>{const t=h();return t.searchParams.append("q",o),fetch(t).then(a=>{if(a.ok)return a.json();throw new Error("Request is not okay")})};function y(o){m(o).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.style.display="none";return}const a=t.hits.map((s,e)=>`<div class="photo-card">
                    <div class="photo">
                        <a href="${s.largeImageURL}" data-lightbox="gallery-${e}">
                            <img src="${s.webformatURL}" alt="${s.tags}" width="360" height="200" />
                        </a>
                    </div>
                    <div class="info">
                        <div class="label-value">
                            <div class="label">Likes</div>
                            <div class="value">${s.likes}</div>
                        </div>
                        <div class="label-value">
                            <div class="label">Views</div>
                            <div class="value">${s.views}</div>
                        </div>
                        <div class="label-value">
                            <div class="label">Comments</div>
                            <div class="value">${s.comments}</div>
                        </div>
                        <div class="label-value">
                            <div class="label">Downloads</div>
                            <div class="value">${s.downloads}</div>
                        </div>
                    </div>
                </div>`).join("");f.innerHTML=a,i.style.display="none",n=new d(".photo a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),n.refresh()}).catch(t=>{console.error(t)})}
//# sourceMappingURL=commonHelpers.js.map
