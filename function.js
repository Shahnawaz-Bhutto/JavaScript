let obj={
    name :"shah",
    age:22,
    city:{
        name:["lahore","karachi","islamabad"],
        zip:[54000,75000,44000],

    },
    country:["pak","usa","uk"],
    cal:(...a)=>{
        return a.reduce((x,y)=>x+y);
    }
}
let {name,age,...country}=obj;
console.log(name);
console.log(age);
console.log(country);
console.log(obj.cal(2,3));




let arr=[1,2,3,4,5,6,7,8,9];
let [a,b,c,d, ...e]=arr;
console.log(a);   
console.log(b);
console.log(c);
console.log(d);
console.log(e);

