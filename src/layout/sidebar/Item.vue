<template>
  <div class="item">
    <template
      v-if="props.item.children && props.item.path && props.item.component"
    >
      <el-menu-item :index="props.item.path">
        <el-icon><Setting /></el-icon>
        <span>{{ props.item.menuName }}</span>
      </el-menu-item>
    </template>
    <template v-if="props.item.children && props.item.path && props.item.icon">
      <el-sub-menu :index="props.item.path">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>{{ props.item.menuName }}</span>
        </template>
        <Item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
        ></Item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { Setting } from '@element-plus/icons-vue'
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
