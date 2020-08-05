const initState={
  projects:[
    {id:'1',title:'help me ',content:'bla bla bla'},
    {id:'2',title:'help me out',content:'bla bla bla'},
    {id:'3',title:'help me plz',content:'bla bla bla'}
  ]
}

const projectReducer=(state=initState,action)=>{
  return state;
}

export default projectReducer