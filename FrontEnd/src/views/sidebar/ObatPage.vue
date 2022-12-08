<template>
    <div class="obatpage">
        <div class="flex justify-center h-full w-full">
            <TableObat />
        </div>
    </div>
</template>

<script>
import TableObat from '../../components/TableObat.vue'

export default{
    name: 'ObatPage',
    components: {
        TableObat,
    }
}
</script>
