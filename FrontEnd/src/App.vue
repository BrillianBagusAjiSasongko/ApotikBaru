<script>
//import SideBarVue from './components/SideBar.vue';
import DataObatVue from './components/DataObat.vue';

export default{
  name: 'AppBar',
  components:{
    DataObatVue,
  }
}
</script>

<template>
  <nav>
    <div>

      <DataObatVue/>
    </div>
  </nav>
</template>
