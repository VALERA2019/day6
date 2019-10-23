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
]

new Vue({
     el: '#app',
     data: {
         students: [],
         search:'',
         pib: "",
         
     },	 
     mounted: function(){
         this.students = students;
     },
     methods: {
        delsstudent: function(id) {
              

                this.students = this.students.filter(function(element){
                    return element.id != id;
                })
        },
        move:function (pib){
        this.students.push({
            "id" : 3,
            "pib" : this.pib,
        })

        }
     },
  
 });     

