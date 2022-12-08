<template>
    <div class="mainapp">
        <div class="flex">
            <aside class="h-screen sticky top-0">
                <SideBar />
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
    name: 'MainApp',
    components: {
        SideBar
    }
}
</script>
