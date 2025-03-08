function applyDynamicStyles() {
    document.querySelectorAll("[class]").forEach((el) => {
      const classList = el.classList;
  
      classList.forEach((className) => {
        let property, value;
  
        // Box Model
        if (className.startsWith("w-")) { property = "width"; value = className.substring(2); }
        else if (className.startsWith("h-")) { property = "height"; value = className.substring(2); }
        else if (className.startsWith("minw-")) { property = "minWidth"; value = className.substring(4); }
        else if (className.startsWith("maxw-")) { property = "maxWidth"; value = className.substring(4); }
        else if (className.startsWith("minh-")) { property = "minHeight"; value = className.substring(4); }
        else if (className.startsWith("maxh-")) { property = "maxHeight"; value = className.substring(4); }
        else if (className.startsWith("p-")) { property = "padding"; value = className.substring(2); }
        else if (className.startsWith("pt-")) { property = "paddingTop"; value = className.substring(3); }
        else if (className.startsWith("pr-")) { property = "paddingRight"; value = className.substring(3); }
        else if (className.startsWith("pb-")) { property = "paddingBottom"; value = className.substring(3); }
        else if (className.startsWith("pl-")) { property = "paddingLeft"; value = className.substring(3); }
        else if (className.startsWith("bw-")) { property = "borderWidth"; value = className.substring(3); }
        else if (className.startsWith("bs-")) { property = "borderStyle"; value = className.substring(3); }
        else if (className.startsWith("bc-")) { property = "borderColor"; value = className.substring(3); }
        else if (className.startsWith("br-")) { property = "borderRadius"; value = className.substring(3); }
        else if (className.startsWith("m-")) { property = "margin"; value = className.substring(2); }
        else if (className.startsWith("mt-")) { property = "marginTop"; value = className.substring(3); }
        else if (className.startsWith("mr-")) { property = "marginRight"; value = className.substring(3); }
        else if (className.startsWith("mb-")) { property = "marginBottom"; value = className.substring(3); }
        else if (className.startsWith("ml-")) { property = "marginLeft"; value = className.substring(3); }
        else if (className.startsWith("boxs-")) { property = "boxSizing"; value = className.substring(5); }
        else if (className.startsWith("olw-")) { property = "outlineWidth"; value = className.substring(4); }
        else if (className.startsWith("ols-")) { property = "outlineStyle"; value = className.substring(4); }
        else if (className.startsWith("olc-")) { property = "outlineColor"; value = className.substring(4); }
        else if (className.startsWith("olo-")) { property = "outlineOffset"; value = className.substring(4); }
  
        // Flexbox
        else if (className.startsWith("d-")) { property = "display"; value = className.substring(2); }
        else if (className.startsWith("fd-")) { property = "flexDirection"; value = className.substring(3); }
        else if (className.startsWith("fw-")) { property = "flexWrap"; value = className.substring(3); }
        else if (className.startsWith("jc-")) { property = "justifyContent"; value = className.substring(3); }
        else if (className.startsWith("ai-")) { property = "alignItems"; value = className.substring(3); }
        else if (className.startsWith("ac-")) { property = "alignContent"; value = className.substring(3); }
        else if (className.startsWith("gap-")) { property = "gap"; value = className.substring(4); }
        else if (className.startsWith("order-")) { property = "order"; value = className.substring(6); }
        else if (className.startsWith("fg-")) { property = "flexGrow"; value = className.substring(3); }
        else if (className.startsWith("fs-")) { property = "flexShrink"; value = className.substring(3); }
        else if (className.startsWith("fb-")) { property = "flexBasis"; value = className.substring(3); }
        else if (className.startsWith("as-")) { property = "alignSelf"; value = className.substring(3); }
  
        // Typography
        else if (className.startsWith("ff-")) { property = "fontFamily"; value = className.substring(3); }
        else if (className.startsWith("fz-")) { property = "fontSize"; value = className.substring(3); }
        else if (className.startsWith("fweight-")) { property = "fontWeight"; value = className.substring(6); }
        else if (className.startsWith("fstyle-")) { property = "fontStyle"; value = className.substring(6); }
        else if (className.startsWith("lh-")) { property = "lineHeight"; value = className.substring(3); }
        else if (className.startsWith("ls-")) { property = "letterSpacing"; value = className.substring(3); }
        else if (className.startsWith("ws-")) { property = "wordSpacing"; value = className.substring(3); }
        else if (className.startsWith("ta-")) { property = "textAlign"; value = className.substring(3); }
        else if (className.startsWith("td-")) { property = "textDecoration"; value = className.substring(3); }
        else if (className.startsWith("tt-")) { property = "textTransform"; value = className.substring(3); }
        else if (className.startsWith("ti-")) { property = "textIndent"; value = className.substring(3); }
        else if (className.startsWith("ts-")) { property = "textShadow"; value = className.substring(3); }
        else if (className.startsWith("ws-")) { property = "whiteSpace"; value = className.substring(3); }
        else if (className.startsWith("ow-")) { property = "overflowWrap"; value = className.substring(3); }
        else if (className.startsWith("dir-")) { property = "direction"; value = className.substring(4); }
        else if (className.startsWith("ub-")) { property = "unicodeBidi"; value = className.substring(3); }
  
        // Positioning
        else if (className.startsWith("pos-")) { property = "position"; value = className.substring(4); }
        else if (className.startsWith("top-")) { property = "top"; value = className.substring(4); }
        else if (className.startsWith("right-")) { property = "right"; value = className.substring(6); }
        else if (className.startsWith("bottom-")) { property = "bottom"; value = className.substring(7); }
        else if (className.startsWith("left-")) { property = "left"; value = className.substring(5); }
        else if (className.startsWith("zi-")) { property = "zIndex"; value = className.substring(3); }
  
        // Background
        else if (className.startsWith("bgc-")) { property = "backgroundColor"; value = className.substring(4); }
        else if (className.startsWith("bgi-")) { property = "backgroundImage"; value = className.substring(4); }
        else if (className.startsWith("bgr-")) { property = "backgroundRepeat"; value = className.substring(4); }
        else if (className.startsWith("bgp-")) { property = "backgroundPosition"; value = className.substring(4); }
        else if (className.startsWith("bgs-")) { property = "backgroundSize"; value = className.substring(4); }
        else if (className.startsWith("bgo-")) { property = "backgroundOrigin"; value = className.substring(4); }
        else if (className.startsWith("bgcl-")) { property = "backgroundClip"; value = className.substring(5); }
      else if (className.startsWith("bga-")) { property = "backgroundAttachment"; value = className.substring(4); }
      else if (className.startsWith("bgbl-")) { property = "backgroundBlendMode"; value = className.substring(5); }

      // Colors
      else if (className.startsWith("c-")) { property = "color"; value = className.substring(2); }

      // Transforms
      else if (className.startsWith("trans-")) { property = "transform"; value = className.substring(6); }
      else if (className.startsWith("to-")) { property = "transformOrigin"; value = className.substring(3); }
      else if (className.startsWith("ts-")) { property = "transformStyle"; value = className.substring(3); }
      else if (className.startsWith("per-")) { property = "perspective"; value = className.substring(4); }
      else if (className.startsWith("pero-")) { property = "perspectiveOrigin"; value = className.substring(5); }

      // Transitions
      else if (className.startsWith("tran-")) { property = "transition"; value = className.substring(5); }
      else if (className.startsWith("tp-")) { property = "transitionProperty"; value = className.substring(3); }
      else if (className.startsWith("tdur-")) { property = "transitionDuration"; value = className.substring(5); }
      else if (className.startsWith("ttf-")) { property = "transitionTimingFunction"; value = className.substring(4); }
      else if (className.startsWith("tdel-")) { property = "transitionDelay"; value = className.substring(5); }

      // Animations
      else if (className.startsWith("anim-")) { property = "animation"; value = className.substring(5); }
      else if (className.startsWith("aname-")) { property = "animationName"; value = className.substring(6); }
      else if (className.startsWith("adur-")) { property = "animationDuration"; value = className.substring(5); }
      else if (className.startsWith("atf-")) { property = "animationTimingFunction"; value = className.substring(4); }
      else if (className.startsWith("adel-")) { property = "animationDelay"; value = className.substring(5); }
      else if (className.startsWith("aic-")) { property = "animationIterationCount"; value = className.substring(4); }
      else if (className.startsWith("adir-")) { property = "animationDirection"; value = className.substring(5); }
      else if (className.startsWith("afm-")) { property = "animationFillMode"; value = className.substring(4); }
      else if (className.startsWith("aps-")) { property = "animationPlayState"; value = className.substring(4); }

      // Gradients and Masks
      else if (className.startsWith("maski-")) { property = "maskImage"; value = className.substring(5); }
      else if (className.startsWith("maskm-")) { property = "maskMode"; value = className.substring(5); }
      else if (className.startsWith("maskr-")) { property = "maskRepeat"; value = className.substring(5); }
      else if (className.startsWith("maskp-")) { property = "maskPosition"; value = className.substring(5); }
      else if (className.startsWith("masks-")) { property = "maskSize"; value = className.substring(5); }
      else if (className.startsWith("masko-")) { property = "maskOrigin"; value = className.substring(5); }
      else if (className.startsWith("maskcl-")) { property = "maskClip"; value = className.substring(6); }
      else if (className.startsWith("maskcomp-")) { property = "maskComposite"; value = className.substring(9); }
      else if (className.startsWith("maskb-")) { property = "maskBorder"; value = className.substring(5); }
      else if (className.startsWith("clip-")) { property = "clipPath"; value = className.substring(5); }

      // Filters
      else if (className.startsWith("filt-")) { property = "filter"; value = className.substring(5); }

      // Grid Layout
      else if (className.startsWith("gtrows-")) { property = "gridTemplateRows"; value = className.substring(7); }
      else if (className.startsWith("gtcols-")) { property = "gridTemplateColumns"; value = className.substring(7); }
      else if (className.startsWith("gtareas-")) { property = "gridTemplateAreas"; value = className.substring(8); }
      else if (className.startsWith("gtemp-")) { property = "gridTemplate"; value = className.substring(6); }
      else if (className.startsWith("growgap-")) { property = "gridRowGap"; value = className.substring(8); }
      else if (className.startsWith("gcolgap-")) { property = "gridColumnGap"; value = className.substring(9); }
      else if (className.startsWith("ggap-")) { property = "gridGap"; value = className.substring(5); }
      else if (className.startsWith("garows-")) { property = "gridAutoRows"; value = className.substring(8); }
      else if (className.startsWith("gacols-")) { property = "gridAutoColumns"; value = className.substring(9); }
      else if (className.startsWith("gaflow-")) { property = "gridAutoFlow"; value = className.substring(7); }
      else if (className.startsWith("ji-")) { property = "justifyItems"; value = className.substring(3); }
      else if (className.startsWith("ali-")) { property = "alignItems"; value = className.substring(4); }
      else if (className.startsWith("pi-")) { property = "placeItems"; value = className.substring(3); }
      else if (className.startsWith("jc-")) { property = "justifyContent"; value = className.substring(3); }
      else if (className.startsWith("ac-")) { property = "alignContent"; value = className.substring(3); }
      else if (className.startsWith("pc-")) { property = "placeContent"; value = className.substring(3); }
      else if (className.startsWith("grstart-")) { property = "gridRowStart"; value = className.substring(8); }
      else if (className.startsWith("grend-")) { property = "gridRowEnd"; value = className.substring(7); }
      else if (className.startsWith("grow-")) { property = "gridRow"; value = className.substring(5); }
      else if (className.startsWith("gcstart-")) { property = "gridColumnStart"; value = className.substring(9); }
      else if (className.startsWith("gcend-")) { property = "gridColumnEnd"; value = className.substring(8); }
      else if (className.startsWith("gcol-")) { property = "gridColumn"; value = className.substring(6); }
      else if (className.startsWith("garea-")) { property = "gridArea"; value = className.substring(5); }
      else if (className.startsWith("js-")) { property = "justifySelf"; value = className.substring(3); }
      else if (className.startsWith("als-")) { property = "alignSelf"; value = className.substring(4); }
      else if (className.startsWith("ps-")) { property = "placeSelf"; value = className.substring(3); }

      // Other Properties
      else if (className.startsWith("curs-")) { property = "cursor"; value = className.substring(5); }
      else if (className.startsWith("pe-")) { property = "pointerEvents"; value = className.substring(3); }
      else if (className.startsWith("res-")) { property = "resize"; value = className.substring(4); }
      else if (className.startsWith("us-")) { property = "userSelect"; value = className.substring(3); }
      else if (className.startsWith("app-")) { property = "appearance"; value = className.substring(4); }
      else if (className.startsWith("cont-")) { property = "content"; value = className.substring(5); }
      else if (className.startsWith("cc-")) { property = "caretColor"; value = className.substring(3); }
      else if (className.startsWith("sb-")) { property = "scrollBehavior"; value = className.substring(3); }
      else if (className.startsWith("sst-")) { property = "scrollSnapType"; value = className.substring(4); }
      else if (className.startsWith("ssa-")) { property = "scrollSnapAlign"; value = className.substring(4); }

      // Table
      else if (className.startsWith("bc-")) { property = "borderCollapse"; value = className.substring(3); }
      else if (className.startsWith("bs-")) { property = "borderSpacing"; value = className.substring(3); }
      else if (className.startsWith("cs-")) { property = "captionSide"; value = className.substring(3); }
      else if (className.startsWith("ec-")) { property = "emptyCells"; value = className.substring(3); }
      else if (className.startsWith("tl-")) { property = "tableLayout"; value = className.substring(3); }

      // Lists
      else if (className.startsWith("ls-")) { property = "listStyle"; value = className.substring(3); }
      else if (className.startsWith("lst-")) { property = "listStyleType"; value = className.substring(4); }
      else if (className.startsWith("lsp-")) { property = "listStylePosition"; value = className.substring(4); }
      else if (className.startsWith("lsi-")) { property = "listStyleImage"; value = className.substring(4); }

      // Overflow and Clipping
      else if (className.startsWith("ov-")) { property = "overflow"; value = className.substring(3); }
      else if (className.startsWith("ovx-")) { property = "overflowX"; value = className.substring(4); }
      else if (className.startsWith("ovy-")) { property = "overflowY"; value = className.substring(4); }
      else if (className.startsWith("to-")) { property = "textOverflow"; value = className.substring(3); }
      else if (className.startsWith("vis-")) { property = "visibility"; value = className.substring(4); }

      // Writing Modes
      else if (className.startsWith("wm-")) { property = "writingMode"; value = className.substring(3); }
      else if (className.startsWith("to-")) { property = "textOrientation"; value = className.substring(3); }
      else if (className.startsWith("dir-")) { property = "direction"; value = className.substring(4); }
      else if (className.startsWith("ub-")) { property = "unicodeBidi"; value = className.substring(3); }

      // Print-Specific Styles
      else if (className.startsWith("bb-")) { property = "breakBefore"; value = className.substring(3); }
      else if (className.startsWith("ba-")) { property = "breakAfter"; value = className.substring(3); }
      else if (className.startsWith("bi-")) { property = "breakInside"; value = className.substring(3); }
      else if (className.startsWith("orph-")) { property = "orphans"; value = className.substring(5); }
      else if (className.startsWith("wid-")) { property = "widows"; value = className.substring(4); }

      // Font Features and OpenType
      else if (className.startsWith("ffs-")) { property = "fontFeatureSettings"; value = className.substring(4); }
      else if (className.startsWith("fvl-")) { property = "fontVariantLigatures"; value = className.substring(4); }
      else if (className.startsWith("fvc-")) { property = "fontVariantCaps"; value = className.substring(4); }
      else if (className.startsWith("fvn-")) { property = "fontVariantNumeric"; value = className.substring(4); }
      else if (className.startsWith("fvea-")) { property = "fontVariantEastAsian"; value = className.substring(5); }
      else if (className.startsWith("fva-")) { property = "fontVariantAlternates"; value = className.substring(4); }
      else if (className.startsWith("fk-")) { property = "fontKerning"; value = className.substring(3); }
      else if (className.startsWith("fos-")) { property = "fontOpticalSizing"; value = className.substring(4); }

      // Initial values and all property.
      else if (className.startsWith("iv-")) { property = "initialValue"; value = className.substring(3); }
      else if (className.startsWith("all-")) { property = "all"; value = className.substring(4); }

      // Unit and value parsing
      if (property) {
        try {
          let valueToApply = value;
          if (property === "fontSize" || property === "borderRadius" || property === "borderWidth" || property === "outlineWidth" || property === "outlineOffset" || property === "width" || property === "height" || property === "minWidth" || property === "maxWidth" || property === "minHeight" || property === "maxHeight" || property === "padding" || property === "paddingTop" || property === "paddingRight" || property === "paddingBottom" || property === "paddingLeft" || property === "margin" || property === "marginTop" || property === "marginRight" || property === "marginBottom" || property === "marginLeft" || property === "gap" || property === "gridRowGap" || property === "gridColumnGap" || property === "gridGap") {
            if (!isNaN(value)) {
              valueToApply = value + "px";
            } else if (!value.includes("%") && !value.includes("rem") && !value.includes("em") && !value.includes("px") && !value.includes("vw") && !value.includes("vh")){
                valueToApply = value + "rem";
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

applyDynamicStyles();
