<template>
    <div class="karyawanpage">
        <div class="flex justify-center h-full w-full">
            <TableKaryawan />
        </div>
    </div>
</template>

<script>
import TableKaryawan from '../../components/TableKaryawan.vue'

export default{
    name: 'KaryawanPage',
    components: {
        TableKaryawan,
    }
}
</script>
