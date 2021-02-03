const students=[
    {id:21, name:'omar sunny'},
    {id:22, name:'manna'},
    {id:23, name:'moyorri'},
    {id:24, name:'depjol'},
];

const names=students.map(s=>s.name);
const id=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>20);
const biggerOne=students.find(s=>s.id>20);
console.log(biggerOne);
