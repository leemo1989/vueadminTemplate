import router from './router'

router.beforeEach((to, from,next) => {
    console.log(to,from);
    const token = window.localStorage.getItem('token')
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
