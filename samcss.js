function SamCSS(defaultFontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif") {
  // Apply default font to all text elements
  document.querySelectorAll("body *").forEach(el => {
      if (el.nodeType === Node.ELEMENT_NODE && el.children.length === 0) {
          el.style.fontFamily = defaultFontFamily;
      }
  });
  document.querySelectorAll("[class]").forEach((el) => {
      const classList = el.classList;

      classList.forEach((className) => {
          let property, value;

          // Box Model
          if (className.startsWith("w-")) { property = "width"; value = className.substring(2); }
          else if (className.startsWith("h-")) { property = "height"; value = className.substring(2); }
          else if (className.startsWith("minw-")) { property = "min-width"; value = className.substring(4); }
          else if (className.startsWith("maxw-")) { property = "max-width"; value = className.substring(4); }
          else if (className.startsWith("minh-")) { property = "min-height"; value = className.substring(4); }
          else if (className.startsWith("maxh-")) { property = "max-height"; value = className.substring(4); }
          else if (className.startsWith("p-")) { property = "padding"; value = className.substring(2); }
          else if (className.startsWith("pt-")) { property = "padding-top"; value = className.substring(3); }
          else if (className.startsWith("pr-")) { property = "padding-right"; value = className.substring(3); }
          else if (className.startsWith("pb-")) { property = "padding-bottom"; value = className.substring(3); }
          else if (className.startsWith("pl-")) { property = "padding-left"; value = className.substring(3); }
          else if (className.startsWith("bw-")) { property = "border-width"; value = className.substring(3); }
          else if (className.startsWith("bs-")) { property = "border-style"; value = className.substring(3); }
          else if (className.startsWith("bc-")) { property = "border-color"; value = className.substring(3); }
          else if (className.startsWith("br-")) { property = "border-radius"; value = className.substring(3); }
          else if (className.startsWith("m-")) { property = "margin"; value = className.substring(2); }
          else if (className.startsWith("mt-")) { property = "margin-top"; value = className.substring(3); }
          else if (className.startsWith("mr-")) { property = "margin-right"; value = className.substring(3); }
          else if (className.startsWith("mb-")) { property = "margin-bottom"; value = className.substring(3); }
          else if (className.startsWith("ml-")) { property = "margin-left"; value = className.substring(3); }
          else if (className.startsWith("boxs-")) { property = "box-sizing"; value = className.substring(5); }
          else if (className.startsWith("olw-")) { property = "outline-width"; value = className.substring(4); }
          else if (className.startsWith("ols-")) { property = "outline-style"; value = className.substring(4); }
          else if (className.startsWith("olc-")) { property = "outline-color"; value = className.substring(4); }
          else if (className.startsWith("olo-")) { property = "outline-offset"; value = className.substring(4); }

          // Flexbox
          else if (className.startsWith("d-")) { property = "display"; value = className.substring(2); }
          else if (className.startsWith("fd-")) { property = "flex-direction"; value = className.substring(3); }
          else if (className.startsWith("fw-")) { property = "flex-wrap"; value = className.substring(3); }
          else if (className.startsWith("jc-")) { property = "justify-content"; value = className.substring(3); }
          else if (className.startsWith("ai-")) { property = "align-items"; value = className.substring(3); }
          else if (className.startsWith("ac-")) { property = "align-content"; value = className.substring(3); }
          else if (className.startsWith("gap-")) { property = "gap"; value = className.substring(4); }
          else if (className.startsWith("order-")) { property = "order"; value = className.substring(6); }
          else if (className.startsWith("fg-")) { property = "flex-grow"; value = className.substring(3); }
          else if (className.startsWith("fs-")) { property = "flex-shrink"; value = className.substring(3); }
          else if (className.startsWith("fb-")) { property = "flex-basis"; value = className.substring(3); }
          else if (className.startsWith("as-")) { property = "align-self"; value = className.substring(3); }

          // Typography
          else if (className.startsWith("ff-")) { property = "font-family"; value = className.substring(3); }
          else if (className.startsWith("fz-")) { property = "font-size"; value = className.substring(3); }
          else if (className.startsWith("fweight-")) { property = "font-weight"; value = className.substring(6); }
          else if (className.startsWith("fstyle-")) { property = "font-style"; value = className.substring(6); }
          else if (className.startsWith("lh-")) { property = "line-height"; value = className.substring(3); }
          else if (className.startsWith("ls-")) { property = "letter-spacing"; value = className.substring(3); }
          else if (className.startsWith("ws-")) { property = "word-spacing"; value = className.substring(3); }
          else if (className.startsWith("ta-")) { property = "text-align"; value = className.substring(3); }
          else if (className.startsWith("td-")) { property = "text-decoration"; value = className.substring(3); }
          else if (className.startsWith("tt-")) { property = "text-transform"; value = className.substring(3); }
          else if (className.startsWith("ti-")) { property = "text-indent"; value = className.substring(3); }
          else if (className.startsWith("ts-")) { property = "text-shadow"; value = className.substring(3); }
          else if (className.startsWith("ws-")) { property = "white-space"; value = className.substring(3); }
          else if (className.startsWith("ow-")) { property = "overflow-wrap"; value = className.substring(3); }
          else if (className.startsWith("dir-")) { property = "direction"; value = className.substring(4); }
          else if (className.startsWith("ub-")) { property = "unicode-bidi"; value = className.substring(3); }

          // Positioning
          else if (className.startsWith("pos-")) { property = "position"; value = className.substring(4); }
          else if (className.startsWith("top-")) { property = "top"; value = className.substring(4); }
          else if (className.startsWith("right-")) { property = "right"; value = className.substring(6); }
          else if (className.startsWith("bottom-")) { property = "bottom"; value = className.substring(7); }
          else if (className.startsWith("left-")) { property = "left"; value = className.substring(5); }
          else if (className.startsWith("zi-")) { property = "z-index"; value = className.substring(3); }

          // Background
          else if (className.startsWith("bgc-")) { property = "background-color"; value = className.substring(4); }
          else if (className.startsWith("bgi-")) { property = "background-image"; value = className.substring(4); }
          else if (className.startsWith("bgr-")) { property = "background-repeat"; value = className.substring(4); }
          else if (className.startsWith("bgp-")) { property = "background-position"; value = className.substring(4); }
          else if (className.startsWith("bgs-")) { property = "background-size"; value = className.substring(4); }
          else if (className.startsWith("bgo-")) { property = "background-origin"; value = className.substring(4); }
          else if (className.startsWith("bgcl-")) { property = "background-clip"; value = className.substring(5); }
          else if (className.startsWith("bga-")) { property = "background-attachment"; value = className.substring(4); }
          else if (className.startsWith("bgbl-")) { property = "background-blend-mode"; value = className.substring(5); }

          // Colors
          else if (className.startsWith("c-")) { property = "color"; value = className.substring(2); }

          // Transforms
          else if (className.startsWith("trans-")) { property = "transform"; value = className.substring(6); }
          else if (className.startsWith("to-")) { property = "transform-origin"; value = className.substring(3); }
          else if (className.startsWith("ts-")) { property = "transform-style"; value = className.substring(3); }
          else if (className.startsWith("per-")) { property = "perspective"; value = className.substring(4); }
          else if (className.startsWith("pero-")) { property = "perspective-origin"; value = className.substring(5); }

          // Transitions
          else if (className.startsWith("tran-")) { property = "transition"; value = className.substring(5); }
          else if (className.startsWith("tp-")) { property = "transition-property"; value = className.substring(3); }
          else if (className.startsWith("tdur-")) { property = "transition-duration"; value = className.substring(5); }
          else if (className.startsWith("ttf-")) { property = "transition-timing-function"; value = className.substring(4); }
          else if (className.startsWith("tdel-")) { property = "transition-delay"; value = className.substring(5); }

          // Animations
          else if (className.startsWith("anim-")) { property = "animation"; value = className.substring(5); }
          else if (className.startsWith("aname-")) { property = "animation-name"; value = className.substring(6); }
          else if (className.startsWith("adur-")) { property = "animation-duration"; value = className.substring(5); }
          else if (className.startsWith("atf-")) { property = "animation-timing-function"; value = className.substring(4); }
          else if (className.startsWith("adel-")) { property = "animation-delay"; value = className.substring(5); }
          else if (className.startsWith("aic-")) { property = "animation-iteration-count"; value = className.substring(4); }
          else if (className.startsWith("adir-")) { property = "animation-direction"; value = className.substring(5); }
          else if (className.startsWith("afm-")) { property = "animation-fill-mode"; value = className.substring(4); }
          else if (className.startsWith("aps-")) { property = "animation-play-state"; value = className.substring(4); }

          // Gradients and Masks
          else if (className.startsWith("maski-")) { property = "mask-image"; value = className.substring(5); }
          else if (className.startsWith("maskm-")) { property = "mask-mode"; value = className.substring(5); }
          else if (className.startsWith("maskr-")) { property = "mask-repeat"; value = className.substring(5); }
          else if (className.startsWith("maskp-")) { property = "mask-position"; value = className.substring(5); }
          else if (className.startsWith("masks-")) { property = "mask-size"; value = className.substring(5); }
          else if (className.startsWith("masko-")) { property = "mask-origin"; value = className.substring(5); }
          else if (className.startsWith("maskcl-")) { property = "mask-clip"; value = className.substring(6); }
          else if (className.startsWith("maskcomp-")) { property = "mask-composite"; value = className.substring(9); }
          else if (className.startsWith("maskb-")) { property = "mask-border"; value = className.substring(5); }
          else if (className.startsWith("clip-")) { property = "clip-path"; value = className.substring(5); }

          // Filters
          else if (className.startsWith("filt-")) { property = "filter"; value = className.substring(5); }

          // Grid Layout
          else if (className.startsWith("gtrows-")) { property = "grid-template-rows"; value = className.substring(7); }
          else if (className.startsWith("gtcols-")) { property = "grid-template-columns"; value = className.substring(7); }
          else if (className.startsWith("gtareas-")) { property = "grid-template-areas"; value = className.substring(8); }
          else if (className.startsWith("gtemp-")) { property = "grid-template"; value = className.substring(6); }
          else if (className.startsWith("growgap-")) { property = "grid-row-gap"; value = className.substring(8); }
          else if (className.startsWith("gcolgap-")) { property = "grid-column-gap"; value = className.substring(9); }
          else if (className.startsWith("ggap-")) { property = "grid-gap"; value = className.substring(5); }
          else if (className.startsWith("garows-")) { property = "grid-auto-rows"; value = className.substring(8); }
          else if (className.startsWith("gacols-")) { property = "grid-auto-columns"; value = className.substring(9); }
          else if (className.startsWith("gaflow-")) { property = "grid-auto-flow"; value = className.substring(7); }
          else if (className.startsWith("ji-")) { property = "justify-items"; value = className.substring(3); }
          else if (className.startsWith("ali-")) { property = "align-items"; value = className.substring(4); }
          else if (className.startsWith("pi-")) { property = "place-items"; value = className.substring(3); }
          else if (className.startsWith("jc-")) { property = "justify-content"; value = className.substring(3); }
          else if (className.startsWith("ac-")) { property = "align-content"; value = className.substring(3); }
          else if (className.startsWith("pc-")) { property = "place-content"; value = className.substring(3); }
          else if (className.startsWith("grstart-")) { property = "grid-row-start"; value = className.substring(8); }
          else if (className.startsWith("grend-")) { property = "grid-row-end"; value = className.substring(7); }
          else if (className.startsWith("grow-")) { property = "grid-row"; value = className.substring(5); }
          else if (className.startsWith("gcstart-")) { property = "grid-column-start"; value = className.substring(9); }
          else if (className.startsWith("gcend-")) { property = "grid-column-end"; value = className.substring(8); }
          else if (className.startsWith("gcol-")) { property = "grid-column"; value = className.substring(6); }
          else if (className.startsWith("garea-")) { property = "grid-area"; value = className.substring(5); }
          else if (className.startsWith("js-")) { property = "justify-self"; value = className.substring(3); }
          else if (className.startsWith("als-")) { property = "align-self"; value = className.substring(4); }
          else if (className.startsWith("ps-")) { property = "place-self"; value = className.substring(3); }

          // Other Properties
          else if (className.startsWith("curs-")) { property = "cursor"; value = className.substring(5); }
          else if (className.startsWith("pe-")) { property = "pointer-events"; value = className.substring(3); }
          else if (className.startsWith("res-")) { property = "resize"; value = className.substring(4); }
          else if (className.startsWith("us-")) { property = "user-select"; value = className.substring(3); }
          else if (className.startsWith("app-")) { property = "appearance"; value = className.substring(4); }
          else if (className.startsWith("cont-")) { property = "content"; value = className.substring(5); }
          else if (className.startsWith("cc-")) { property = "caret-color"; value = className.substring(3); }
          else if (className.startsWith("sb-")) { property = "scroll-behavior"; value = className.substring(3); }
          else if (className.startsWith("sst-")) { property = "scroll-snap-type"; value = className.substring(4); }
          else if (className.startsWith("ssa-")) { property = "scroll-snap-align"; value = className.substring(4); }

          // Table
          else if (className.startsWith("bc-")) { property = "border-collapse";value = className.substring(3); }
          else if (className.startsWith("bs-")) { property = "border-spacing"; value = className.substring(3); }
          else if (className.startsWith("cs-")) { property = "caption-side"; value = className.substring(3); }
          else if (className.startsWith("ec-")) { property = "empty-cells"; value = className.substring(3); }
          else if (className.startsWith("tl-")) { property = "table-layout"; value = className.substring(3); }

          // Lists
          else if (className.startsWith("ls-")) { property = "list-style"; value = className.substring(3); }
          else if (className.startsWith("lst-")) { property = "list-style-type"; value = className.substring(4); }
          else if (className.startsWith("lsp-")) { property = "list-style-position"; value = className.substring(4); }
          else if (className.startsWith("lsi-")) { property = "list-style-image"; value = className.substring(4); }

          // Overflow and Clipping
          else if (className.startsWith("ov-")) { property = "overflow"; value = className.substring(3); }
          else if (className.startsWith("ovx-")) { property = "overflow-x"; value = className.substring(4); }
          else if (className.startsWith("ovy-")) { property = "overflow-y"; value = className.substring(4); }
          else if (className.startsWith("to-")) { property = "text-overflow"; value = className.substring(3); }
          else if (className.startsWith("vis-")) { property = "visibility"; value = className.substring(4); }

          // Writing Modes
          else if (className.startsWith("wm-")) { property = "writing-mode"; value = className.substring(3); }
          else if (className.startsWith("to-")) { property = "text-orientation"; value = className.substring(3); }
          else if (className.startsWith("dir-")) { property = "direction"; value = className.substring(4); }
          else if (className.startsWith("ub-")) { property = "unicode-bidi"; value = className.substring(3); }

          // Print-Specific Styles
          else if (className.startsWith("bb-")) { property = "break-before"; value = className.substring(3); }
          else if (className.startsWith("ba-")) { property = "break-after"; value = className.substring(3); }
          else if (className.startsWith("bi-")) { property = "break-inside"; value = className.substring(3); }
          else if (className.startsWith("orph-")) { property = "orphans"; value = className.substring(5); }
          else if (className.startsWith("wid-")) { property = "widows"; value = className.substring(4); }

          // Font Features and OpenType
          else if (className.startsWith("ffs-")) { property = "font-feature-settings"; value = className.substring(4); }
          else if (className.startsWith("fvl-")) { property = "font-variant-ligatures"; value = className.substring(4); }
          else if (className.startsWith("fvc-")) { property = "font-variant-caps"; value = className.substring(4); }
          else if (className.startsWith("fvn-")) { property = "font-variant-numeric"; value = className.substring(4); }
          else if (className.startsWith("fvea-")) { property = "font-variant-east-asian"; value = className.substring(5); }
          else if (className.startsWith("fva-")) { property = "font-variant-alternates"; value = className.substring(4); }
          else if (className.startsWith("fk-")) { property = "font-kerning"; value = className.substring(3); }
          else if (className.startsWith("fos-")) { property = "font-optical-sizing"; value = className.substring(4); }

          // Initial values and all property.
          else if (className.startsWith("iv-")) { property = "initial-value"; value = className.substring(3); }
          else if (className.startsWith("all-")) { property = "all"; value = className.substring(4); }

          // Unit and value parsing
          if (property) {
              try {
                  let valueToApply = value;
                  if (["font-size", "border-radius", "border-width", "outline-width", "outline-offset", "width", "height", "min-width", "max-width", "min-height", "max-height", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "gap", "grid-row-gap", "grid-column-gap", "grid-gap"].includes(property)) {
                      if (!isNaN(value) && !value.includes("%") && !value.includes("rem") && !value.includes("em") && !value.includes("px") && !value.includes("vw") && !value.includes("vh")) {
                          valueToApply = value + "rem"; // Default to rem
                      } else if (!isNaN(value) && value.includes("px")){
                          valueToApply = value; // if already has px, keep it.
                      } else if (!isNaN(value)){
                          valueToApply = value + "rem";
                      }
                      else {
                          valueToApply = value; // Keep existing units (%, rem, em, vw, vh, etc.)
                      }
                  }

                  el.style[property] = valueToApply;
              } catch (error) {
                  console.warn(`Error applying style: ${property}: ${value}`, error);
              }
          }
      });
  });
}

SamCSS();
