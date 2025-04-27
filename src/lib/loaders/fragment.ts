export default {
  body: `<defs>
	<mask id="roundMask">
		<rect width="24" height="24" fill="white" rx="6" ry="6"/>
	</mask>
</defs>
<g mask="url(#roundMask)">
${[
  "M 0 0 H 4 L 12 12 L 0 6 Z:-12 -12",
  "M 4 0 H 16 L 12 12 Z:0 -12",
  "M 16 0 H 24 V 20 L 12 12 Z:12 -12",
  "M 24 20 V 24 H 8 L 12 12 Z:12 12",
  "M 8 24 H 0 V 9 L 12 12 Z:-12 12",
  "M 0 9 V 6 L 12 12 Z:-12 -4",
]
  .map((spec, i) => {
    const [d, trans] = spec.split(":");
    return `<path d="${d}" fill="currentColor" transform="translate(${trans})">
  <animateTransform
    attributeName="transform"
    type="translate"
    values="${trans}; 0 0"
    dur="1s"
    ${!i ? "" : i == 5 ? `begin="1.4s"` : `begin="${i / 4}s"`}
    fill="freeze"
    calcMode="spline"
    keyTimes="0;1"
    keySplines="0.05 0.7 0.1 1"
  />
</path>`;
  })
  .join("\n")}
</g>`,
  width: 24,
  height: 24,
};
