//store.js
import Vue from 'vue';

export let mystore =Vue.observable({count:0,name:'李四'});
export let mymutations={
    setCount(count){
        mystore.count=count;
    },
    changeName(name){
        mystore.name=name;
    }
}