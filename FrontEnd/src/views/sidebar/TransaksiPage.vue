<template>
    <div class="transaksipage">
        <div class="flex justify-center h-full w-full">
            <TabelTransaksi />
        </div>
    </div>
</template>

<script>
import TabelTransaksi from '../../components/TabelTransaksi.vue'

export default {
    name: 'TransaksiPage',
    components: {
        TabelTransaksi,
    }
}
</script>
