<template>
  <div class="home">
    <nav-bar/>
    <index/>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/NavBar'
import Index from '@/views/index/Index'
import FooterBar from '@/components/common/FooterBar'


export default {
  name: 'Home',
  components: {
    NavBar,
    Index,
    FooterBar
   
  }
}
</script>

<stype>

</stype>
