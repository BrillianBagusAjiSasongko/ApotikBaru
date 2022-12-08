<script>
export default {
    name: 'TableKaryawan',
}
</script>

<template>
    <div class="flex flex-wrap justify-center">
        <p class="mb-6 mt-7 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Selamat Datang Di Halaman Karyawan.<br> Disini Ditampilkan Data Data Karyawan Apotik, Harap Berhati Hati Saat Merubah Data Karyawan</p>
        <div class="m-1 overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" class="py-3 px-6">No</th>
                        <th scope="col" class="py-3 px-6">Nama</th>
                        <th scope="col" class="py-3 px-6">Jenis Kelamin</th>
                        <th scope="col" class="py-3 px-6">Posisi</th>
                        <th scope="col" class="py-3 px-6">Status</th>
                        <th scope="col" class="py-3 px-6">Gaji</th>
                        <th scope="col" class="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">1.</th>
                        <td class="py-4 px-6">Maya Dwi Anggraini</td>
                        <td class="py-4 px-6">Perempuan</td>
                        <td class="py-4 px-6">Staff Apoteker</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                                class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                                <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">2.</th>
                            <td class="py-4 px-6">Eisa Gita Ardhani</td>
                            <td class="py-4 px-6">Perempuan</td>
                            <td class="py-4 px-6">Staff Apoteker</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                            class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">3.</th>
                        <td class="py-4 px-6">Alip Lolita Trisna Putri</td>
                        <td class="py-4 px-6">Perempuan</td>
                        <td class="py-4 px-6">Staff Administrasi</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                            class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                            class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">4.</th>
                        <td class="py-4 px-6">Mey Dhea Dewi Fajar Lisanti</td>
                        <td class="py-4 px-6">Perempuan</td>
                        <td class="py-4 px-6">Staff Administrasi</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">5.</th>
                        <td class="py-4 px-6">Rinda Ika Meidiyanti</td>
                        <td class="py-4 px-6">Perempuan</td>
                        <td class="py-4 px-6">Costumer Service</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">6.</th>
                        <td class="py-4 px-6">Aldi Reisananda</td>
                        <td class="py-4 px-6">Laki-Laki</td>
                        <td class="py-4 px-6">Costumer Service</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">7.</th>
                        <td class="py-4 px-6">Renaldi Wahyu Ramadhan</td>
                        <td class="py-4 px-6">Laki-Laki</td>
                        <td class="py-4 px-6">Staff IT</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
                        <td class="py-4 px-6">
                            <a href="#"
                                class="font-medium p-2 text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#"
                            class="font-medium p-2 text-yellow-600 dark:text-yellow-500 hover:underline">Details</a>
                            <a href="#"
                                class="font-medium p-2 text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">8.</th>
                        <td class="py-4 px-6">Alfanda Nafarida Novianti</td>
                        <td class="py-4 px-6">Perempuan</td>
                        <td class="py-4 px-6">Staff IT</td>
                        <td class="py-4 px-6">Aktif</td>
                        <td class="py-4 px-6">2000000</td>
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