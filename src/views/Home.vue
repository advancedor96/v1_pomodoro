<template>
  <div class="home">
    <div class="add_input">
      <input type="text" placeholder="add a new mission…" />
    </div>
    <div class="circle"></div>
    <div class="title">the First thing to do today</div>
    <div class="timer">25:00</div>
    <div class="right">
      <vue-material-icon name="list" :size="36" classnname="mylist"></vue-material-icon>
      <vue-material-icon name="insert_chart" :size="36" classnname="chart"></vue-material-icon>
      <vue-material-icon name="library_music" :size="36" classnname="music"></vue-material-icon>
      <div class="a1">POMODORO</div>
    </div>
    <div class="big_circle">
      <div class="inner_circle">
        <button>
          <vue-material-icon name="play_circle_filled" :size="96" classnname="play"></vue-material-icon>
        </button>
      </div>
    </div>
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
  box-sizing: border-box;
}
.home {
  width: 1280px;
  height: 800px;
  background: #ffedf7 0% 0% no-repeat padding-box;
  position: relative;
  .big_circle {
    position: absolute;
    top: 130px;
    left: 560px;
    width: 540px;
    height: 540px;
    border: 4px solid #ff4384;
    opacity: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner_circle {
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: #ff4384;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /deep/ .play {
      color: white;
    }
  }
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
    padding: 19px 16px;
    background: white;
    user-select: none;

    & > input {
      color: black;
      font: Bold Italic 16px/19px Roboto;
      border: 0px;
      width: 100%;
      outline: none;
    }
    & > input::placeholder {
      color: #ff4384;
      font: Bold Italic 16px/19px Roboto;
      text-transform: uppercase;
    }
    &::after {
      content: "+";
      position: absolute;
      right: 16px;
      color: #ff4384;
      font: Bold 16px/19px Roboto;
    }
  }
  .right {
    position: relative;
    top: 0px;
    left: 830px;
    width: 450px;
    height: 800px;
    background: #003164 0% 0% no-repeat padding-box;
    color: white;
    /deep/ .mylist {
      position: absolute;
      top: 48px;
      right: 85px;
    }
    /deep/ .chart {
      position: absolute;
      top: 132px;
      right: 85px;
    }
    /deep/ .music {
      position: absolute;
      top: 216px;
      right: 85px;
    }
    /deep/ .a1 {
      position: absolute;
      top: 587px;
      right: 85px;
      font: 24px/32px Futura;
      writing-mode: vertical-lr;
    }
  }
}
</style>
