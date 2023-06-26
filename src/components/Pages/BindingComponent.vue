<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <p>
      <span v-html="htmlBindingDirectives"></span>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 v-bind:id="idBinding" :class="classArrayBinding" v-text="textBindingDirectives"></h3>
    <ul v-if="!data">
      <li :class="classBinding" class="red">Data format wrong</li>
    </ul>
    <ul v-else-if="data.length === 0">
      <li :class="classBinding" class="red">No data found</li>
    </ul>
    <ul v-else>
      <li v-for="(x, index) in data" :key="index">
        <a v-bind:href="x.link" target="_blank" rel="noopener">{{ x.text }}</a>
      </li>
    </ul>
    <div :style="[baseStyleObject, successStyleObject]">Success Style</div>
    <div :style="[baseStyleObject, dangerStyleObject]" v-show="false">Danger Style</div>
    <h2>{{ count }}</h2>
    <div>
      <button @click="increment(1, $event)">Increment</button>
      <button @click="decrement(1)">Decrement</button>
      <button @click="count += 5">Increment 5</button>
      <button @click="count -= 5">Decrement 5</button>
    </div>
    <div>
      <h2><span v-on:mouseenter="name = 'Batman'" v-on:mouseleave="name = 'Joker'">{{ name }}</span></h2>
      <h2>
        <button @click="ToggleName">Toggle</button>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BindingComponent',
  props: {
    msg: String
  },
  data() {
    return {
      data: '',
      textBindingDirectives: textBindingDirectives,
      htmlBindingDirectives: htmlBindingDirectives,
      idBinding: 'headingId',
      classBinding: 'headingClass',
      classArrayBinding: classArrayBinding,
      baseStyleObject: {
        fontSize: '50px',
        padding: '10px',
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green',
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        border: '1px solid darkred',
      },
      count: 0,
      name: 'Batman'
    };
  },
  methods: {
    increment(num, event) {
      this.count += num
      console.log(event)
    },
    decrement(num) {
      this.count -= num
    },
    ToggleName() {
      if (this.name == "Batman") {
        this.name = "Joker";
      }
      else {
        this.name = "Batman";
      }
    }
  }
}
let data = [
  {
    link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
    text: "babel"
  },
  {
    link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
    text: "eslint"
  }
];
let textBindingDirectives = "Installed CLI Plugins";
let htmlBindingDirectives = "For a guide and recipes on how to configure / customize this project,<br>check out the";
let classArrayBinding = ['head', 'light', 'green'];
console.log(data.length);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.headingClass {
  color: red;
}
</style>
