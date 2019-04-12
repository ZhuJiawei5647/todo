import Vue from 'vue'

const component = {
  template: `
    <span>{{currentNumber}}</span>
  `,
  data () {
    return {
      currentNumber: 0
    }
  },
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  watch: {
    number: {
      handler () {
        this.numberIncrease()
      },
      immediate: true
    }
  },
  methods: {
    numberIncrease () {
      if (this.timer) clearTimeout(this.timer)
      let delteNumber = this.number - this.currentNumber
      if (Math.abs(delteNumber) < 1) {
        this.currentNumber = this.fixedNumber(this.number)
      } else {
        let increaseNumber = (this.number - this.currentNumber) / 5
        this.currentNumber = this.fixedNumber(increaseNumber + this.currentNumber, 2)
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.numberIncrease()
          }, 17)
        })
      }
    },
    fixedNumber (number, s) {
      return Number((number.toFixed(2) + '').replace(/^0*(\d*\.{0,1}\d*)0*$/, '$1'))
    }
  },
  mounted () {
    console.log('component')
  }
}

// const CmpVue = Vue.extend(component)

// new CmpVue({
//   el: '#root',
//   propsData: {
//     number: 1000
//   },
//   methods: {
//     setInterval () {
//       if (this.number <= 500) return
//       setTimeout(() => {
//         this.number -= 10
//         this.setInterval()
//       }, 200)
//     }
//   },
//   mounted () {
//     this.setInterval()
//     // setTimeout(() => {
//     //   this.number -= 500
//     // }, 200)
//   }
// })

new Vue({
  el: '#root',
  template: `
    <div @keypress.enter="keyEnter">
      <input v-model.number.lazy="number" />
      <comp :number="number"></comp>
    </div>
  `,
  data () {
    return {
      number: 1000
    }
  },
  components: {
    comp: component
  },
  methods: {
    setInterval () {
      if (this.number <= 500) return
      setTimeout(() => {
        this.number -= 10
        this.setInterval()
      }, 200)
    },
    keyEnter ($event) {
      $event.target.blur()
    }
  },
  mounted () {
    // this.setInterval()
    // setTimeout(() => {
    //   this.number -= 500
    // }, 200)
  }
})
