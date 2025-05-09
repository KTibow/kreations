export default {
  body: `<defs>
	<mask id="roundMask">
		<rect width="24" height="24" fill="white" rx="6" ry="6"/>
	</mask>
</defs>
<g mask="url(#roundMask)">
	<circle r="12" fill="currentColor">
		<animate attributeName="cx" values="0; 24; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="1 0 0 1; 1 0 0 1" keyTimes="0; 0.5; 1" />
		<animate attributeName="cy" values="0; 24; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="1 0 0 1; 1 0 0 1" keyTimes="0; 0.5; 1" />
	</circle>
	<circle r="12" fill="currentColor">
		<animate attributeName="cx" values="24; 0; 24" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="1 0 0 1; 1 0 0 1" keyTimes="0; 0.5; 1" />
		<animate attributeName="cy" values="24; 0; 24" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="1 0 0 1; 1 0 0 1" keyTimes="0; 0.5; 1" />
	</circle>
	<circle cx="24" cy="0" r="12" fill="currentColor" />
	<circle cx="0" cy="24" r="12" fill="currentColor" />
</g>`,
  width: 24,
  height: 24,
};
