<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <router-link v-if="item.children.length===1&&!item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" >
          <i :class="item.children[0].iconCls"></i>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
            <i :class="item.iconCls"></i>
          <span >{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true"  v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
                  <i class="fa fa-genderless"></i>
              <span >{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>



<!-- <template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
        <el-menu-item v-if="item.children.length===1&&!item.children[0].children"  :index="item.path+'/'+item.children[0].path" >
          <i :class="item.children[0].iconCls"></i>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>


      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
            <i :class="item.iconCls"></i>
          <span >{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true"  v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
            <el-menu-item v-else  :index="item.path+'/'+child.path">
                  <i :class="item.iconCls"></i>
              <span >{{child.name}}</span>
            </el-menu-item>
        </template>
      </el-submenu>

    </template>
  </div>
</template> -->

<script>

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style  scoped>

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
</style>
