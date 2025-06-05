<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    summary,
    children,
    openByDefault = false,
    duration = 500,
    easing = "cubic-bezier(0.05, 0.7, 0.1, 1)",
  }: {
    summary: Snippet;
    children: Snippet;
    openByDefault?: boolean;
    duration?: number;
    easing?: string;
  } = $props();

  let details: HTMLDetailsElement;
  const getCollapsedHeight = () => {
    const summaryElement = details.querySelector("summary")!;
    return `${summaryElement.scrollHeight}px`;
  };
  const getFullHeight = () => {
    return `${details.scrollHeight}px`;
  };

  let abort: (() => void) | undefined;
  let closing = false;
  const runAbort = () => {
    if (!abort) return;
    abort();
    abort = undefined;
  };

  const animateOpen = () => {
    details.classList.toggle("open", true);
    details.open = true;
    const animation = details.animate(
      [{ height: getCollapsedHeight() }, { height: getFullHeight() }],
      {
        duration,
        easing,
      },
    );
    abort = () => {
      animation.cancel();
    };
  };
  const animateClose = () => {
    details.classList.toggle("open", false);
    const animation = details.animate(
      [{ height: getFullHeight() }, { height: getCollapsedHeight() }],
      {
        duration,
        easing,
        fill: "forwards",
      },
    );
    closing = true;
    const id = setTimeout(() => {
      details.open = false;
      closing = false;
    }, duration);
    abort = () => {
      animation.cancel();
      clearTimeout(id);
      closing = false;
    };
  };
</script>

<details class="kreations-details" bind:this={details} open={openByDefault}>
  <summary
    onclick={(e) => {
      const wasClosing = closing;
      runAbort();
      e.preventDefault();
      if (details.open && !wasClosing) {
        animateClose();
      } else {
        animateOpen();
      }
    }}
  >
    {@render summary()}
  </summary>
  <div class="contents">
    {@render children()}
  </div>
</details>

<style>
  details {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  summary {
    display: flex;
  }
</style>
