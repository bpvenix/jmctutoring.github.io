/* 
    JMC Results Page Script
    Filename: results.js
    
    Author: Chase Wille
    Date: 05/12/2019
*/


var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function(){

     var formData = location.search;
        formData = formData.substring(1, formData.length);
        while (formData.indexOf("+") !== -1) {
             formData = formData.replace("+", " ");
        }
     formData = decodeURIComponent(formData);
        var formArray = formData.split("&");
        for (var i = 0; i < formArray.length; i = i + 1) {
                var para = document.createElement('p');
                para.textContent = formArray[i];
                $('form-results').appendChild(para);
        }
}