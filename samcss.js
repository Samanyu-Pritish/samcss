document.querySelectorAll("*").forEach((el) => {
  el.classList.forEach((cls) => {
    let value, dir;

    if (cls.startsWith("bg-")) {
      value = cls.slice(3);
      el.style.backgroundColor = value;
    } else if (cls === "container") {
      el.classList.add("container");
    } else if (cls === "block") {
      el.classList.add("block");
    } else if (cls === "inline-block") {
      el.classList.add("inline-block");
    } else if (cls === "inline") {
      el.classList.add("inline");
    } else if (cls === "flex") {
      el.classList.add("flex");
    } else if (cls === "inline-flex") {
      el.classList.add("inline-flex");
    } else if (cls === "grid") {
      el.classList.add("grid");
    } else if (cls === "inline-grid") {
      el.classList.add("inline-grid");
    } else if (cls === "hidden") {
      el.classList.add("hidden");
    } else if (cls === "flow-root") {
      el.classList.add("flow-root");
    } else if (cls === "isolate") {
      el.classList.add("isolate");
    } else if (cls === "isolation-auto") {
      el.classList.add("isolation-auto");
    } else if (cls === "object-contain") {
      el.classList.add("object-contain");
    } else if (cls === "object-cover") {
      el.classList.add("object-cover");
    } else if (cls === "object-fill") {
      el.classList.add("object-fill");
    } else if (cls === "object-none") {
      el.classList.add("object-none");
    } else if (cls === "object-scale-down") {
      el.classList.add("object-scale-down");
    } else if (cls === "object-bottom") {
      el.classList.add("object-bottom");
    } else if (cls === "object-center") {
      el.classList.add("object-center");
    } else if (cls === "object-left") {
      el.classList.add("object-left");
    } else if (cls === "object-left-bottom") {
      el.classList.add("object-left-bottom");
    } else if (cls === "object-left-top") {
      el.classList.add("object-left-top");
    } else if (cls === "object-right") {
      el.classList.add("object-right");
    } else if (cls === "object-right-bottom") {
      el.classList.add("object-right-bottom");
    } else if (cls === "object-right-top") {
      el.classList.add("object-right-top");
    } else if (cls === "object-top") {
      el.classList.add("object-top");
    } else if (cls === "overflow-auto") {
      el.classList.add("overflow-auto");
    } else if (cls === "overflow-hidden") {
      el.classList.add("overflow-hidden");
    } else if (cls === "overflow-clip") {
      el.classList.add("overflow-clip");
    } else if (cls === "overflow-visible") {
      el.classList.add("overflow-visible");
    } else if (cls === "overflow-scroll") {
      el.classList.add("overflow-scroll");
    } else if (cls === "overscroll-auto") {
      el.classList.add("overscroll-auto");
    } else if (cls === "overscroll-contain") {
      el.classList.add("overscroll-contain");
    } else if (cls === "overscroll-none") {
      el.classList.add("overscroll-none");
    } else if (cls === "static") {
      el.classList.add("static");
    } else if (cls === "fixed") {
      el.classList.add("fixed");
    } else if (cls === "absolute") {
      el.classList.add("absolute");
    } else if (cls === "relative") {
      el.classList.add("relative");
    } else if (cls === "sticky") {
      el.classList.add("sticky");
    } else if (cls === "antialiased") {
      el.classList.add("antialiased");
    } else if (cls === "subpixel-antialiased") {
      el.classList.add("subpixel-antialiased");
    } else if (cls === "underline") {
      el.classList.add("underline");
    } else if (cls === "overline") {
      el.classList.add("overline");
    } else if (cls === "line-through") {
      el.classList.add("line-through");
    } else if (cls === "no-underline") {
      el.classList.add("no-underline");
    } else if (cls === "invert") {
      el.classList.add("invert");
    } else if (cls === "sepia") {
      el.classList.add("sepia");
    } else if (cls === "grayscale") {
      el.classList.add("grayscale");
    } else if (cls === "backdrop-filter") {
      el.classList.add("backdrop-filter");
    } else if (cls === "backdrop-invert") {
      el.classList.add("backdrop-invert");
    } else if (cls === "backdrop-sepia") {
      el.classList.add("backdrop-sepia");
    } else if (cls.startsWith("top-")) {
      el.style.top = cls.slice(4);
    } else if (cls.startsWith("right-")) {
      el.style.right = cls.slice(6);
    } else if (cls.startsWith("bottom-")) {
      el.style.bottom = cls.slice(7);
    } else if (cls.startsWith("left-")) {
      el.style.left = cls.slice(5);
    } else if (cls.startsWith("z-")) {
      el.style.zIndex = cls.slice(2);
    } else if (cls.startsWith("w-")) {
      el.style.width = cls.slice(2);
    } else if (cls.startsWith("min-w-")) {
      el.style.minWidth = cls.slice(6);
    } else if (cls.startsWith("max-w-")) {
      el.style.maxWidth = cls.slice(6);
    } else if (cls.startsWith("h-")) {
      el.style.height = cls.slice(2);
    } else if (cls.startsWith("min-h-")) {
      el.style.minHeight = cls.slice(6);
    } else if (cls.startsWith("max-h-")) {
      el.style.maxHeight = cls.slice(6);
    } else if (cls.startsWith("p-")) {
      el.style.padding = cls.slice(2);
    } else if (cls.startsWith("px-")) {
      el.style.paddingLeft = cls.slice(3);
      el.style.paddingRight = cls.slice(3);
    } else if (cls.startsWith("py-")) {
      el.style.paddingTop = cls.slice(3);
      el.style.paddingBottom = cls.slice(3);
    } else if (cls.startsWith("pt-")) {
      el.style.paddingTop = cls.slice(3);
    } else if (cls.startsWith("pr-")) {
      el.style.paddingRight = cls.slice(3);
    } else if (cls.startsWith("pb-")) {
      el.style.paddingBottom = cls.slice(3);
    } else if (cls.startsWith("pl-")) {
      el.style.paddingLeft = cls.slice(3);
    } else if (cls.startsWith("m-")) {
      el.style.margin = cls.slice(2);
    } else if (cls.startsWith("mx-")) {
      el.style.marginLeft = cls.slice(3);
      el.style.marginRight = cls.slice(3);
    } else if (cls.startsWith("my-")) {
      el.style.marginTop = cls.slice(3);
      el.style.marginBottom = cls.slice(3);
    } else if (cls.startsWith("mt-")) {
      el.style.marginTop = cls.slice(3);
    } else if (cls.startsWith("mr-")) {
      el.style.marginRight = cls.slice(3);
    } else if (cls.startsWith("mb-")) {
      el.style.marginBottom = cls.slice(3);
    } else if (cls.startsWith("ml-")) {
      el.style.marginLeft = cls.slice(3);
    } else if (cls.startsWith("opacity-")) {
      el.style.opacity = cls.slice(8);
    } else if (cls.startsWith("gap-")) {
      el.style.gap = cls.slice(4);
    } else if (cls.startsWith("order-")) {
      el.style.order = cls.slice(6);
    } else if (cls.startsWith("flex-")) {
      el.style.flex = cls.slice(5);
    } else if (cls.startsWith("flex-grow-")) {
      el.style.flexGrow = cls.slice(10);
    } else if (cls.startsWith("flex-shrink-")) {
      el.style.flexShrink = cls.slice(12);
    } else if (cls.startsWith("items-")) {
      el.style.alignItems = cls.slice(6);
    } else if (cls.startsWith("self-")) {
      el.style.alignSelf = cls.slice(5);
    } else if (cls.startsWith("justify-")) {
      el.style.justifyContent = cls.slice(8);
    } else if (cls.startsWith("content-")) {
      el.style.alignContent = cls.slice(8);
    } else if (cls.startsWith("place-items-")) {
      el.style.placeItems = cls.slice(12);
    } else if (cls.startsWith("place-content-")) {
      el.style.placeContent = cls.slice(14);
    } else if (cls.startsWith("place-self-")) {
      el.style.placeSelf = cls.slice(11);
    } else if (cls.startsWith("font-")) {
      el.style.fontFamily = cls.slice(5);
    } else if (cls.startsWith("text-")) {
      el.style.color = cls.slice(5);
    } else if (cls.startsWith("leading-")) {
      el.style.lineHeight = cls.slice(8);
    } else if (cls.startsWith("tracking-")) {
      el.style.letterSpacing = cls.slice(9);
    } else if (cls.startsWith("indent-")) {
      el.style.textIndent = cls.slice(7);
    } else if (cls.startsWith("align-")) {
      el.style.verticalAlign = cls.slice(6);
    } else if (cls.startsWith("decoration-")) {
      el.style.textDecoration = cls.slice(11);
    } else if (cls.startsWith("decoration-offset-")) {
      el.style.textDecorationOffset = cls.slice(18);
    } else if (cls.startsWith("decoration-color-")) {
      el.style.textDecorationColor = cls.slice(17);
    } else if (cls.startsWith("font-style-")) {
      el.style.fontStyle = cls.slice(11);
    } else if (cls.startsWith("font-variant-")) {
      el.style.fontVariant = cls.slice(13);
    } else if (cls.startsWith("list-")) {
      el.style.listStyleType = cls.slice(5);
    } else if (cls.startsWith("caret-")) {
      el.style.caretColor = cls.slice(6);
    } else if (cls.startsWith("accent-")) {
      el.style.accentColor = cls.slice(7);
    } else if (cls.startsWith("hyphens-")) {
      el.style.hyphens = cls.slice(8);
    } else if (cls.startsWith("text-transform-")) {
      el.style.textTransform = cls.slice(15);
    } else if (cls.startsWith("whitespace-")) {
      el.style.whiteSpace = cls.slice(11);
    } else if (cls.startsWith("break-")) {
      el.style.overflowWrap = cls.slice(6);
    } else if (cls.startsWith("bg-")) {
      el.style.backgroundColor = cls.slice(3);
    } else if (cls.startsWith("border-")) {
      el.style.border = cls.slice(7);
    } else if (cls.startsWith("rounded-")) {
      el.style.borderRadius = cls.slice(8);
    } else if (cls.startsWith("outline-")) {
      el.style.outline = cls.slice(8);
    } else if (cls.startsWith("transition-")) {
      el.style.transition = cls.slice(11);
    } else if (cls.startsWith("duration-")) {
      el.style.transitionDuration = cls.slice(9);
    } else if (cls.startsWith("ease-")) {
      el.style.transitionTimingFunction = cls.slice(5);
    } else if (cls.startsWith("delay-")) {
      el.style.transitionDelay = cls.slice(6);
    } else if (cls.startsWith("animate-")) {
      el.style.animation = cls.slice(8);
    } else if (cls.startsWith("cursor-")) {
      el.style.cursor = cls.slice(7);
    } else if (cls.startsWith("select-")) {
      el.style.userSelect = cls.slice(7);
    } else if (cls.startsWith("resize-")) {
      el.style.resize = cls.slice(7);
    } else if (cls.startsWith("appearance-")) {
      el.style.appearance = cls.slice(11);
    } else if (cls.startsWith("pointer-events-")) {
      el.style.pointerEvents = cls.slice(15);
    } else if (cls.startsWith("fill-")) {
      el.style.fill = cls.slice(5);
    } else if (cls.startsWith("stroke-")) {
      el.style.stroke = cls.slice(7);
    } else if (cls.startsWith("stroke-width-")) {
      el.style.strokeWidth = cls.slice(13);
    }
  });
});
