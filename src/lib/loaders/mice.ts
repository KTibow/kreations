export default {
  body:
    `<defs>
<path id="a" fill="currentColor" d="M17.49 23.025q-.345.165-.69.0378t-.51-.4728l-1.8-3.87-1.395 1.95q-.255.36-.675.225t-.42-.57V12.63q0-.375.3378-.54t.6372.075l6.06 4.77q.345.255.2028.66T18.66 18h-2.52l1.785 3.825q.165.345.0378.69t-.4728.51" />
</defs>` +
    [60, 60 + 90, 60 + 90 + 90, 60 + 90 + 90 + 90]
      .map(
        (x) =>
          `<use href="#a">
<animateTransform attributeName="transform" type="rotate" values="0 12 12;${x} 12 12;360 12 12" dur="4s" repeatCount="indefinite" keySplines="1 0 0 1; 0.4 0 0.2 1" keyTimes="0; 0.8; 1" calcMode="spline" />
</use>`,
      )
      .join(""),
  width: 24,
  height: 24,
};
