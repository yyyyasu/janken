<template>
  <div id="game">
    <div>
      <P>やすひろの手:{{ yasuhiroHand }}</P>
      <p>あなたの手: {{ myHand }}</p>
    </div>

    <button v-on:click="janKen('ぐー')">ぐー</button>
    <button v-on:click="janKen('ちょき')">ちょき</button>
    <button v-on:click="janKen('ぱー')">ぱー</button>

    <div>
      <p>結果:{{ result }}</p>
      <p>勝ち星:{{ winCount }}</p>
      <p>負け星:{{ loseCount }}</p>
      <p>引き分け:{{ drawCount }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "game",
  data: () => ({
    myHand: "",
    yasuhiroHand: "",
    handArr: ["ぐー", "ちょき", "ぱー"],
    result: "",
    winCount: 0,
    loseCount: 0,
    drawCount: 0
  }),
  methods: {
    janKen(myHand) {
      // やすひろの手をランダムで決める
      // 0 1 2のの数字を生成
      let index = Math.floor(Math.random() * Math.floor(3));
      this.yasuhiroHand = this.handArr[index];
      this.myHand = myHand;
      // 自分の手とやすひろの手を比較する
      console.log("やすひろの手:" + this.yasuhiroHand);
      console.log("自分の手:" + this.myHand);
      // 引き分け判定
      if (this.myHand === this.yasuhiroHand) {
        console.log("引き分け");
        this.result = "引き分け";
        this.drawCount++;
      }
      if (this.yasuhiroHand === "ぐー" && this.myHand === "ぱー") {
        console.log("勝ち");
        this.result = "勝ち";
        this.winCount++;
      }
      if (this.yasuhiroHand === "ちょき" && this.myHand === "ぐー") {
        console.log("勝ち");
        this.result = "勝ち";
        this.winCount++;
      }
      if (this.yasuhiroHand === "ぱー" && this.myHand === "ちょき") {
        console.log("勝ち");
        this.result = "勝ち";
        this.winCount++;
      }

      // 負け判定
      if (this.yasuhiroHand === "ぐー" && this.myHand === "ちょき") {
        console.log("負け");
        this.result = "負け";
        this.loseCount++;
      }
      if (this.yasuhiroHand === "ちょき" && this.myHand === "ぱー") {
        console.log("負け");
        this.result = "負け";
        this.loseCount++;
      }
      if (this.yasuhiroHand === "ぱー" && this.myHand === "負け") {
        console.log("負け");
        this.result = "負け";
        this.loseCount++;
      }
    }
  }
};
</script>
