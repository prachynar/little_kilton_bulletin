document.addEventListener("DOMContentLoaded", () => {

  const subtitle = document.querySelector(".subtitle");

  if (subtitle) {
    const today = new Date();
    const formatted = today.toDateString();

    subtitle.innerText = `Official Town News Feed • System Date: ${formatted}`;
  }

});