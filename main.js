// ==UserScript==
// @name        facebook_delete all friends
// @namespace   facebook
// @version     1
// @grant       none
// @require     https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
var c1=false;
var c2=false;
var c3=false;
$(function () {
  var el=null;
 setInterval(function(){
    if(!c1 && $("div[aria-label='Друзі']").length){
   	console.log('druzi finded');
     $("div[aria-label='Друзі']")[0].click();      
      el=$("div[aria-label='Друзі']")[0].closest('.bp9cbjyn');
      
    c1=true;
   }
   	
   if(!c2 && $(":contains(Видалити із друзів)").closest("div[role='menuitem']").length){
   console.log('vydalyty finded');
     $(":contains(Видалити із друзів)").closest("div[role='menuitem']")[0].click();
   	c2=true;
   }
   
   if($("a:contains(OK)").length){
     console.log($("a:contains(OK)"));
   $("a:contains(OK)")[0].click();
     el.remove();
     
   }else{
     c1=false;
     c2=false;
   }
   
   
   
  
   
 },200);
 
 
 
});
