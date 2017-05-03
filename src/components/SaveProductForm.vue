<template>
    <form>
        <div class="form-group">
            <label for="productName">Product name</label>
            <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32"
                   placeholder="Enter product name">
        </div>
        <div class="form-group">
            <label for="productDescription">Product description
                <small class="text-muted">(optional)</small>
            </label>
            <textarea class="form-control" v-model="product.description" id="productDescription" rows="3"
                      maxlength="128" placeholder="Enter description"></textarea>
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price"
                   number>
        </div>

        <div v-if="product.id !== null">
            <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Update product</button>
            <button v-on:click.prevent="onCancel" class="btn btn-warning">Cancel</button>
        </div>
        <div v-else>
            <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save product</button>
        </div>

    </form>
</template>

<script>
    export default {
        props: ['product'],
        methods: {
            onSubmit () {
                this.$emit('submit', this.product)
            },
            onCancel () {
                this.$emit('cancel')
            }
        },
        data () {
            return {}
        }
    }
</script>
