// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
var app = new Vue(
    {
        el: "#root",
        data:{
            emails: [],
        },
        methods: {
            generateEmails(){
                for(let i = 0;i < 10; i++){
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) =>
                    {
                        this.emails.push(response.data.response);
                    }
                );
                }
            }
        },
        mounted(){
            this.generateEmails();
        }
    }
)

