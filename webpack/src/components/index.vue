<template>
    <div>
        <select>
            <option v-for="opt in opts" :key="opt">{{opt}}</option>
        </select> 
        <button @click="add">按钮</button>
    </div>
</template>

<script>

export default {
    name:'index',
    data() {
        return {
            opts:[],
            num:1
        }
    },
    methods: {
        add(){
            this.opts.push(this.num)
            this.num++
        }
    },
}
</script>

<style>

</style>