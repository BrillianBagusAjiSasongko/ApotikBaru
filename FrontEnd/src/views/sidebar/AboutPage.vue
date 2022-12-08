<template>
    <div class="aboutpage">
        <div class="flex justify-center h-full w-full">
            <AboutItem />
        </div>
    </div>
</template>

<script>
import AboutItem from '../../components/AboutItem.vue'

export default{
    name: 'AboutPage',
    components: {
        AboutItem,
    }
}
</script>
