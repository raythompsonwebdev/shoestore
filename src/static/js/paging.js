class Pager {
  constructor(tableName, itemsPerPage) {
    this.tableName = tableName;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.pages = 0;
    this.inited = false;

    this.showRecords = (from, to) => {
      const { rows } = document.getElementById(tableName);
      // i starts from 1 to skip table header row
      for (let i = 1; i < rows.length; i + 1) {
        if (i < from || i > to){
          rows[i].style.display = "none";
        }else{
          rows[i].style.display = "";
        }
      };

      this.showPage = (pageNumber) => {
        if (!this.inited) {
          alert("not inited");
          return;
        }

        const oldPageAnchor = document.getElementById(`pg${this.currentPage}`);
        oldPageAnchor.className = "pg-normal";

        this.currentPage = pageNumber;
        const newPageAnchor = document.getElementById(`pg${this.currentPage}`);
        newPageAnchor.className = "pg-selected";

        const from = (pageNumber - 1) * itemsPerPage + 1;
        const to = from + itemsPerPage - 1;
        this.showRecords(from, to);
      };

      this.prev = () => {
        if (this.currentPage > 1)
          this.showPage(this.currentPage - 1);
      };

      this.next = () => {
        if (this.currentPage < this.pages) {
          this.showPage(this.currentPage + 1);
        }
      };

      this.init = () => {
        const { rows } = document.getElementById(tableName);
        const records = rows.length - 1;
        this.pages = Math.ceil(records / itemsPerPage);
        this.inited = true;
      };

      this.showPageNav = (pagerName, positionId) => {
        if (!this.inited) {
          alert("not inited");
          return;
        }
        const element = document.getElementById(positionId);

        let pagerHtml = `<span onclick="${pagerName}.prev();" class="pg-normal"> &#171 Prev </span> | `;
        for (let page = 1; page <= this.pages; page++){
          pagerHtml += `<span id="pg${page}" class="pg-normal" onclick="${pagerName}.showPage(${page});">${page}</span> | `;
        pagerHtml += `<span onclick="${pagerName}.next();" class="pg-normal"> Next &#187;</span>`;
        }
        element.innerHTML = pagerHtml;
      };
    }
}

