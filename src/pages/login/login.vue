<template>
<div class="box">
    <div class="con">
        <h2>登录</h2>
        <div class="inp"><input type="text" v-model="user.username"></div>
        <div class="inp"><input type="text" v-model="user.password"></div>
        <div class="inp"><button @click="login">登录</button></div>
    </div>
    
</div>
</template>
<script>
import {requserLogin} from '../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters({

        })
    }, 
components:{
 },
data () {
return {
    user:{
        username:'',
        password:''
    }
}
},
methods:{
    ...mapActions({
        requestuserList:'user/requestuserList'
    }),
    login(){
        requserLogin(this.user).then(res=>{
            if(res.data.code==200){
                this.requestuserList(res.data.list)
                this.$router.push('/index/home')
            }else{
                alert(res.data.msg)
            }
        })
        
    }
},
mounted(){
}
}
</script>
<style>
.box {
    width: 100vw;
    height: 100vh;
    background:linear-gradient(to right,pink,lightblue);
}
.con {
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
h2 {
    text-align: center;
    padding: 15px;
}
.inp input {
    width: 100%;
    height: 30px;

}
.con .inp {
    width: 60%;
    height: 30px;
     margin: 30px auto;
}
.inp button {
    width: 100%;
    height: 30px;
    background: orangered;
    outline: none;
    border: 0;
    color: #fff;
    font-weight: bold;
}


</style>