<script>
export default {
    name: 'TableObat',
}
</script>

<template>
    <div>
        
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="py-3 px-6">Nama</th>
                <th scope="col" class="py-3 px-6">Jenis Kelamin</th>
                <th scope="col" class="py-3 px-6">Posisi</th>
                <th scope="col" class="py-3 px-6">Status</th>
                <th scope="col" class="py-3 px-6">Gaji</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Maya Dwi Anggraini</th>
                <td class="py-4 px-6">Perempuan</td>
                <td class="py-4 px-6">Karywan</td>
                <td class="py-4 px-6">Aktif</td>
                <td class="py-4 px-6">2000000</td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
</template>