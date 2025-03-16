export default {
  body: `<rect x="0" y="0" width="24" height="24" rx="4" ry="4" fill="currentColor">
  <animate attributeName="y" values="24; 0; 0" calcMode="spline" dur="2s" keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1" keyTimes="0; 0.8; 1" repeatCount="indefinite"/>
  <animate attributeName="height" values="0; 24; 0" calcMode="spline" dur="2s" keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1" keyTimes="0; 0.8; 1" repeatCount="indefinite"/>
</rect>`,
  width: 24,
  height: 24,
};
