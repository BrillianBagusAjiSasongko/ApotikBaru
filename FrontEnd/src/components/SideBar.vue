<script>

</script>

<template>
    <div>
        <div class=" min-h-screen sticky top-0 flex p-0 m-0">
            <div class="bg-blue-600 flex flex-col w-64 p-6 box-border">
                <div class="flex flex-row text-center py-[12px] px-[10px] rounded-lg h-10 box-border">
                    <span class="not-italic font-bold text-[18px] leading-4 text-center text-black">Apotik Sayang</span>
                </div>
                <div class="flex flex-col" >
                    <RouterLink to="/dashboardpage" active-class="active">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none">
                        Dashboard
                    </div></RouterLink>
                    <RouterLink to="/karyawanpage">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none">
                        Karyawan
                    </div></RouterLink>
                    <RouterLink to="/obatpage">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none">
                        Data Obat
                    </div></RouterLink>
                    <RouterLink to="/transaksipage">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none">
                        Transaksi
                    </div></RouterLink>
                    <RouterLink to="/aboutpage">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-white hover:text-black active:bg-white active:text-black focus:outline-none">
                        Contact And About
                    </div></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>