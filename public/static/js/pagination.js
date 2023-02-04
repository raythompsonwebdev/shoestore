document.addEventListener("DOMContentLoaded", () => {
  const results = document.getElementById("#results");
  const resultDiv = document.getElementById("#results div");
  const pagination = document.getElementById("#pagination");
  const paginationLink = document.querySelector("#pagination a");

  // $("#results").before(
  //   '<form id="pag_search" ><label>New Products</label> <select name="gender"><option value="Men">Men</option><option value="Women">Women</option>      <option value="Women">Children</option></select></form><nav id="pagination"></nav>'
  // );

  // Pure JS
  // use create element
  const formResult =
    '<form id="pag_search" ><label>New Products</label> <select name="gender"><option value="Men">Men</option><option value="Women">Women</option>      <option value="Women">Children</option></select></form><nav id="pagination"></nav>';
  results.parentNode.insertBefore(formResult, results);

  const rowsShown = 4;
  // const rowsTotal = $("#results div").length;
  const { rowsTotal } = { ...resultDiv };
  const numPages = Math.round(rowsTotal / rowsShown);

  for (let i = 0; i < numPages; i + 1) {
    const pageNum = i + 1;
    // $("#pagination").append(`<a href="#" rel="${i}">${pageNum}</a> `);
    pagination.appendChild(`<a href="#" rel="${i}">${pageNum}</a> `);
  }

  // $("#results div").hide();
  resultDiv.classList.remove();

  // $("#results div:first").show();
  document.querySelector("#results div:first").show();

  // $("#results div").slice(0, rowsShown).show();
  resultDiv.slice(0, rowsShown).show();

  // $("#pagination a:first").addClass("active");
  document.querySelector("#pagination a:first").classList.add("active");

  // $("#pagination a").bind("click", function () {
  paginationLink.addEventListener("click", (e) => {
    // $("#pagination a").removeClass("active");
    paginationLink.removeClass("active");

    // $(this).addClass("active");
    e.target.addClass("active");

    // const currPage = $(this).attr("rel");
    const currPage = e.target.attr("rel");
    const startItem = currPage * rowsShown;
    const endItem = startItem + rowsShown;

    // $("#results div")
    resultDiv
      .css("opacity", "0.0")
      .hide()
      .slice(startItem, endItem)
      .css("display", "block")
      .animate({ opacity: 1 }, 300, () => {});
  });
});
