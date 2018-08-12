<template>
  <div class="inventory">
    <h3>Station 7 Inventory</h3>

    <div class="inventoryWrapper">
      <Item
        v-for="item in inventory"
        :key="item.name"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
      ></Item>
    </div>
  </div>
</template>



<script>
  import Item from '@/components/GUI/Item'

  export default {
    components: {
      Item
    },
    name: 'Inventory',
    props: {
      inventory: {
        type: Array,
        default: [
          { name: 'Graphene Dust' }
        ]
      }
    }
  }
</script>


<style scoped>
  .inventoryWrapper {
    display: flex;
    flex-flow: row wrap;
  }

  .inventoryWrapper > * {
    flex: 1 1 100%;
  }
</style>
