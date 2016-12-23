/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var userLang = navigator.language || navigator.userLanguage;
var json_path = './json/' + userLang + '-test.json';
$.getJSON(json_path, function (json) {
//                            $('#textTest').html(json.name);
    $('#index_header').html(json.index_header);
    $('#btn_enter').html(json.btn_enter);

//                            console.log(json); // this will show the info it in firebug console
});

