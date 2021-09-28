var allAuto = [
  {
    top: "Home",
    link: "https://www.google.com",
  },
  {
    top: "About",
    link: "https://www.google.com",
  },
  {
    top: "Placements",
    link: "https://www.google.com",
  },
  {
    top: "Results",
    link: "https://www.google.com",
  },
  {
    top: "Contact",
    link: "https://www.google.com",
  },
];

function autoResult() {
  var value = document.querySelector("input").value.toLowerCase();
  console.log(value);

  var final = [];
  allAuto.forEach((word) => {
    var w = word.top.toLowerCase();
    if (w.includes(value)) {
      final.push(word);
    }
  });
  if (final.length === 0) {
    final.push({ top: "No Results Found", link: "https://www.google.com" });
  }
  var division = document.getElementById("result");
  division.innerHTML = "";
  while (final.length > 4) {
    final.pop();
  }

  for (let i = 0; i < final.length; i++) {
    var option = document.createElement("div");
    option.classList.add("option");
    var href = document.createElement("a");
    href.setAttribute("href", final[i].link);
    href.setAttribute("target", "_blank");
    href.innerHTML = final[i].top;
    option.appendChild(href);
    division.appendChild(option);
    console.log(option);
    // option.addEventListener("click", () => {
    //   document.location.assign(final[i].link);
    // });
  }
}
