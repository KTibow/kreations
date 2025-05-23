export default {
  body: `<g fill="none" stroke-width="1" stroke="currentColor">
<rect x="2" y="2" width="20" rx="2">
  <animate attributeName="height" values="8; 0" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
</rect>
<rect x="2" width="20" rx="2">
  <animate attributeName="y" values="10; 2" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
  <animate attributeName="height" values="4; 8" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
</rect>
<rect x="2" width="20" height="4" rx="2">
  <animate attributeName="y" values="14; 10" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
</rect>
<rect x="2" width="20" height="4" rx="2">
  <animate attributeName="y" values="18; 14" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
</rect>
<rect x="2" width="20" rx="2">
  <animate attributeName="y" values="22; 18" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
  <animate attributeName="height" values="0; 4" calcMode="spline" dur="1s" keySplines="0.1 0.8 0.2 1" repeatCount="indefinite"/>
</rect>
</g>`,
  width: 24,
  height: 24,
};
