import { createSlice } from "@reduxjs/toolkit";

 const Slice = createSlice({
    name:"todo",
    initialState:[
        {id:1,todo:"Study", completed:false},
        {id:2,todo:"Redux", completed:false},
        {id:3,todo:"Water plants", completed:true},
    ],
    reducers:{
        addTodo:(state,actions)=>{
             state.push(actions.payload)
        },
        remove : (state, action)=>{
            return state.filter(item =>item.id !== action.payload)
        },
        deleteAll :(state,action)=>{
            return [];
        },
        updatedtodo: (state,action)=>{
        let newArry = []
        let data = action.payload
        state.map((item)=>{
            if(item.id === data.id){
                item.id = data.id
                item.todo = data.todo
                item.completed =  data.completed
            }
            newArry.push(item)
        })
        return newArry;
        }
    }
})

export const {addTodo,remove,deleteAll,updatedtodo} = Slice.actions

export default Slice.reducer