<script>
export default {
    name: 'TableObat',
}
</script>

<template>
    <div class="flex flex-wrap justify-center">
        <p class="mb-6 mt-7 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Selamat Datang Di Halaman Data Obat. <br> Disini Ditampilkan Data Obat Apotik, Harap Berhati Hati Saat Merubah Data Obat</p>
        <div class="m-1 overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                    <tr>
                        <th scope="col" class="py-3 px-6">No</th>
                        <th scope="col" class="py-3 px-6">Nama Obat</th>
                        <th scope="col" class="py-3 px-6">Jenis Obat</th>
                        <th scope="col" class="py-3 px-6">Stok Obat</th>
                        <th scope="col" class="py-3 px-6">Kadaluarsa</th>
                        <th scope="col" class="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">1.</th>
                        <td class="py-4 px-6">Amoxcilin</td>
                        <td class="py-4 px-6">Kapsul</td>
                        <td class="py-4 px-6">5 Pack</td>
                        <td class="py-4 px-6">15.09.2025</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                                class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                                <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">2.</th>
                            <td class="py-4 px-6">Amoxcilin</td>
                            <td class="py-4 px-6">Sirup/Cair</td>
                            <td class="py-4 px-6">6 Dus</td>
                        <td class="py-4 px-6">13.04.2024</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                            class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">3.</th>
                        <td class="py-4 px-6">Mefenamic Acid</td>
                        <td class="py-4 px-6">Tablet</td>
                        <td class="py-4 px-6">10 pack</td>
                        <td class="py-4 px-6">28.01.2024</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                            class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">4.</th>
                        <td class="py-4 px-6">Promag</td>
                        <td class="py-4 px-6">Tablet</td>
                        <td class="py-4 px-6">20 Pack</td>
                        <td class="py-4 px-6">16.03.2024</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">5.</th>
                        <td class="py-4 px-6">Tolak Angin</td>
                        <td class="py-4 px-6">Sirup/Cair</td>
                        <td class="py-4 px-6">8 Pack</td>
                        <td class="py-4 px-6">28-02-2023</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">6.</th>
                        <td class="py-4 px-6">Bodrex</td>
                        <td class="py-4 px-6">Tablet</td>
                        <td class="py-4 px-6">6 Pack</td>
                        <td class="py-4 px-6">22.09.2026</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">7.</th>
                        <td class="py-4 px-6">Antangin</td>
                        <td class="py-4 px-6">Sirup/Cair</td>
                        <td class="py-4 px-6">2 Pack</td>
                        <td class="py-4 px-6">27.02.2026</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">8.</th>
                        <td class="py-4 px-6">Fatigon</td>
                        <td class="py-4 px-6">Kapsul</td>
                        <td class="py-4 px-6">10 Pack</td>
                        <td class="py-4 px-6">13.08.2023</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>