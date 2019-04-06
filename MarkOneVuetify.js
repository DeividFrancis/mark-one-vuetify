import MkHello from './components/MkHello.vue'

const MarkOneVuetify = {
    install: (Vue, options) => {
        Vue.component(MkHello.name, MkHello)
    }
}

export default MarkOneVuetify;