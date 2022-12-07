<script>
export
</script>

<template>
    <div>
        <div class="min-h-screen flex bg-[#eeeeee] p-0 m-0">
            <div class="bg-[#0ea5e9] flex flex-col w-64 p-6 box-border">
                <div class="flex flex-row text-center py-[12px] px-[10px] rounded-lg h-10 box-border">
                    <span class="not-italic font-bold text-[18px] leading-4 text-center text-black">Apotik Sayang</span>
                </div>
                <div class="flex flex-col" >
                    <RouterLink to="/" active-class="ac">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-[#eeeeee] hover:text-black active:bg-[#eeeeee] active:text-black focus:outline-none">
                        Dashboard
                    </div></RouterLink>
                    <RouterLink to="/">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-[#eeeeee] hover:text-black active:bg-[#eeeeee] active:text-black focus:outline-none">
                        Karyawan
                    </div></RouterLink>
                    <RouterLink to="/dataobat">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-[#eeeeee] hover:text-black active:bg-[#eeeeee] active:text-black focus:outline-none">
                        Data Obat
                    </div></RouterLink>
                    <RouterLink to="/">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-[#eeeeee] hover:text-black active:bg-[#eeeeee] active:text-black focus:outline-none">
                        Transaksi
                    </div></RouterLink>
                    <RouterLink to="/">
                    <div class="no-underline not-italic font-normal text-base flex-row text-left rounded-lg w-52 box-border py-[12px] px-[10px] text-white hover:bg-[#eeeeee] hover:text-black active:bg-[#eeeeee] active:text-black focus:outline-none">
                        Contact And About
                    </div></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>