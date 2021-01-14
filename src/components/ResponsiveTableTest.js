import $ from "jquery";
window.$ = $;
const CreateDataTableTest = () => {
  $(".responsive-main-table1").DataTable({
    info: false,
    paging: false,
    bFilter: false,
    processing: true,
    ordering: true,
    responsive: true,
    autoWidth: false,
    searching: true,
    order: [[1, "asc"]],
    columnDefs: [
      {
        targets: 0,
        orderable: false
      }
    ]
  });
};

window.addEventListener("load", CreateDataTableTest);
