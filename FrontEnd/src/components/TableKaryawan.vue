<script>
export default {
    name: 'TableKaryawan',
}
</script>

<template>
    <div>
        <div class="m-4 overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">Nama</th>
                        <th scope="col" class="py-3 px-6">Jenis Kelamin</th>
                        <th scope="col" class="py-3 px-6">Posisi</th>
                        <th scope="col" class="py-3 px-6">Status</th>
                        <th scope="col" class="py-3 px-6">Gaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Maya Dwi Anggraini</th>
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