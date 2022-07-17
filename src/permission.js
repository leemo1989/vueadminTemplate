import router from './router'

router.beforeEach((to, from,next) => {
    console.log(from.fullPath,'--->',to.fullPath);
    const token = localStorage.getItem('token')
    console.log(token);
    if (to.fullPath !== '/login' && !token ){
        next({'name':'UserLogin'})
    }
    if(to.fullPath === '/login' && token){
        next('/dashboard')
    }
    else{
        next()
    }
    return false
})
