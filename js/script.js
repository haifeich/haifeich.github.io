$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 576) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });
});


(function (global) { 

var dc = {}; 

var homeHtml = "snippets/home-snippet.html"; 
var codingHtml = "snippets/coding-snippet.html";
var cookingHtml = "snippets/cooking-snippet.html";
var languagesHtml = "snippets/languages-snippet.html";
var readingHtml = "snippets/reading-snippet.html";
var projectHtml = "snippets/project-snippet.html";
var aboutHtml = "snippets/about-snippet.html";

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;  
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};  

// On page load 
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");  
$ajaxUtils.sendGetRequest(  
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

dc.loadCodingPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    codingHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadCookingPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    cookingHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadLanguagesPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    languagesHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadReadingPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    readingHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadProjectPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    projectHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadAboutPage = function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


global.$dc = dc; 

})(window); 
