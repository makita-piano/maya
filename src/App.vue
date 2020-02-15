<template>
  <div id="app">
    <global-header />
    <router-view/>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import 'whatwg-fetch'

if (window.fetch === undefined) {
  window.fetch = fetch;
}

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>
