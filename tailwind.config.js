const c = (n) => `rgb(var(--${n}) / <alpha-value>)`;
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { ink: c("ink"), panel: c("panel"), mist: c("mist"), fg: c("fg"), cyan: c("cyan"), violet: c("violet"), onacc: c("onacc") },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
  } },
};
