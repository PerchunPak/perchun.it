<script lang="ts">
  export let screenSize: "sm" | "md" | "lg" | "xl" | "xxl" = "sm"

  export let innerWidth = 0
  export let innerHeight = 0

  $: screenSize = innerWidth < 640 ? "sm" : innerWidth < 768 ? "md" : innerWidth < 1024 ? "lg" : innerWidth < 1280 ? "xl" : "xxl"
</script>

<svelte:window bind:innerWidth bind:innerHeight />
