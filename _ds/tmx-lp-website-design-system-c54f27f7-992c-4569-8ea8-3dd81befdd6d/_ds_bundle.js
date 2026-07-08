/* @ds-bundle: {"format":4,"namespace":"TMXLPWebsiteDesignSystem_c54f27","components":[{"name":"Brandmark","sourcePath":"components/core/Brandmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DarkCard","sourcePath":"components/core/DarkCard.jsx"},{"name":"DarkPanel","sourcePath":"components/core/DarkCard.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconBox","sourcePath":"components/core/IconBox.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Rail","sourcePath":"components/core/Rail.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"TCard","sourcePath":"components/core/TCard.jsx"},{"name":"CardTitle","sourcePath":"components/core/TCard.jsx"},{"name":"CardBody","sourcePath":"components/core/TCard.jsx"}],"sourceHashes":{"components/core/Brandmark.jsx":"5347c4b48e39","components/core/Button.jsx":"17cc54826b2a","components/core/DarkCard.jsx":"3225f9045d4c","components/core/Eyebrow.jsx":"e16af0646b3d","components/core/IconBox.jsx":"79e69817591a","components/core/Pill.jsx":"031d8c15ddef","components/core/Rail.jsx":"2f6e1164525d","components/core/SectionHead.jsx":"e5ed8a1528b0","components/core/TCard.jsx":"d42cfc15dc37","ui_kits/landing/landing.jsx":"9e5c4769d64e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TMXLPWebsiteDesignSystem_c54f27 = window.TMXLPWebsiteDesignSystem_c54f27 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Brandmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Resolve asset path relative to the bundle/consumer: allow override via prop.
const LOGO = {
  color: "tmx-logo.png",
  white: "tmx-logo-white.png"
};

/**
 * TMX logo lockup. Uses the real logo asset (assets/tmx-logo.png / tmx-logo-white.png).
 * `onDark` switches to the all-white variant.
 */
