function SamCSS(
  prefix,
  property,
  unit = "rem",
  regex = /(\d+)/
) {
  document.querySelectorAll(`[class^="${prefix}-"]`).forEach((el) => {
    const match = el.className.match(new RegExp(`${prefix}-${regex.source}`));
    if (match) {
      const value = match[1];
      if (
        property.startsWith("border") &&
        property.includes("style") &&
        (value == "none" ||
          value == "hidden" ||
          value == "dotted" ||
          value == "dashed" ||
          value == "solid" ||
          value == "double" ||
          value == "groove" ||
          value == "ridge" ||
          value == "inset" ||
          value == "outset")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("border") &&
        property.includes("color") &&
        (value == "transparent" ||
          /^#([0-9a-fA-F]{3}){1,2}$/.test(value) ||
          /^(rgb|rgba)\([\d\s%,]+\)$/.test(value))
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("text") &&
        property.includes("decoration-style") &&
        (value == "solid" ||
          value == "double" ||
          value == "dotted" ||
          value == "dashed" ||
          value == "wavy")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("text") &&
        property.includes("align") &&
        (value == "left" ||
          value == "right" ||
          value == "center" ||
          value == "justify" ||
          value == "start" ||
          value == "end" ||
          value == "match-parent")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("font") &&
        property.includes("weight") &&
        (value == "normal" ||
          value == "bold" ||
          value == "bolder" ||
          value == "lighter")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("font") &&
        property.includes("style") &&
        (value == "normal" || value == "italic" || value == "oblique")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("font") &&
        property.includes("variant") &&
        (value == "normal" ||
          value == "small-caps" ||
          value == "all-small-caps" ||
          value == "petite-caps" ||
          value == "all-petite-caps" ||
          value == "unicase" ||
          value == "titling-caps")
      ) {
        el.style[property] = value;
      } else if (
        (property.startsWith("justify") ||
          property.startsWith("align") ||
          property.startsWith("place")) &&
        (value == "flex-start" ||
          value == "flex-end" ||
          value == "center" ||
          value == "space-between" ||
          value == "space-around" ||
          value == "space-evenly" ||
          value == "baseline" ||
          value == "stretch" ||
          value == "start" ||
          value == "end")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("overflow") &&
        (value == "visible" ||
          value == "hidden" ||
          value == "scroll" ||
          value == "auto")
      ) {
        el.style[property] = value;
      } else if (
        property.startsWith("overscroll-behavior") &&
        (value == "auto" || value == "contain" || value == "none")
      ) {
        el.style[property] = value;
      } else if (property.startsWith("clip") && value == "none") {
        el.style[property] = value;
      } else if (
        property.startsWith("contain") &&
        (value == "none" ||
          value == "strict" ||
          value == "content" ||
          value == "layout" ||
          value == "style" ||
          value == "paint" ||
          value == "size")
      ) {
        el.style[property] = value;
      } else if (
        property == "display" &&
        (value == "block" ||
          value == "inline" ||
          value == "inline-block" ||
          value == "none" ||
          value == "flex" ||
          value == "inline-flex" ||
          value == "grid" ||
          value == "inline-grid" ||
          value == "table" ||
          value == "inline-table" ||
          value == "table-row-group" ||
          value == "table-header-group" ||
          value == "table-footer-group" ||
          value == "table-row" ||
          value == "table-column-group" ||
          value == "table-column" ||
          value == "table-cell" ||
          value == "table-caption" ||
          value == "contents" ||
          value == "list-item")
      ) {
        el.style[property] = value;
      } else if (
        property == "visibility" &&
        (value == "visible" || value == "hidden" || value == "collapse")
      ) {
        el.style[property] = value;
      } else if (
        property == "float" &&
        (value == "left" ||
          value == "right" ||
          value == "none" ||
          value == "inline-start" ||
          value == "inline-end")
      ) {
        el.style[property] = value;
      } else if (
        property == "clear" &&
        (value == "left" ||
          value == "right" ||
          value == "both" ||
          value == "none" ||
          value == "inline-start" ||
          value == "inline-end")
      ) {
        el.style[property] = value;
      } else if (
        property == "column-rule-style" &&
        (value == "none" ||
          value == "hidden" ||
          value == "dotted" ||
          value == "dashed" ||
          value == "solid" ||
          value == "double" ||
          value == "groove" ||
          value == "ridge" ||
          value == "inset" ||
          value == "outset")
      ) {
        el.style[property] = value;
      } else if (
        property == "column-span" &&
        (value == "none" || value == "all")
      ) {
        el.style[property] = value;
      } else if (
        property == "column-fill" &&
        (value == "auto" || value == "balance" || value == "balance-all")
      ) {
        el.style[property] = value;
      } else if (
        property == "break-before" &&
        (value == "auto" ||
          value == "avoid" ||
          value == "avoid-page" ||
          value == "page" ||
          value == "left" ||
          value == "right" ||
          value == "recto" ||
          value == "verso" ||
          value == "avoid-column" ||
          value == "column" ||
          value == "avoid-region" ||
          value == "region")
      ) {
        el.style[property] = value;
      } else if (
        property == "break-inside" &&
        (value == "auto" ||
          value == "avoid" ||
          value == "avoid-page" ||
          value == "avoid-column" ||
          value == "avoid-region")
      ) {
        el.style[property] = value;
      } else if (
        property == "break-after" &&
        (value == "auto" ||
          value == "avoid" ||
          value == "avoid-page" ||
          value == "page" ||
          value == "left" ||
          value == "right" ||
          value == "recto" ||
          value == "verso" ||
          value == "avoid-column" ||
          value == "column" ||
          value == "avoid-region" ||
          value == "region")
      ) {
        el.style[property] = value;
      } else if (
        property == "flex-direction" &&
        (value == "row" ||
          value == "row-reverse" ||
          value == "column" ||
          value == "column-reverse")
      ) {
        el.style[property] = value;
      } else if (
        property == "flex-wrap" &&
        (value == "nowrap" || value == "wrap" || value == "wrap-reverse")
      ) {
        el.style[property] = value;
      } else if (
        property == "position" &&
        (value == "static" ||
          value == "relative" ||
          value == "absolute" ||
          value == "fixed" ||
          value == "sticky")
      ) {
        el.style[property] = value;
      } else if (
        property == "box-sizing" &&
        (value == "content-box" || value == "border-box")
      ) {
        el.style[property] = value;
      } else if (
        property == "grid-auto-flow" &&
        (value == "row" ||
          value == "column" ||
          value == "dense" ||
          value == "row dense" ||
          value == "column dense")
      ) {
        el.style[property] = value;
      } else if (value != null && !isNaN(value)) {
        el.style[property] = `${value}${unit}`;
      } else if (value != null && isNaN(value)) {
        el.style[property] = value;
      } else {
        console.warn(`Invalid value for ${property}: ${value}`);
      }
    }
  });
}

