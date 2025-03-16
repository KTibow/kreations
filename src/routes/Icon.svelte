<script lang="ts">
  import type { IconifyIcon } from "@iconify/types";
  export let icon: IconifyIcon;
  export let width: string = "1em";
  export let height: string = "1em";
</script>

<svg {width} {height} viewBox="0 0 {icon.width} {icon.height}">
  {@html icon.body}
</svg>
