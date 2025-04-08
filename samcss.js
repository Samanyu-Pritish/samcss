const cssPropertyMap = {
    // Layout & Box Model
    'w': 'width',
    'h': 'height',
    'p': 'padding',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'border': 'border',
    'bw': 'border-width',
    'bs': 'border-style',
    'bc': 'border-color',
    'bt': 'border-top',
    'br': 'border-right',
    'bb': 'border-bottom',
    'bl': 'border-left',
    'brd': 'border-radius',
    'brtl': 'border-top-left-radius',
    'brtr': 'border-top-right-radius',
    'brbr': 'border-bottom-right-radius',
    'brbl': 'border-bottom-left-radius',
    'm': 'margin',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'bxsz': 'box-sizing',
    'o': 'overflow',
    'ox': 'overflow-x',
    'oy': 'overflow-y',
    'cp': 'clip-path',
    'osh': 'overscroll-behavior',
    'oshx': 'overscroll-behavior-x',
    'oshy': 'overscroll-behavior-y',
    'ct': 'contain',
    'cis': 'contain-intrinsic-size',
    'ciw': 'contain-intrinsic-width',
    'cih': 'contain-intrinsic-height',
  
    // Positioning
    'pos': 'position',
    't': 'top',
    'r': 'right',
    'b': 'bottom',
    'l': 'left',
    'z': 'z-index',
    'is': 'inset',
    'ibst': 'inset-block-start',
    'ibend': 'inset-block-end',
    'iist': 'inset-inline-start',
    'iiend': 'inset-inline-end',
  
    // Display & Visibility
    'd': 'display',
    'v': 'visibility',
    'f': 'float',
    'c': 'clear',
  
    // Columns
    'col': 'columns',
    'cow': 'column-width',
    'coc': 'column-count',
    'cog': 'column-gap',
    'cor': 'column-rule',
    'corw': 'column-rule-width',
    'cors': 'column-rule-style',
    'corc': 'column-rule-color',
    'cos': 'column-span',
    'cof': 'column-fill',
    'bbfr': 'break-before',
    'bins': 'break-inside',
    'baft': 'break-after',
  
    // Flexbox
    'fd': 'flex-direction',
    'fw': 'flex-wrap',
    'ff': 'flex-flow',
    'jc': 'justify-content',
    'ai': 'align-items',
    'ac': 'align-content',
    'fl': 'flex',
    'flg': 'flex-grow',
    'fls': 'flex-shrink',
    'flb': 'flex-basis',
    'as': 'align-self',
    'g': 'gap',
    'rg': 'row-gap',
    'cg': 'column-gap',
  
    // Grid Layout
    'pi': 'place-items',
    'pc': 'place-content',
    'ps': 'place-self',
    'gtr': 'grid-template-rows',
    'gtc': 'grid-template-columns',
    'gta': 'grid-template-areas',
    'gt': 'grid-template',
    'grst': 'grid-row-start',
    'gred': 'grid-row-end',
    'gcst': 'grid-column-start',
    'gced': 'grid-column-end',
    'ga': 'grid-area',
    'gar': 'grid-auto-rows',
    'gac': 'grid-auto-columns',
    'gaf': 'grid-auto-flow',
    'gg': 'grid-gap',
    'grg': 'grid-row-gap',
    'gcg': 'grid-column-gap',
    'ji': 'justify-items',
    'aj': 'align-items',
    'jco': 'justify-content',
    'aco': 'align-content',
  
    // Typography
    'ffam': 'font-family',
    'fs': 'font-size',
    'fst': 'font-style',
    'fw': 'font-weight',
    'fv': 'font-variant',
    'f': 'font',
    'lh': 'line-height',
    'ta': 'text-align',
    'td': 'text-decoration',
    'tdl': 'text-decoration-line',
    'tds': 'text-decoration-style',
    'tdc': 'text-decoration-color',
    'lts': 'letter-spacing',
    'ls': 'letter-spacing', // Added this common alias
    'ws': 'word-spacing',
    'wsp': 'white-space',
    'ts': 'text-shadow',
    'wb': 'word-break',
    'owr': 'overflow-wrap',
    'tsz': 'tab-size',
    'to': 'text-overflow',
    'fk': 'font-kerning',
    'ffs': 'font-feature-settings',
    'fvs': 'font-variation-settings',
    'fsy': 'font-synthesis',
    'tr': 'text-rendering',
    'tj': 'text-justify',
  
    // Colors & Backgrounds
    'colr': 'color',
    'bgc': 'background-color',
    'bgi': 'background-image',
    'bgr': 'background-repeat',
    'bgp': 'background-position',
    'bgs': 'background-size',
    'bga': 'background-attachment',
    'bg': 'background',
    'bgo': 'background-origin',
    'bgcl': 'background-clip',
    'bgbm': 'background-blend-mode',
    'op': 'opacity',
  
    // Transitions & Animations
    'trns': 'transition',
    'trp': 'transition-property',
    'trd': 'transition-duration',
    'trtf': 'transition-timing-function',
    'trdl': 'transition-delay',
    'anim': 'animation',
    'animn': 'animation-name',
    'animd': 'animation-duration',
    'animtf': 'animation-timing-function',
    'animdl': 'animation-delay',
    'animi': 'animation-iteration-count',
    'animdir': 'animation-direction',
    'animfm': 'animation-fill-mode',
    'animpst': 'animation-play-state',
  
    // Transforms & 3D
    'tf': 'transform',
    'tfo': 'transform-origin',
    'tfs': 'transform-style',
    'pers': 'perspective',
    'perso': 'perspective-origin',
    'bcv': 'backface-visibility',
  
    // Filters & Effects
    'fltr': 'filter',
    'bfltr': 'backdrop-filter',
  
    // SVG Properties
    'fill': 'fill',
    'stroke': 'stroke',
    'strokew': 'stroke-width',
    'strokecap': 'stroke-linecap',
    'strokejoin': 'stroke-linejoin',
    'strokedash': 'stroke-dasharray',
    'strokedasho': 'stroke-dashoffset',
  
    // Misc UI Properties
    'curs': 'cursor',
    'outl': 'outline',
    'outlw': 'outline-width',
    'outls': 'outline-style',
    'outlc': 'outline-color',
    'rsz': 'resize',
    'us': 'user-select',
    'pe': 'pointer-events',
    'cc': 'caret-color',
    'scrbh': 'scroll-behavior',
    'scrbs': 'scroll-snap-type',
    'scrba': 'scroll-snap-align',
  
    // Lists & Tables
    'lstst': 'list-style-type',
    'lstspos': 'list-style-position',
    'lstsi': 'list-style-image',
    'lsts': 'list-style',
    'bdrcol': 'border-collapse',
    'bdrsp': 'border-spacing',
    'caps': 'caption-side',
    'ec': 'empty-cells',
    'tbllyt': 'table-layout',
  
    // Paged Media
    'pbbfr': 'page-break-before',
    'pbbaft': 'page-break-after',
    'pbbins': 'page-break-inside',
    'orph': 'orphans',
    'wids': 'widows',
  
    // Containment
    'cntn': 'contain',
  
    // Masking
    'mskimg': 'mask-image',
    'mskmd': 'mask-mode',
    'mskrpt': 'mask-repeat',
    'mskpos': 'mask-position',
    'msksz': 'mask-size',
    'mskorg': 'mask-origin',
    'mskclp': 'mask-clip',
    'mskcomp': 'mask-composite',
    'msk': 'mask',
  
    // Object Properties
    'objfit': 'object-fit',
    'objpos': 'object-position',
  
    // Logical Properties
    'insz': 'inline-size',
    'blksz': 'block-size',
    'mis': 'margin-inline-start',
    'mies': 'margin-inline-end',
    'mbs': 'margin-block-start',
    'mbe': 'margin-block-end',
    'pis': 'padding-inline-start',
    'pies': 'padding-inline-end',
    'pbs': 'padding-block-start',
    'pbe': 'padding-block-end'
  };
  
  // Units map for different value types
  const unitMap = {
    'default': 'rem', // Default unit
    'unitless': ['z-index', 'opacity', 'flex', 'flex-grow', 'flex-shrink', 
                 'column-count', 'font-weight', 'line-height', 'orphans', 'widows'],
    'special': {
      'display': {
        'b': 'block',
        'i': 'inline',
        'ib': 'inline-block',
        'f': 'flex',
        'g': 'grid',
        'n': 'none'
      },
      'position': {
        'r': 'relative',
        'a': 'absolute',
        'f': 'fixed',
        's': 'static',
        'st': 'sticky'
      },
      'text-align': {
        'l': 'left',
        'r': 'right',
        'c': 'center',
        'j': 'justify'
      },
      'font-weight': {
        'n': 'normal',
        'b': 'bold',
        'l': 'light'
      },
      'overflow': {
        'a': 'auto',
        'h': 'hidden',
        's': 'scroll',
        'v': 'visible'
      },
      'visibility': {
        'v': 'visible',
        'h': 'hidden',
        'c': 'collapse'
      },
      'border-style': {
        's': 'solid',
        'd': 'dashed',
        'dot': 'dotted',
        'n': 'none'
      },
      'flex-direction': {
        'r': 'row',
        'c': 'column',
        'rr': 'row-reverse',
        'cr': 'column-reverse'
      },
      'justify-content': {
        'fs': 'flex-start',
        'fe': 'flex-end',
        'c': 'center',
        'sb': 'space-between',
        'sa': 'space-around',
        'se': 'space-evenly'
      },
      'align-items': {
        'fs': 'flex-start',
        'fe': 'flex-end',
        'c': 'center',
        'b': 'baseline',
        's': 'stretch'
      }
    }
  };
  
  // Main function to process class names
  function processClassNames(element) {
    const classes = element.classList;
    const stylesToApply = {};
    
    for (const className of classes) {
      // Check if this is a utility class (contains a dash)
      if (className.includes('-')) {
        const [prefix, value] = className.split('-');
        
        // Check if this prefix exists in our map
        if (prefix in cssPropertyMap) {
          const property = cssPropertyMap[prefix];
          let finalValue = value;
          
          // Process special values (like display-b for display: block)
          if (property in unitMap.special && value in unitMap.special[property]) {
            finalValue = unitMap.special[property][value];
          } 
          // Process unitless properties
          else if (unitMap.unitless.includes(property)) {
            finalValue = value; // No unit
          }
          // Handle color values with hex codes
          else if (value.startsWith('hex')) {
            finalValue = `#${value.substring(3)}`;
          }
          // Default case - add the default unit
          else if (!isNaN(value)) {
            finalValue = `${value}${unitMap.default}`;
          }
          
          stylesToApply[property] = finalValue;
        }
      }
    }
    
    // Apply all collected styles to the element
    Object.entries(stylesToApply).forEach(([property, value]) => {
      element.style[property] = value;
    });
  }
  
  // Function to process the entire document
  function processDocument() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(processClassNames);
  }
  
  // Run when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    processDocument();
    
    // Optional: Set up a mutation observer to watch for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              processClassNames(node);
              const childElements = node.querySelectorAll('*');
              childElements.forEach(processClassNames);
            }
          });
        } else if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          processClassNames(mutation.target);
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  });
