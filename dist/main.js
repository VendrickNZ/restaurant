(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("p"),n=document.createElement("p"),c=document.createElement("video");return e.innerText='"The Krusty Krab! Come spend your money here!"',n.innerText="One might ask, why should I come to the Krusty Krab 2 and not other fine establishments? To that I say, allow our CEO Eugene H. Krabs to explain why.",e.classList.add("quote"),c.id="video",c.width=640,c.height=320,c.src="../dist/videos/MrKrabsLong.mp4",c.controls=!0,t.appendChild(e),t.appendChild(n),t.appendChild(c),t}())};function e(){const e=document.createElement("header");e.classList.add("header");const c=document.createElement("h1");return c.textContent="The Krusty Krab 2",c.classList.add("restaurantName"),e.appendChild(c),e.appendChild(function(){const e=document.createElement("nav"),c=document.createElement("button");c.classList.add("navBtn"),c.textContent="Home",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(c),t())}));const a=document.createElement("button");a.classList.add("navBtn"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(a),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu");const e=document.createElement("img");return e.src="../dist/images/menu.webp",e.height=800,e.width=700,t.appendChild(e),t}())}())}));const d=document.createElement("button");return d.classList.add("navBtn"),d.textContent="Contact",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(d),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("div");e.classList.add("visitUs");const n=document.createElement("div");n.classList.add("images");const c=document.createElement("p");c.textContent="Visit us at 831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean",c.classList="contactText";const a=document.createElement("img");a.src="../dist/images/krustykrab2.webp",a.height=650,a.width=850;const d=document.createElement("p");d.textContent="Our founder, Eugene H. Krabs",d.classList="mrKrabsText";const s=document.createElement("img");s.src="../dist/images/mrkrabs.webp",s.height=650,s.width=850;const i=document.createElement("img");return i.src="../dist/images/krustykrabicon.png",i.height=20,i.width=40,n.appendChild(d),n.appendChild(a),n.appendChild(s),e.appendChild(i),e.appendChild(c),t.appendChild(e),t.appendChild(n),t}())}())})),e.appendChild(c),e.appendChild(a),e.appendChild(d),e}()),e}function n(t){document.querySelectorAll(".navBtn").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const c=document.getElementById("content");c.appendChild(e()),c.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),c.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("a");e.textContent="VendrickNZ",e.href="https://github.com/VendrickNZ",e.classList.add("profileLink");const n=document.createElement("i");return n.classList.add("fa"),n.classList.add("fa-github"),n.style="font-size:30px;color:#4e0ba1",t.appendChild(e),t.appendChild(n),t}()),n(document.querySelector(".navBtn")),t()}()})();