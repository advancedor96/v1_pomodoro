<template>
  <div class="home">
    <input type="text" class="add_input" placeholder="add a new mission…" />
    <div class="circle"></div>
    <div class="title">the First thing to do today</div>
    <div class="timer" >25:00</div>
    <vue-material-icon name="list" :size="36" class="xxxxxxx"></vue-material-icon>
    <vue-material-icon name="insert_chart" :size="36"></vue-material-icon>
    <vue-material-icon name="library_music" :size="36" A="B"></vue-material-icon>

    <vue-material-icon name="favorite" :size="72" class="xxxxx"></vue-material-icon>
    <div class="right"></div>
  </div>
</template>

<script>

import VueMaterialIcon from '@/components/VueMaterialIcon'
// @ is an alias to /src

export default {
  name: 'Home',
  // components: { FormatListBulleted, PollBox, BookmarkMusic }
  components: { VueMaterialIcon },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style  lang="scss" scoped>
* {
  display: inline-block;
}
.home {
  width: 1280px;
  height: 800px;
  background: #ffedf7 0% 0% no-repeat padding-box;
  position: relative;
  .list {
    position: absolute;
    top: 48px;
    left: 1159px;
  }

  .timer {
    position: absolute;
    top: 297px;
    left: 80px;
    width: 454px;
    height: 206px;
    font: Bold 176px/176px Roboto;
    letter-spacing: 0;
    color: #ff4384;
  }
  .title {
    position: absolute;
    top: 249px;
    left: 149px;
    width: 398px;
    height: 28px;
    text-align: left;
    font: Bold 24px/28px Roboto;
    letter-spacing: 0;
    color: #003164;
    text-transform: uppercase;
  }
  .circle {
    position: absolute;
    top: 249px;
    left: 85px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #003164;
  }
  .add_input {
    position: absolute;
    top: 48px;
    left: 85px;
    width: 445px;
    height: 56px;
    background: #ffffff 0% 0% no-repeat padding-box;
  }
  .right {
    position: absolute;
    left: 830px;
    width: 450px;
    height: 800px;
    background: #003164 0% 0% no-repeat padding-box;
  }
}
</style>
