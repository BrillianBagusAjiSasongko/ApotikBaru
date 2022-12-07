<script>
export default {
    name: 'TableObat',
}
</script>

<template>
    <div class="p-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="table-auto text-left text-sm text-gray-500">
                <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">No</th>
                        <th scope="col" class="py-3 px-6">Nama  Obat</th>
                        <th scope="col" class="py-3 px-6">Kategori</th>
                        <th scope="col" class="py-3 px-6">Stok</th>
                        <th scope="col" class="py-3 px-6">Harga</th>
                        <th scope="col" class="py-3 px-6 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <th scope="row" class="whitespace-nowrap py-4 px-6 font-medium text-gray-900">{{}}</th>
                        <td class="py-4 px-6">{{}}</td>
                        <td class="py-4 px-6">{{}}</td>
                        <td class="py-4 px-6">{{}}</td>
                        <td class="py-4 px-6">{{}}</td>
                        <td class="text py-4 px-6 text-center">
                            <a href="#" class="inline-flex items-center rounded-lg bg-blue-500 px-4 py-1 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">Edit</a>
                            <a href="#" class="inline-flex items-center rounded-lg bg-red-500 px-4 py-1 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>