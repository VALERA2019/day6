var students = [{
    "id" : 1,
    "pib" : "Sladkova Olga",
    "zdav" : true,
    "src": "https://orig00.deviantart.net/ee08/f/2009/073/e/d/free_red_panda_icon_100x100_by_supertuffpinkpuff.png"
},
{
    "id" : 2,
    "pib" : "Dragan Olga",
    "zdav" : false,
    "src": "https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464"
},
{
    "id" : 3,
    "pib" : "Buro Olga",
    "zdav" : true,
    "src": "https://vignette.wikia.nocookie.net/adventuretime/images/9/99/AT_Icons_100x100_Jake.jpg/revision/latest?cb=20120919222926&path-prefix=ar"
}
];

new Vue({
     el: '#app',
     data: {
         students: [],
         search:'',
         pib:null,
         zdav:false,
         group:"RPZ1",
         action:"Add",
         redaction:[],
         redactionData:[],
     },	 
     mounted: function(){
         //this.students = students;
     },
     methods: {
         deleteById:function(id){

            this.students=this.students.filter((el)=>{return el.id!=id});

         },
         AddElement:function(){
            this.students.push({
                "id" : this.students.length+1,
                "pib" : this.pib,
                "zdav" :  this.zdav,
               "group" : this.group,
            });
         }, 
         redactionFunc:function(id){
            // console.log(id);

            this.redaction.push(
                id
            )
            this.redactionData[id-1]={
                "id":id, 
                "pib":this.students[id-1].pib,
            }
               
            ;
            console.log(this.redactionData)

         },
         confirmed:function(id){

            const record=  this.redactionData.map((el=>{

                if(el.id==id){
                    console.log(el.id);
                    return el;}

            }))

                console.log(record);

            this.students=this.students.map((el)=>{

                   if(el.id==record[0].id){
                       return{
                           ...el,
                           "pib" : record[0].pib,
                       }
                   }else{
                       return el;
                   }

            });

            console.log(this.students);

            this.redaction=this.redaction.filter((el)=>{return el!=id});
            this.redactionData=this.redactionData.filter((el)=>{return el!=id});
        }
     },
  
 });     

//"redactionData[redactionData.length-1].pib"  "redactionData.map((el)=>(item.id=el.id)?{return el}:{})[0]"