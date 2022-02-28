<template>
    <div>
     <Navbar/>
<div class="wrapper">
 

  <div class="content-wrapper">
      <div class="container">
          <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for='product in products' :key='product.id'>
                    <td>{{product.id}}</td>
                    <td>{{product.name}}
                    </td>
                    <td>{{product.email}}</td>
                    <td>{{product.created_at}}</td>
                  
                  </tr>
                  
                
                  </tbody>
          
                </table>
              </div>
              <!-- /.card-body -->
            </div>

    </div>
    </div>
</div>
    </div>

</template>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js" defer></script>
<script>

 $(document).ready(function() {
    $('#example').DataTable();
});


import Navbar from './Navbar.vue'
    export default {
        components:{
            Navbar
        },
      data() {
            return {
                products: [],
              
            }
        },
        methods: {
            showBlogs: function () {
                axios.get('/users').then(function (res) {
                    console.log(res);
                    this.products = res.data;
                    console.log(this.products);
                }.bind(this));
            }
        },
        created: function () {
            this.showBlogs()
        }
    }

</script>