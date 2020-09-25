<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import apiSer from '../service/index';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // name: any;
  public code: number[] = [1, 3, 4, 31, 2, 3, 4, 31, 2, 3, 4, 31, 2, 3, 4, 3];
  public h: boolean[] = this.code.map(item => item === 3)
  public name1ada: string = '123';
  public created(): void {
    apiSer.getWether().then((data: object) => {
      if (data) {
        // console.log(data, '222222')
      }
    })
  }
}
// apiSer.getDepart().then((data: object) => {
//   console.log('111111');
// })
interface ITestInterface {
  a: string;
  b: string;
}
</script>