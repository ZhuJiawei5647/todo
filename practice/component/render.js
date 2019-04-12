import Vue from 'vue'

const component = {
  props: ['propone'],
  name: 'comp',
  // template: `
  //   <div>
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      // this.$slots.default,
      this.$slots.header,
      this.propone
    ])
  },
  data () {
    return {

    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  methods: {
    handlerClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one>
  //     <span>{{value}}</span>
  //   </comp-one>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        propone: this.value
      },
      // on: {
      //   click: this.handlerClick
      // }
      nativeOn: {
        click: this.handlerClick
      }
    }, [createElement('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>324</span>'
      },
      attrs: {
        id: 'test-id'
      }
    }, this.value)])
  }
})
