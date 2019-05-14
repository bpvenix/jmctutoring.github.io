/* 
    JMC Page Script
    Filename: script.js
    
    Author: Chase Wille
    Date: 05/12/2019
*/

var $ = function(id) {
    return document.getElementById(id);
};

$("btnClear").addEventListener("click", function(){
    clear();

});

$("btnSubmit").addEventListener("click", function() {
    return formResults();
});

function clear(){
    $("contactForm").reset();
};