function Brandmark({
  onDark = true,
  height = 22,
  assetsBase = "",
  style,
  ...rest
}) {
  const file = LOGO[onDark ? "white" : "color"];
  const base = assetsBase || typeof window !== "undefined" && window.TMX_ASSETS_BASE || "assets";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/${file}`,
    alt: "TMX",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Brandmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Brandmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "10px 16px",
    fontSize: 13
  },
  md: {
    padding: "14px 24px",
    fontSize: 15
  },
  lg: {
    padding: "17px 30px",
    fontSize: 16
  }
};
const Arrow = ({
  color
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "17",
  height: "17",
  fill: "none",
  stroke: color,
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: hover && variant === "ghost" ? 12 : 9,
    fontFamily: "var(--font)",
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    whiteSpace: "nowrap",
    padding: s.padding,
    borderRadius: "var(--r-pill)",
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform .16s ease, box-shadow .16s ease, filter .16s ease, background .16s ease, border-color .16s ease, color .16s ease",
    transform: hover && !active && variant !== "ghost" ? "translateY(-1px)" : "translateY(0)"
  };
  const variants = {
    primary: {
      background: "var(--grad)",
      color: "#fff",
      boxShadow: hover ? "var(--glow-magenta-hover)" : "var(--glow-magenta)",
      filter: active ? "brightness(.98)" : hover ? "brightness(1.06)" : "none"
    },
    secondary: {
      background: "#fff",
      color: hover ? "var(--purple)" : "var(--text)",
      borderColor: hover ? "var(--purple)" : "var(--border-2)"
    },
    ghost: {
      background: "transparent",
      color: "var(--purple)",
      paddingLeft: 8,
      paddingRight: 8
    },
    "outline-dark": {
      background: hover ? "rgba(255,255,255,.08)" : "transparent",
      color: "#fff",
      borderColor: hover ? "rgba(255,255,255,.4)" : "var(--border-dark)"
    },
    "ghost-dark": {
      background: "transparent",
      color: "#fff",
      paddingLeft: 8,
      paddingRight: 8
    }
  };
  const arrowColor = variant === "primary" || variant === "outline-dark" || variant === "ghost-dark" ? "#fff" : "currentColor";
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }), children, arrow ? /*#__PURE__*/React.createElement(Arrow, {
    color: arrowColor
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DarkCard.jsx
try { (() => {
function DarkCard({
  white = false,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font)",
      background: white ? "#fff" : "rgba(255,255,255,.06)",
      border: white ? "none" : "1px solid var(--border-dark)",
      borderRadius: "var(--r-lg)",
      padding: 22,
      backdropFilter: white ? "none" : "blur(4px)",
      boxShadow: white ? "var(--sh-pop)" : "none",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 6px",
      fontSize: 17,
      fontWeight: 600,
      color: white ? "var(--text)" : "#fff"
    }
  }, title) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: white ? "var(--text-2)" : "var(--on-dark-2)"
    }
  }, children));
}

/** Full dark plum section surface with faint grid pattern. */
function DarkPanel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--grad-brand)",
      borderRadius: "var(--r-xl)",
      padding: 44,
      color: "#fff",
      boxShadow: "var(--sh-dark)",
      fontFamily: "var(--font)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
      backgroundSize: "44px 44px",
      WebkitMaskImage: "radial-gradient(120% 80% at 80% 0%,#000,transparent 70%)",
      maskImage: "radial-gradient(120% 80% at 80% 0%,#000,transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { DarkCard, DarkPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DarkCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  onDark = false,
  dot = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".09em",
      textTransform: "uppercase",
      color: onDark ? "#fff" : "var(--purple)",
      background: onDark ? "rgba(255,255,255,.08)" : "#fff",
      border: `1px solid ${onDark ? "var(--border-dark)" : "var(--border)"}`,
      padding: "7px 14px 7px 12px",
      borderRadius: "var(--r-pill)",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--grad)"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconBox.jsx
try { (() => {
let gradDefMounted = false;
function GradDef() {
  React.useEffect(() => {
    gradDefMounted = true;
  }, []);
  if (gradDefMounted || typeof document !== "undefined" && document.getElementById("tmxgrad")) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: "absolute"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tmxgrad",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#7C3AED"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#D62DFD"
  }))));
}

/** Icon box: children should be raw SVG path/shape elements (24×24 viewBox, no stroke attrs needed). */
function IconBox({
  solid = false,
  size = 50,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 14,
      display: "grid",
      placeItems: "center",
      background: solid ? "var(--grad)" : "linear-gradient(135deg,rgba(124,58,237,.12),rgba(214,45,253,.12))",
      border: solid ? "none" : "1px solid rgba(124,58,237,.18)",
      boxShadow: solid ? "var(--glow-magenta)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement(GradDef, null), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size * 0.52,
    height: size * 0.52,
    fill: "none",
    stroke: solid ? "#fff" : "url(#tmxgrad)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children));
}
Object.assign(__ds_scope, { IconBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconBox.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
const STYLES = {
  success: {
    background: "var(--success-bg)",
    color: "var(--success)"
  },
  brand: {
    background: "rgba(124,58,237,.1)",
    color: "var(--purple)"
  },
  warn: {
    background: "var(--warning-bg)",
    color: "var(--warning)"
  }
};
function Pill({
  tone = "brand",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font)",
      fontSize: 12,
      fontWeight: 600,
      padding: "5px 11px",
      borderRadius: "var(--r-pill)",
      ...(STYLES[tone] || STYLES.brand),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Rail.jsx
try { (() => {
function Rail({
  width = "100%",
  height = 5,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 99,
      background: "var(--grad-rail)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Rail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rail.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function SectionHead({
  eyebrow,
  title,
  lede,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 40,
      fontFamily: "var(--font)",
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    onDark: onDark
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 12px",
      fontSize: 34,
      lineHeight: 1.12,
      letterSpacing: "-.02em",
      fontWeight: 600,
      color: onDark ? "#fff" : "var(--text)"
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: onDark ? "var(--on-dark-2)" : "var(--text-2)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/TCard.jsx
try { (() => {
function TCard({
  hoverLift = true,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      padding: 26,
      fontFamily: "var(--font)",
      boxShadow: hover && hoverLift ? "var(--sh-pop)" : "var(--sh-card)",
      transform: hover && hoverLift ? "translateY(-2px)" : "none",
      transition: "box-shadow .2s, transform .2s",
      ...style
    }
  }, children);
}
function CardTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-.01em",
      color: "var(--text)",
      fontFamily: "var(--font)",
      ...style
    }
  }, children);
}
function CardBody({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-2)",
      fontFamily: "var(--font)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { TCard, CardTitle, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/landing.jsx
try { (() => {
// TMX landing page sections — composes design-system components from the bundle.
const DS = window.TMXLPWebsiteDesignSystem_c54f27;
const {
  Button,
  Eyebrow,
  Pill,
  IconBox,
  TCard,
  CardTitle,
  CardBody,
  DarkCard,
  DarkPanel,
  Rail,
  SectionHead,
  Brandmark
} = DS;

/* ---------- Nav ---------- */
function LandingNav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "22px 28px",
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Brandmark, {
    onDark: true,
    assetsBase: "../../assets"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      marginLeft: 24
    }
  }, ["Product", "Visibility", "Pricing", "Resources"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--on-dark-2)",
      textDecoration: "none",
      fontSize: 14.5,
      fontWeight: 500
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-dark",
    size: "sm"
  }, "Try Platform"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Create Account"))));
}

/* ---------- Hero (dark brand) ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--grad-brand)",
      color: "var(--on-dark)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -120,
      top: -80,
      width: 420,
      height: 420,
      background: "radial-gradient(circle,rgba(214,45,253,.55),transparent 62%)",
      filter: "blur(10px)"
    }
  }), /*#__PURE__*/React.createElement(LandingNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "150px 28px 90px",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "TMX Visibility"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 0",
      color: "#fff",
      fontSize: 56,
      lineHeight: 1.04,
      maxWidth: 820,
      letterSpacing: "-.025em",
      fontWeight: 600
    }
  }, "Know how your brand ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "shows up"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      color: "var(--on-dark-2)",
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: 600
    }
  }, "TMX Visibility monitors how your brand, products, and category appear across AI answers, search engines, and third-party sources \u2014 and ends every cycle with an expert-approved action plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Create Account"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-dark",
    size: "lg"
  }, "Try Platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "success"
  }, "\u25CF Strong"), /*#__PURE__*/React.createElement(Pill, {
    tone: "brand"
  }, "Improving"), /*#__PURE__*/React.createElement(Pill, {
    tone: "warn"
  }, "Gap flagged"))));
}

/* ---------- Features (white cards on paper) ---------- */
function Features() {
  const items = [{
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    })),
    title: "Monitor visibility",
    body: "Track where your brand shows up across AI answers and search engines."
  }, {
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 15l4-5 3 3 5-7"
    })),
    title: "Compare competitors",
    body: "See side-by-side presence across channels and prompts."
  }, {
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 12l2 2 4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
    })),
    title: "Approve & report",
    body: "End every cycle with an expert-approved action plan — not another dashboard.",
    solid: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The platform",
    title: "Every channel where buyers research.",
    lede: "Short, scannable value \u2014 monitor, compare, and act on how you appear where decisions get made."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, items.map(it => /*#__PURE__*/React.createElement(TCard, {
    key: it.title
  }, /*#__PURE__*/React.createElement(IconBox, {
    solid: !!it.solid,
    style: {
      marginBottom: 18
    }
  }, it.icon), /*#__PURE__*/React.createElement(CardTitle, null, it.title), /*#__PURE__*/React.createElement(CardBody, null, it.body))))));
}

/* ---------- Workflow (dark anchor) ---------- */
function Workflow() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement(DarkPanel, null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "The visibility workflow"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 22px",
      color: "#fff",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.015em"
    }
  }, "From signal to approved action plan \u2014 one workflow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DarkCard, {
    title: "Monitor"
  }, "Track AI answers, search engines, and third-party sources continuously."), /*#__PURE__*/React.createElement(DarkCard, {
    title: "Review sources"
  }, "Experts validate what AI surfaced and flag what needs correction."), /*#__PURE__*/React.createElement(DarkCard, {
    white: true,
    title: "Prioritize"
  }, "Sequence actions by business impact, not raw volume."), /*#__PURE__*/React.createElement(DarkCard, {
    title: "Approve & report"
  }, "Ship an expert-approved plan your team can execute.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Create Account"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-dark",
    arrow: true
  }, "See how it works")))));
}

/* ---------- Closing CTA ---------- */
function ClosingCta() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0",
      background: "var(--elevated)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Rail, {
    width: 80,
    style: {
      margin: "0 auto 24px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.1,
      letterSpacing: "-.022em",
      fontWeight: 600,
      color: "var(--text)"
    }
  }, "Turn visibility into a plan."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px auto 0",
      maxWidth: 520,
      color: "var(--text-2)",
      fontSize: 17,
      lineHeight: 1.6
    }
  }, "Start monitoring how your brand appears across AI answers and search \u2014 in minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Create Account"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Try Platform"))));
}

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "40px 0",
      textAlign: "center",
      color: "var(--text-2)",
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement(Rail, {
    width: 80,
    style: {
      margin: "0 auto 18px"
    }
  }), "TMX \xB7 Visibility for the AI-answer era", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-3)"
    }
  }, "\xA9 2026 TMX. Separate from the TokenMinds brand."));
}
function LandingPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper)",
      fontFamily: "var(--font)",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Workflow, null), /*#__PURE__*/React.createElement(ClosingCta, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  LandingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Brandmark = __ds_scope.Brandmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DarkCard = __ds_scope.DarkCard;

__ds_ns.DarkPanel = __ds_scope.DarkPanel;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconBox = __ds_scope.IconBox;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Rail = __ds_scope.Rail;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.TCard = __ds_scope.TCard;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardBody = __ds_scope.CardBody;

})();
