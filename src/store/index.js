import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../utilities/firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        error:'',
        success:'',
        isLoggedin:'',
        LoggedUser:{}
    },
    getters:{
        loggedin(state){
            return state.isLoggedin!=null;
        }      
    },
    actions:{
        login(context,payload){
            return new Promise(()=>{
                    firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then((response)=>{
                        console.log(response)
                        context.commit('LOGIN_SUCCESS',payload.email)
                    })
                    .catch((error)=> {
                        context.commit('LOGIN_ERROR',error.message)
                    });
            })

        },
        register(context,payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then((response)=>{
                console.log(response)
            })
            .catch((error)=> {
                console.log(error)
            });
        },
        login_status(context){
            firebase.auth().onAuthStateChanged((user)=>{
                if (user) {
                    context.commit('LoggedUser',user)
                }
                else {
                    context.state.isLoggedin=false
                }
            });

        },
        logout(context){

            firebase.auth().signOut().then(()=>{
                context.commit('Logout')
                }).catch((error)=>{
                    console.log(error)
            });
        }
        
    },
    mutations:{
        LOGIN_ERROR(state,payload){
            state.error=payload
            alert('Invalid credential !! Please enter valid one ')
        },
        LOGIN_SUCCESS(state,payload){
            state.success=payload
        },
        LoggedUser(state,payload){
            state.isLoggedin=true
            state.LoggedUser=payload
        },
        Logout(state){
            state.isLoggedin=false
        }

    }
})