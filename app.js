
/*
<div id='prent'>//its a nested strructure , how to create these kind of structers 
<div id='child'>
<h1></h1>
</div>
</div>
*/
//below is way to write code for above structure


const parent=React.createElement('div',{id:'parent'}, 
    React.createElement('div',{id:'child'},
        // React.createElement('h1',{},"i am h1 tag")// when only 1 children
        [ React.createElement('h1',{},"i am h1 tag"), React.createElement('h2',{},"i am h2 tag")]// if more than 1 child then use arraymethod but here we will get output as desired, but throw warning , that we willsee later
    )
);
        console.log("parent before rendering", parent)
        // root_make.render(parent)//here 3rd argument is whatever we need to put inside 'div' , means children of elemtn that is created and if we want more than one children then we can use arrray as used above
// const heading =React.createElement('h1',{},'hello world from react')// we can give attributes to the empty object {} inthe middle of arguments , attributes are given to h1 , eg is below
const heading=React.createElement('h1',
    {
        id:'heading',
        syx:"abd"
    },
    "hello world from react"
)  // here if we do console.log(heading) , means what is heading , heading is an javascript object (not an h1 tag elemnt) containg h1 with some attributes and innercontent in it 
const root_make=ReactDOM.createRoot(document.querySelector('#div'))
root_make.render(heading)//renders mehtod is responsible for converting heading from object into h1 tag and inserting or put it in the root_make(root element of reactdom)
root_make.render(parent)// here only parent has replaced heading 
// but we can show both the parent and heading object by using this 
const combind=React.createElement('div',{},heading,parent)// we have made a div elemtn combining both the parent and heading , 
root_make.render(combind)// now combind object can be rendered in to root_make in order to show both the created objects , that have become tags afer rendering  


//reactelement(Object)=>HTML(Browser understands)   react object become html that browser understands only when it will be in html code , while rendering on to dom , converts itself in to the html  

//order of files matters alot , becuase javascrpt files of app.js can be linked after 2 react links only,, otherwise react wont work 

// what if we want one more child of div of parent id , which is having id of child2 , then that time we hav eto make an array of child of div of parent as id , that time code become messy , since we wanted to optimise , but things are geting messy ,
///thats why we use jsx to ignore messy things and to optimise code 
// learn why use crossorigin during inclusion of 2links 