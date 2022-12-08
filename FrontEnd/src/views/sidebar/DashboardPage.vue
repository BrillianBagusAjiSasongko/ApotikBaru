<template>
    <div class="dashboardpage">
        <div class="flex justify-center h-full w-full">
            <DashBoard />
        </div>
    </div>
</template>

<script>
import DashBoard from '../../components/DashBoard.vue'

export default{
    name: 'DashboardPage',
    components: {
        DashBoard,
    }
}
</script>
