const constraints = {
    firstname: {
        presence: true,
        // length: {
        //     minimum : 1,
        //     message: "FIRSTNAME CAN'T BE BLANK"
        // },   
    },
    lastname: {
        presence: true,
        // length: {
        //     minimum : 1,
        //     message: "LASTNAME CAN'T BE BLANK"
        // }, 
    },
    email: {
        presence: true,
        email: true
    },
    message: {
        presence: false,
    },
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            message: null,
            errors: null,
            alert: false,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                },
                constraints)

            if (!this.errors) {
                this.alert = true
            }
            else if (this.errors) {
                this.alert = false
            }
           
            this.clearForm()



        },
        clearForm() {
            if (!this.firstname) {
                this.firstname = null
            }
            if (!this.lastname) {
                this.lastname = null
            }
            if (!this.email) {
                this.email = null
            }
            
        },
        toggleAlert() {
            this.alert = !this.alert
        }
    }
})

app.mount('#app')