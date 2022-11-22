<template>
    <div class="container">
        <div class="sidebar">
            <div class="header">
                <div class="list">
                    <span class="headdesc">Apotik Sayang</span>
                </div>
            </div>
            <div class="main">
                <div class="list">
                    <a href="#">
                        <span class="description">Dashboard</span>
                    </a>
                    <a href="#">
                        <span class="description">Karyawan</span>
                    </a>
                    <a href="#">
                        <span class="description">Data Obat</span>
                    </a>
                    <a href="#">
                        <span class="description">Transaksi</span>
                    </a>
                    <a href="#">
                        <span class="description bg-indigo-500 opacity-100">Contact And About</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'SideBar'
}
</script>

<style>
@import url(https://fonts.google.com/specimen/Ubuntu);

*{
    font-family: Ubuntu;
    padding: 0;
    margin: 0;
}

.container{
    display: flex;
    min-height: 100vh;
    background-color: #eeeeee;
}

.sidebar{
    background-color: #111827;
    flex-direction: row;
    width: 260px;
    padding: 24px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}

.sidebar a{
    text-decoration: none;
    flex-direction: row;
    text-align: left;
    padding: 12px 10px;
    border-radius: 8px;
    width: 212px;
    box-sizing: border-box;
    transition: all ease-in .1s;
}

.sidebar a:hover{
    background-color: #ff9900;
    transition: all ease-in .1s
}

.sidebar .header .list{
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 12px 10px;
    border-radius: 8px;
    height: 40px;
    box-sizing: border-box;
}

.sidebar .headdesc{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
}
.sidebar .main .list .description{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
}

.sidebar .main .list .icon{
    margin-right: 12px;
}
.sidebar .main .list{
    display: flex;
    flex-direction: column;
    
}
</style>