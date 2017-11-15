<template>

<b-navbar toggleable="md" type="light" variant="light">
  
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">{{navbar.title}}</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item v-for="item in navbar.navbar_left" v-bind:href="item.url">{{item.name}}</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Login</b-dropdown-item>
        <b-dropdown-item href="#">Logout</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navbar: {
        navbar_left: [
          {name: 'Welcome', url: '#/', dropdown: null},
          {name: 'Home', url: '#/home', dropdown: [
            {name: 'Add New List', url: '#'},
            {name: 'Add New User', url: '#'}
          ]},{
            name: 'Purchase Order', url: '#/purchase-order'
          },{
            name: 'Users', url: '#/user-list'
          }
        ],
        navbar_right: [],
        title: 'VueJs'
      }
    }
  }
}
</script>