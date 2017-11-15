<template>
<nav class="navbar navbar-default" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{navbar.title}}</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">

      <ul class="nav navbar-nav">
        <li v-for="row in navbar.navbar_left">
          <template v-if="row.dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
            <ul class="dropdown-menu" v-for="menu in row.dropdown">
              <li><a v-bind:href="menu.url">{{menu.name}}</a></li>
            </ul>
          </template>
          <template v-else>
            <a v-bind:href="row.url">{{row.name}}</a>          
          </template>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navbar: {
        navbar_left: [
          {name: 'Home', url: '#/home', dropdown:null},
          {name: 'Welcome', url: '#/', dropdown: [
            {name: 'Add New List', url: '#'},
            {name: 'Add New User', url: '#'}
          ]}
        ],
        navbar_right: [],
        title: 'VueJs'
      }
    }
  }
}
</script>