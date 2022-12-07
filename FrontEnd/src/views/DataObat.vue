<template>
    <div class="dataobat">
        <h1>Sayang</h1>
        <div class="flex justify-center h-full w-full ">
            <TableObat />
        </div>
    </div>
</template>

<script>
import TableObat from '../components/TableObat.vue'

export default{
    name: 'DataObat',
    components: {
        TableObat,
    }
}
</script>
