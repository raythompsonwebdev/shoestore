const menuToggle = document.getElementById("menu-toggle-btn");

menuToggle.addEventListener("click", (event) => {
  event.preventDefault();

  // create menu variables
  const slideoutMenu = document.getElementById("#mobile-nav");

  // eslint-disable-next-line prefer-destructuring
  const slideoutMenuHeight = slideoutMenu.offsetHeight;

  // toggle open class
  slideoutMenu.classList.toggle("open");

  slideoutMenu.style.transition = "all 0.3s ease-in 0s";

  // slide menu
  if (slideoutMenu.classList.contains("open")) {
    slideoutMenu.style.top = "0px";
  } else {
    slideoutMenu.style.transition = "all 0.3s ease-in 0s";
    slideoutMenu.style.top = `${-slideoutMenuHeight}px`;
  }
});

// $("#results").before('<nav id="pagination"></nav>');

// const rowsShown = 4;
// // eslint-disable-next-line prefer-destructuring
// const rowsTotal = $("#results div").length;
// const numPages = Math.round(rowsTotal / rowsShown);

// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < numPages; i++) {
//   const pageNum = i + 1;
//   $("#pagination").append(`<a href="#" rel="${i}">${pageNum}</a> `);
// }

// // eslint-disable-next-line no-undef
// $("#results div").hide();
// // eslint-disable-next-line no-undef
// $("#results div:first").show();
// // eslint-disable-next-line no-undef
// $("#results div").slice(0, rowsShown).show();
// // eslint-disable-next-line no-undef
// $("#pagination a:first").addClass("active");
// // eslint-disable-next-line no-undef
// // eslint-disable-next-line func-names
// // eslint-disable-next-line no-undef
// $("#pagination a").bind("click", function () {
//   // eslint-disable-next-line no-undef
//   $("#pagination a").removeClass("active");
//   // eslint-disable-next-line no-undef
//   // eslint-disable-next-line no-invalid-this
//   $(this).addClass("active");
//   const currPage = $(this).attr("rel");
//   const startItem = currPage * rowsShown;
//   const endItem = startItem + rowsShown;

//   $("#results div")
//     .css("opacity", "0.0")
//     .hide()
//     .slice(startItem, endItem)
//     .css("display", "block")
//     .animate({ opacity: 1 }, 300, () => {});
// });
