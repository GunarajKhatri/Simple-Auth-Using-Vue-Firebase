<template>
<div style="width:400px;height:402px;margin-top:100px;position: fixed;left:50%;transform: translateX(-50%);">
<div class="card">
  <br> 
  <p class="card-title text-secondary text-center text-secondary" style="font-size:24px;font-weight:600; color:rgb(68,34,86);">Sign Up</p>  
  <div class="card-body">
    <form  @submit.prevent="register()">
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email" required>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" required>
  </div>
  <div class="form-group">  
  <button type="submit" class="btn btn-primary form-control">Submit</button>
  </div>
</form>
 </div>
</div>
</div>
</template>
<script>
  export default {
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      register(){
        this.$store.dispatch('register',{
          email:this.email,
          password:this.password
        }).then(()=>{
          alert('Registered successfull !!')
          this.$router.push('/login')
        })
      }
    }
  }
</script>