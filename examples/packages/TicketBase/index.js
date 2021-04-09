import TicketBase from './main'
TicketBase.install = function(Vue) {
    Vue.component(TicketBase.name, TicketBase)
}
export default TicketBase