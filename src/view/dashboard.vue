<template>
  <el-card>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <p>{{globalStore().getRouters()}}</p>
  </el-card>

</template>

<script>
import { ref } from 'vue'
import router from '@/router'
import { globalStore } from '@/store/modules/global'

export default {
  name: 'dashBoard',
  setup () {
    console.log(11111, router)
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    const tableData = ref(Array.from({ length: 20 }).fill(item))
    console.log(globalStore(), 8888)
    return {
      item,
      tableData,
      globalStore
    }
  }
}
</script>

<style scoped>

</style>
