(function(){var e=document,a=window;function b(f,h,d){var g=e.ce(f);g.className=h;if(d){g.id=d;}return g;}addthis.box=function(r,h){if(!(r instanceof Array)){r=_ate.util.select(r);}for(var q=0;q<r.length;q++){var d=r[q];h=h||{};if(!d.getAttribute("atid")||d.getAttribute("atid")!=q){d.setAttribute("atid",q);}d.conf=h;var g=h.pubid||_ate.pub(),w=h.domain||null,u=h.feed_type||"trending",j=h.feed_period||"week",k=h.feed_service||null,v=h.tag||null;var f=d.getAttribute("addthis:pubid")||g,n=d.getAttribute("addthis:domain")||w,l=d.getAttribute("addthis:feed_type")||u,s=d.getAttribute("addthis:feed_period")||j,p=d.getAttribute("addthis:feed_service")||k,t=d.getAttribute("addthis:tag")||v;var m=_ate.util.scb("cfw",f,_ate.util.bind(c,d));var o="//q.addthis.com/feeds/1.0/"+u+".json?pubid="+f+"&period="+s+((n!=null&&n.length)?"&domain="+n:"")+((p!=null&&p.length)?"&service="+p:"")+((t!=null&&t==="false")?"&tag=false":"");_ate.ajs(o+"&callback="+m,1,true,true,null,true);}};function c(J){var o=this.conf,H=o.num_links||5,B=o.width||"300",y=o.height||"auto",F=o.remove||null,I="feed_title"in o?o.feed_title:"",A=o.link_target||"_top",E=o.background||null,C=o.border||null,h=o.scroll||"auto",j=o.url_filter||null,l=o.title_filter||null,q=o.transform||function(t){return t;};H=this.getAttribute("addthis:num_links")||H;B=this.getAttribute("addthis:width")||B;y=this.getAttribute("addthis:height")||y;F=this.getAttribute("addthis:remove")||F;I=this.getAttribute("addthis:feed_title")||I;A=this.getAttribute("addthis:link_target")||A;E=this.getAttribute("addthis:background")||E;C=this.getAttribute("addthis:border")||C;h=this.getAttribute("addthis:scroll")||h;j=this.getAttribute("addthis:url_filter")||j;l=this.getAttribute("addthis:title_filter")||l;q=this.getAttribute("addthis:transform")||q;if(B!="auto"&&isNaN(B)){B="300";}if(y!="auto"&&isNaN(y)){y="auto";}this.className="addthis_trendingcontent";this.innerHTML="";this.style.overflow=h;this.style.backgroundColor=E||"";this.style.border=C!=null?"1px solid "+C:"none";if(B!="auto"){this.style.width=B+"px";}else{this.style.width="";}if(y!="auto"){this.style.height=y+"px";}else{this.style.height="";}if(I&&I!=""){var i=b("P","addthis-content-title");i.innerHTML=I;this.appendChild(i);}var f=0;for(var p in J){if(f==H){break;}var x=J[p],K=x.title,k=x.url;K=K.replace(new RegExp(String.fromCharCode(160),"g")," ");var n=K.indexOf(F);if(n!=-1){if(n==0){K=K.slice(F.length);}else{if(n==(K.length-F.length)){K=K.slice(0,n);}}}var m=false;if(j!=null&&j instanceof Array){for(var r in j){var d=k.lastIndexOf("#"),v=j[r].toLowerCase(),w=k.toLowerCase();if(v===w){m=true;break;}else{if(d>0&&v===w.substr(0,d)){m=true;break;}}}}else{if(j!=null&&typeof j==="string"){if(j.toLowerCase()===k.toLowerCase()){m=true;}}}if(l!=null&&l instanceof Array){for(var s in l){if(l[s]===K||s===x.title){m=true;break;}}}else{if(l!=null&&typeof l==="string"){if(l===K||l===x.title){m=true;}}}var g=q({url:k,title:K});if(m===false&&(g==null||g==false)){m=true;}else{k=g.url||k;K=g.title||K;}if(m===false){var G=b("DIV","addthis-content-row"),D=b("A","addthis-content-link");D.href=k;D.title=D.innerHTML=K;D.target=A;if(D.addEventListener){D.addEventListener("click",function(){_ate.ed.fire("addthis.trending.click",D,{url:k});},false);}else{D.attachEvent("onclick",function(){_ate.ed.fire("addthis.trending.click",D,{url:k});});}G.appendChild(D);this.appendChild(G);f++;}}var z=b("DIV","addthis-content-footer");z.innerHTML="Powered by <a class=\"at-whatsthis at-logo\" target=\"_blank\" href=\"//www.addthis.com/?utm_source=tcb&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main\" id=\"atlogo-sm\">AddThis</a>";this.appendChild(z);if(f>0){this.style.display="block";_ate.ed.fire("addthis.trending.render",this,{config:o,container:this});}else{this.style.display="none";_ate.ed.fire("addthis.trending.empty",this,{});if(typeof console=="object"){console.info("Hiding AddThis Trending Content Box - no trending content returned to display");}}}addthis.box.ost=1;})();
