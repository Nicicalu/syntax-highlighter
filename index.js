import SyntaxHighlighter from "./assets/syntaxhighlighter.js";

let highlighter = SyntaxHighlighter;

function highlight(){
  let lang = $("#select").val();
  let input = $("#input textarea").val();
  console.log("Language: " + lang + "\nInput: " + input);
  $("#result").html(`
        <pre class="brush: ${lang}">${input}</pre>
    `);
  highlighter();
  
  //Save language
  document.cookie = "lang=" + lang + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

$("#copy").click(function () {
  var range = document.createRange();
  range.selectNode($("#result .syntaxhighlighter")[0]);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
});

$("#input textarea").on("change keyup paste", function () {
  highlight();
});

$("#select").change(function () {
  highlight();
});

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

$(document).ready(function() {
  // Retrieve the stored language cookie
  let storedLang = getCookie("lang");
  if (storedLang) {
    // Set the value of the select element to the stored language
    $("#select").val(storedLang);
  }
});

