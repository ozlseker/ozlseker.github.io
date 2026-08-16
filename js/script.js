// Back button: return to the previous page in browser history,
// falling back to the homepage if there is no history.
document.addEventListener("DOMContentLoaded", function () {
  var backBtn = document.querySelector("[data-back]");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }
});
