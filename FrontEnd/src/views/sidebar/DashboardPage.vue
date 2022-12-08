<template>
    <div class="dashboardpage">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, delectus, iure dolor repellat deserunt cupiditate architecto quam, odio earum aperiam aut vitae molestiae nam perspiciatis cumque fugit repudiandae? Architecto, omnis?</h1>
        <div class="flex justify-center h-full w-full ">
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
