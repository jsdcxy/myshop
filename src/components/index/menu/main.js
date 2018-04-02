import Vue from 'vue'

export default {
    data() {
        return {
            menus: []
        }
    },
    created() {
        this.getMenus()

    },
    methods: {
        getMenus() {
            Vue.$http.get('/menus').then(res => {
                this.menus =res.data
                // console.log(this.menus)
                console.log(this.menus[0].src)
            }).catch(function (error) {
                console.log(error);
              });
        }
    }
}