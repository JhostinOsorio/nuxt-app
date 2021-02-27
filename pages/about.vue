<template>
    <div>
        <h1>Esta es una nueva página de About</h1>
        <nuxt-link to="/">Regresar</nuxt-link>
    </div>
</template>

<script>
export default {
    async asyncData () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            return {
                users
            }
        } catch (error) {

        }
    },
    head() {
        return {
            title: this.users[0].name,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Esta es una página de about'
                },
                {
                    name: 'keywords',
                    content: 'Pagina about, Jhostin Osorio'
                }
            ],
        }
    },
}
</script>

<style>

</style>