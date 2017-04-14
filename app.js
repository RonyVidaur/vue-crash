new Vue({
  el: '#vue-app',
  data: {
    name: "Rony",
    job: "Owl",
    website: "https://ronyvidaur.github.io",
    websiteTag: '<a href="http://twitter.com">Twitter</a>',
    age: 23
  },
  methods: {
    greet: function(time) {
      return `Good ${time} ${this.name}`
    },
    add: function(inc) {
      this.age += inc
    },
    subtract: function(dec) {
      this.age -= dec
    }
  }
})