// Box Model
SamCSS("m", "margin");
SamCSS("mt", "margin-top");
SamCSS("mr", "margin-right");
SamCSS("mb", "margin-bottom");
SamCSS("ml", "margin-left");

SamCSS("p", "padding");
SamCSS("pt", "padding-top");
SamCSS("pr", "padding-right");
SamCSS("pb", "padding-bottom");
SamCSS("pl", "padding-left");

SamCSS("w", "width");
SamCSS("h", "height");

SamCSS("bw", "border-width");
SamCSS("bs", "border-style");
SamCSS("bc", "border-color", "", /[a-zA-Z#]+|[0-9]+/);
SamCSS("bt", "border-top");
SamCSS("br", "border-right");
SamCSS("bb", "border-bottom");
SamCSS("bl", "border-left");

SamCSS("brd", "border-radius");
SamCSS("brtl", "border-top-left-radius");
SamCSS("brtr", "border-top-right-radius");
SamCSS("brbr", "border-bottom-right-radius");
SamCSS("brbl", "border-bottom-left-radius");

SamCSS("bxsz", "box-sizing", "", /[a-z-]+/);
SamCSS("o", "overflow", "", /[a-z]+/);
SamCSS("ox", "overflow-x", "", /[a-z]+/);
SamCSS("oy", "overflow-y", "", /[a-z]+/);
SamCSS("cp", "clip-path", "", /[a-z-]+/);
SamCSS("osh", "overscroll-behavior", "", /[a-z-]+/);
SamCSS("oshx", "overscroll-behavior-x", "", /[a-z-]+/);
SamCSS("oshy", "overscroll-behavior-y", "", /[a-z-]+/);
SamCSS("ct", "contain", "", /[a-z-]+/);
SamCSS("cis", "contain-intrinsic-size");
SamCSS("ciw", "contain-intrinsic-width");
SamCSS("cih", "contain-intrinsic-height");
// Positioning
SamCSS("pos", "position", "", /[a-z]+/);
SamCSS("t", "top");
SamCSS("r", "right");
SamCSS("b", "bottom");
SamCSS("l", "left");
SamCSS("z", "z-index");
SamCSS("is", "inset");
SamCSS("ibst", "inset-block-start");
SamCSS("ibend", "inset-block-end");
SamCSS("iist", "inset-inline-start");
SamCSS("iiend", "inset-inline-end");
// Display and Layout
SamCSS("d", "display", "", /[a-z-]+/);
SamCSS("v", "visibility", "", /[a-z]+/);
SamCSS("f", "float", "", /[a-z-]+/);
SamCSS("c", "clear", "", /[a-z-]+/);
SamCSS("col", "columns");
SamCSS("cow", "column-width");
SamCSS("coc", "column-count");
SamCSS("cog", "column-gap");
SamCSS("cor", "column-rule");
SamCSS("corw", "column-rule-width");
SamCSS("cors", "column-rule-style", "", /[a-z-]+/);
SamCSS("corc", "column-rule-color", "", /[a-zA-Z#]+|[0-9]+/);
SamCSS("cos", "column-span", "", /[a-z]+/);
SamCSS("cof", "column-fill", "", /[a-z-]+/);
SamCSS("bbfr", "break-before", "", /[a-z-]+/);
SamCSS("bins", "break-inside", "", /[a-z-]+/);
SamCSS("baft", "break-after", "", /[a-z-]+/);
// Flexbox
SamCSS("fd", "flex-direction", "", /[a-z-]+/);
SamCSS("fw", "flex-wrap", "", /[a-z-]+/);
SamCSS("ff", "flex-flow");
SamCSS("jc", "justify-content", "", /[a-z-]+/);
SamCSS("ai", "align-items", "", /[a-z-]+/);
SamCSS("ac", "align-content", "", /[a-z-]+/);
SamCSS("fl", "flex");
SamCSS("flg", "flex-grow");
SamCSS("fls", "flex-shrink");
SamCSS("flb", "flex-basis");
SamCSS("as", "align-self", "", /[a-z-]+/);
SamCSS("g", "gap");
SamCSS("rg", "row-gap");
SamCSS("cg", "column-gap");
SamCSS("pi", "place-items", "", /[a-z-]+/);
SamCSS("pc", "place-content", "", /[a-z-]+/);
SamCSS("ps", "place-self", "", /[a-z-]+/);
// Grid Layout
SamCSS("gtr", "grid-template-rows");
SamCSS("gtc", "grid-template-columns");
SamCSS("gta", "grid-template-areas");
SamCSS("gt", "grid-template");
SamCSS("grst", "grid-row-start");
SamCSS("gred", "grid-row-end");
SamCSS("gcst", "grid-column-start");
SamCSS("gced", "grid-column-end");
SamCSS("ga", "grid-area");
SamCSS("gar", "grid-auto-rows");
SamCSS("gac", "grid-auto-columns");
SamCSS("gaf", "grid-auto-flow", "", /[a-z-]+/);
SamCSS("gg", "grid-gap");
SamCSS("grg", "grid-row-gap");
SamCSS("gcg", "grid-column-gap");
SamCSS("ji", "justify-items", "", /[a-z-]+/);
SamCSS("aj", "align-items", "", /[a-z-]+/);
SamCSS("jco", "justify-content", "", /[a-z-]+/);
SamCSS("aco", "align-content", "", /[a-z-]+/);
// Typography
SamCSS("ffam", "font-family");
SamCSS("fs", "font-size");
SamCSS("fst", "font-style", "", /[a-z]+/);
SamCSS("fw", "font-weight", "", /[a-z]+/);
SamCSS("fv", "font-variant", "", /[a-z-]+/);
SamCSS("f", "font");
SamCSS("lh", "line-height");
SamCSS("ta", "text-align", "", /[a-z-]+/);
SamCSS("td", "text-decoration");
SamCSS("tdl", "text-decoration-line", "", /[a-z]+/);
SamCSS("tds", "text-decoration-style", "", /[a-z-]+/);
SamCSS("tdc", "text-decoration-color", "", /[a-zA-Z#]+|[0-9]+/);
