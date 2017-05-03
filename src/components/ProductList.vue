<template>
    <table class="table table-hover table-product">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" track-by="id" v-on:click.prevent="onEdit(product)">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
                <a href="#" v-on:click.prevent.stop="onRemove(product)">Remove</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['products'],
        data () {
            return {}
        },
        methods: {
            onEdit (product) {
                this.$emit('edit', product)
            },
            onRemove (product) {
                this.$emit('remove', product)
            }
        }
    }
</script>
