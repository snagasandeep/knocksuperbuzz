(function(){function b(c,d,h,k,f,j,g){function e(){icon_wrap=document.createElement("ul");icon_wrap.setAttribute("id","at_icon_wrap");icon_wrap.className+=h;icon_wrap.className+=" "+k;icon_wrap.className+=f=="square"?" square":" rectangle";for(var l in j){li=document.createElement("li");li.className=l;a=document.createElement("a");a.setAttribute("target","_blank");a.setAttribute("addthis:userid",j[l]);a.className=(l=="share")?"addthis_button_share":"addthis_button_"+l+"_follow";icon=document.createElement("span");icon.className=l;a.appendChild(icon);li.appendChild(a);icon_wrap.appendChild(li);}return icon_wrap;}function i(){wrap=document.getElementById(c);dim=d.split("x");wh="width:"+dim[0]+"px; height:"+dim[1]+"px;";wrap.style.cssText=wh;wrap.id="embed_wrapper";wrap.appendChild(e());addthis.toolbox(wrap);}i();}addthis.ad=addthis.ad||{};_ate.extend(addthis.ad,{embed:{ost:1},menu:b});})();
