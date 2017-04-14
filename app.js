new Vue({
  el: '#vue-app',
  data: {
    name: "Rony",
    job: "Owl",
    website: "https://ronyvidaur.github.io",
    websiteTag: '<a href="http://twitter.com">Twitter</a>'
  },
  methods: {
    greet: function(time) {
      return `Good ${time} ${this.name}`
    }
  }
})
