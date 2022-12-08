<template>
    <div class="karyawanpage">
<div class="m-4">
        <div class="flex h-full w-full ">
            
            <TableKaryawan />
        </div>
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
