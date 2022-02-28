<template>
  <div>
       <Navbar/>
      <div class="wrapper">
 

  <div class="content-wrapper">
        <section class="content">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <!-- left column -->
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="login" enctype="multipart/form-data">
                <div class="card-body">
                 
                  <div class="form-group">
                    <label for="exampleInputPassword1">Category Name</label>
                    <input v-model="product.name" type="text" class="form-control" id="exampleInputPassword1" placeholder="Category Name">
                  </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">Image</label>
                    <input v-on:change="onImageChange"  type="file" class="form-control" id="exampleInputPassword1" placeholder="Image">
                  </div>
                
                 
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

            <!-- /.card -->

          </div>
        </div>
      </div>
        </section>
  </div>
      </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
     components:{
    Navbar
},
     data() {
            return {
                product: {
                   
                    name:'',
                    image:''
                },
                 
              
            }
        },
         methods: {
             onImageChange(e){
                console.log(e.target.files[0]);
                this.product.image = e.target.files[0];
            },
            login() {

                 let formData = new FormData();
                formData.append('image', this.product.image);
                formData.append('name', this.product.name);

                 let tokenStr = localStorage.getItem("access_token");

                  const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                this.axios
                    .post('http://localhost:8000/api/addcategory', formData, {
                headers: {
                    "Authorization": `Bearer ${tokenStr}`
                }
            })
                    .then(response => {
                        console.log(response.data);
                        if (response.data.status == true) {
                        // window.location.href = 'http://localhost:8000/';
                        
                       console.log('status ok hai yar');
                       
                         window.localStorage.setItem('access_token', response.data.access_token);
                        //  this.$router.replace({ name: "home"}).catch(()=>{});
                         window.location.href = 'http://localhost:8000/';
                     
                    }
                    })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }

}
</script>

<style>

</style>