<template>
<div>
 <Navbar/>




 
<div class="wrapper">
 

  <div class="content-wrapper">
     <router-link to="/signup" style="color:white">Home</router-link>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/login">Login</router-link>
          
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"><button @click="logout">Logout</button></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</div>
</template>
<script>

import Navbar from './Navbar.vue';

    export default {
       components:{
    Navbar
},
 methods: {
            logout() {
            
                 let tokenStr = localStorage.getItem("access_token");
                console.log(tokenStr);
                 this.axios
            .get('http://localhost:8000/api/logout', {
                headers: {
                    "Authorization": `Bearer ${tokenStr}`
                }
            })
             .then(response => {
                        console.log(response);
                        if (response.data.status == true) {
                        // window.location.href = 'http://localhost:8000/';
                         this.$router.push({
                        name: 'login'
                        });
                       
                       
                    }
                    })
            .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
}
</script>