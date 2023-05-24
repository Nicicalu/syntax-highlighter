import SyntaxHighlighter from "./assets/syntaxhighlighter.js";

let highlighter = SyntaxHighlighter;

$("#generate").click(function () {
  let lang = $("#select").val();
  let input = $("#input textarea").val();
  console.log("Language: " + lang + "\nInput: " + input);
  $("#result").html(`
        <pre class="brush: ${lang}">${input}</pre>
    `);
  highlighter();
  setTimeout(() => {
      var range = document.createRange();
      range.selectNode($("#result .syntaxhighlighter")[0]);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
  }, 100);
});
