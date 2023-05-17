import ePub from "epubjs";
function Book() {
  var fontsize = 20;
  var params =
    URLSearchParams &&
    new URLSearchParams(document.location.search.substring(1));
  var url =
    params && params.get("url") && decodeURIComponent(params.get("url"));
  var currentSectionIndex =
    params && params.get("loc") ? params.get("loc") : undefined;
  var book = ePub(url || "https://s3.amazonaws.com/moby-dick/OPS/package.opf");
  var rendition = book.renderTo("viewer", {
    contained: true,
    width: "90%",
    height: "90%",
    spread: "always",
  });
  rendition.display(currentSectionIndex);
  book.ready.then(function () {
    rendition.themes.default({
      p: { "font-size": `${fontsize}px !important` },
    });
    var next = document.getElementById("next");
    next.addEventListener(
      "click",
      function (e) {
        book.package.metadata.direction === "rtl"
          ? rendition.prev()
          : rendition.next();
        e.preventDefault();
      },
      false
    );

    var prev = document.getElementById("prev");
    prev.addEventListener(
      "click",
      function (e) {
        book.package.metadata.direction === "rtl"
          ? rendition.next()
          : rendition.prev();
        e.preventDefault();
      },
      false
    );
    var prev = document.getElementById("increase");
    prev.addEventListener(
      "click",
      function (e) {
        fontsize++;
        console.log(fontsize);
        rendition.themes.default({
          p: { "font-size": `${fontsize}px !important` },
        });
      },
      false
    );
    var prev = document.getElementById("decrease");
    prev.addEventListener(
      "click",
      function (e) {
        fontsize--;
        console.log(fontsize);
        rendition.themes.default({
          p: { "font-size": `${fontsize}px !important` },
        });
      },
      false
    );
    var keyListener = function (e) {
      // Left Key
      if ((e.keyCode || e.which) === 37) {
        book.package.metadata.direction === "rtl"
          ? rendition.next()
          : rendition.prev();
      }
      if ((e.keyCode || e.which) === 38 && fontsize < 50) {
        fontsize++;
        console.log(fontsize);
        rendition.themes.default({
          p: { "font-size": `${fontsize}px !important` },
        });
      }
      if ((e.keyCode || e.which) === 40 && fontsize > 0) {
        fontsize--;
        console.log(fontsize);
        rendition.themes.default({
          p: { "font-size": `${fontsize}px !important` },
        });
      }
      // Right Key
      if ((e.keyCode || e.which) === 39) {
        book.package.metadata.direction === "rtl"
          ? rendition.prev()
          : rendition.next();
      }
    };

    rendition.on("keyup", keyListener);
    document.addEventListener("keyup", keyListener, false);
  });
  return (
    <>
      <div id="viewer"></div>
      <div id="controls">
        <button alt="prev pg" className="control-button" id="prev">
          <h1>‹</h1>
        </button>
        <button alt="next pg" className="control-button" id="next">
          <h1>›</h1>
        </button>
        <button alt="decrease-fsize" className="control-button" id="decrease">
          <h1>T↓</h1>
        </button>
        <button alt="increase-fsize" className="control-button" id="increase">
          <h1>T↑</h1>
        </button>
        <a href="/gallery">
          <button alt="go-back" className="control-button return" id="return">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </button>
        </a>
      </div>
    </>
  );
}

export default Book;
