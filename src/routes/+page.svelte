<script>
  import Details from "$lib/components/Details.svelte";
  import chat from "$lib/loaders/chat";
  import circleBounce from "$lib/loaders/circleBounce";
  import fragment from "$lib/loaders/fragment";
  import mice from "$lib/loaders/mice";
  import pulse from "$lib/loaders/pulse";
  import star from "$lib/loaders/star";
  import triangleSquare from "$lib/loaders/triangleSquare";
  import Icon from "./Icon.svelte";
</script>

<h1>Kreations</h1>
<p>A very small library of Svelte components and loaders that I'd like to share</p>

<h2>Demos</h2>
<Details>
  {#snippet summary()}
    Summary
  {/snippet}
  You've read it now
</Details>
<div class="loaders">
  {#each [chat, circleBounce, fragment, mice, pulse, star, triangleSquare] as loader}
    <Icon icon={loader} width="4rem" height="4rem" />
  {/each}
</div>

<h2>Use</h2>
<p>Install <code>kreations</code> from NPM</p>

<style>
  :global(.kreations-details) :global {
    border-left: solid 1px LinkText;
    padding-left: 3px;
    summary {
      color: LinkText;
    }
  }
  .loaders {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    max-width: 20rem;
    align-self: center;
    :global(svg) {
      flex-shrink: 0;
    }
  }
</style>
