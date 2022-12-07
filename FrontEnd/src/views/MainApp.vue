<template>
    <div class="mainapp">
        <div class="flex">
            <SideBar />
            <router-view/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '../components/SideBar.vue'

export default {
    name: 'MainApp',
    components:{
        SideBar
    }
}
</script>
