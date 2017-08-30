// eslint-disable-next-line
Vue.config.productionTip = false
// eslint-disable-next-line
var myApp = new Vue({
  el: '#app',
  data: {
    screen: 0,
    turn: '',
    playerData: {
      one: {
        symbol: 'X',
        score: 0
      },
      two: {
        symbol: 'O',
        score: 0
      }
    },
    isComputer: true
  },
  created () {},
  mounted () {},
  watch: {},
  computed: {},
  methods: {
    setPlayerSymbol (symbol) {
      this.playerData.one.symbol = symbol
      this.playerData.two.symbol = symbol === 'X' ? 'O' : symbol
      this.skipScreen()
    },
    setGameType (type) {
      this.isComputer = type
      this.skipScreen()
    },
    skipScreen () {
      this.screen += 1
    },
    resetScreen () {
      this.screen = 0
      this.isComputer = true

      Object.keys(this.playerData).forEach((type) => {
        this.playerData[type].score = 0
      })
    }
  }
})
