<template>
    <div class="dataobat">
        <div class="flex justify-center items-center h-full w-full ">
            <TableObat />
        </div>
    </div>
</template>

<script>
import TableObat from '@/components/TableObat.vue'

export default{
    name: 'DataObat',
    components: {
        TableObat,
    }
}
</script>
