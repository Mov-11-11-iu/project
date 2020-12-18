import axios from 'axios'
import qs from 'qs'

const baseUrl='/api'

// 相应拦截
axios.interceptors.response.use(res=>{
    console.log('============请求的路径:'+res.config.url+'============')
    console.log(res)
    return res
})

// 菜单模块
// 菜单添加
export const reqMenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}
// 菜单列表
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
}
// 单个
export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
}

// 菜单编辑
export const reqMenuEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}
// 菜单删除
export const reqMenuDel=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}

///////////////////////角色管理///////////////////////////
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}


export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get',
        
    })
}


export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
    })
}

export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:id
    })
}

export const reqRoleDel=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:id
    })
}

///////////////////////管理员管理///////////////////////////
export const requserAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:data
    })
}


export const requserList=(params)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:params
        
    })
}


export const requserListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:id
    })
}

export const requserEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:id
    })
}

export const requserDel=(id)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:id
    })
}

export const requserCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
     
    })
}
// 管理员登录
export const requserLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}
///////////////////////商品分类管理///////////////////////////
export const reqcateAdd=(data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:form
    })
}


export const reqcateList=(params)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:params
        
    })
}


export const reqcateListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:id
    })
}

export const reqcateEdit=(data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:form
    })
}

export const reqcateDel=(id)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
        data:id
    })
}
///////////////////////商品规格管理///////////////////////////
export const reqspecsAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/specsadd',
        method:'post',
        data:data
    })
}


export const reqspecsList=(params)=>{
    return axios({
        url:baseUrl+'/api/specslist',
        method:'get',
        params:params
        
    })
}


export const reqspecsListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/specsinfo',
        method:'get',
        params:id
    })
}

export const reqspecsEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/specsedit',
        method:'post',
        data:data
    })
}

export const reqspecsDel=(id)=>{
    return axios({
        url:baseUrl+'/api/specsdelete',
        method:'post',
        data:id
    })
}


//////////////////////////商品管理///////////////////////////////////
// 商品管理添加
export const reqgoodsAdd=(data)=>{
    // 由于上传的是文件 所以需要用qs转一下
    var form  = new FormData()
    // {pid:1,goodsname:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/goodsadd',
        method:'post',
        data:form
    })
}
// 商品管理列表
export const reqgoodsList=(params)=>{
    return axios({
        url:baseUrl+'/api/goodslist',
        method:'get',
        params:params
    })
}

// 商品管理一条数据
export const reqgoodsListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/goodsinfo',
        method:'get',
        params:id
    })
}

// 商品管理编辑
export const reqgoodsEdit=(data)=>{
    var form  = new FormData()
    // {pid:1,goodsname:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/goodsedit',
        method:'post',
        data:form
    })
}

// 商品管理删除
export const reqgoodsDel=(id)=>{
    return axios({
        url:baseUrl+'/api/goodsdelete',
        method:'post',
        data:id
    })
}



