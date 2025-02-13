import $ from "jquery";

async function addCategoryLinksToDropdown() {
  $("#addCategoryInput").keyup(function () {
    setTimeout(function () {
      $(".autocomplete-suggestions:visible .autocomplete-suggestion").each(
        function () {
          const term = $(this).text();
          const pin = $(
            "<span class='autocomplete-suggestion-maplink'><a target='_new' href='https://www.wikitree.com/wiki/Category:" +
              term +
              "'><img src='/images/icons/map.gif'></a></span>"
          );
          if ($(this).prev("span").length == 0) {
            pin.insertBefore($(this));
          }
        }
      );
    }, 1000);
  });
}

chrome.storage.sync.get("categoryFinderPins", (result) => {
  if (
    result.categoryFinderPins &&
    $("body.page-Special_EditPerson").length &&
    $("body.BEE").length == 0
  ) {
    setTimeout(function () {
      addCategoryLinksToDropdown();
    }, 1000);
  }
});
