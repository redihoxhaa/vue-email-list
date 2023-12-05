'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            requestURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }

    },
    created() {

        for (let i = 0; i < 10; i++) {
            this.getEmail();
        }

    },
    methods: {

        getEmail() {
            axios.get(this.requestURL)
                .then((response) => {
                    this.emails.push(response.data.response);
                });
        },

    },
    mounted() {
    }
}).mount('#app')