<template>
  <CFooter :fixed="false">
    <div>
      <a href="" target="_blank">khochaynhalam</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Mizu Creator.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="" target="_blank">Mizu Creator</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
