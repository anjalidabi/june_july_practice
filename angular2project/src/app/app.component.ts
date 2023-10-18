import { Component } from '@angular/core';//import section
import { Router } from '@angular/router';

@Component({  //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//class to write code here 
  title = 'angular2project';
  //let/var/const city = 'pune';
  //any data type:city:any
  //property
  city?: string; //declaration of property

  city2: string = 'pune';//dec + def of property

  city3 = 'Mumbai';
  name = 'Anjali';
  no1 = 10;
  no2 = 20;
  no3 = 88;
  data1 = 50;
  cars: string[] = ['swift', 'jaguar', 'Audi'];
  car = this.cars[1];//jaguar
  student = { name: 'om', age: 20 };
  genderM = 'Male';
  genderF = 'Female';
  PaintingHobby = "Painting";
  SketchingHobby = "Sketching";
  ReadingHobby = "Reading";
  userHobbies: string[] = [];
  favCountry = "India";
  favFruit = "Apple";
  studentName: any = 'Anjali';
  num1 : any = 20;
  num2 : any = 30;
  result? : number;


heading : string = 'My first Page...';
myCityName? : string;
addNumber1 : any;
addNumber2 : any;
addResult : any;

circles: { id: number, isSelected: boolean, backgroundColor: string }[] = [];
nextCircleId = 1;
selectedCircle?: { id: number, isSelected: boolean, backgroundColor: string } ;



test = "Kolhapur";
test1 = "nashik";

constructor(private router:Router) { }      //to inject dependencies
  

  //lifecycle hooks


  //functions
  //Data binding:it is technique to link data between a component and the DOM
  // 1.one way data binding 2.two way data binding
  //1.one way data binding: 1.string interpolatin 2.propert binding 3.event binding
  //string interpolation:it is a  one way data binding technique: .ts/model to dom/html/template


  learningInterpolation() {   //default type of function 
    //return 'Dabi';
    return this.city2;
  }

  gen(data?: any) {
    console.log('data', data?.target.value);

  }

  Hobbies(event: any) {
    console.log(event.target.value);
    this.userHobbies.push(event.target.value);
    //this keyword use>>js: this keyword is getting used inside object to point objectskey
    //ts:this keyword is used to point global properties.It is also used in function to fetch value of global properies. 
    console.log(this.userHobbies);
    console.log(this.favCountry);


    this.favCountry = 'Malaysia';
    console.log(this.favCountry);
    this.gen();
  }

  fruit() {
    console.log(this.favFruit);
    this.learningInterpolation();
  }


  submit(event: any) {
    console.log(event);


  }
  addition() {
    //let number1 = 20;
    //let number2 = 30;
    // var res = number1 + number2;//addition by variable
     //console.log('addition result',res);
     this.result = parseInt(this.num1) + parseInt(this.num2) ; //addition by properties
     console.log('res-->',this.result);
     

  }
  addition1(event:any){
    this.num1 = event.target.value ;
  }
  addition2(event:any){
    this.num2 = event.target.value ;
  }

  heading1(){
    let PageHeading = 'my first Page'; 
  }

  additionOfNumber(){
    this.addResult = this.addNumber1 + this.addNumber2;
  }

  toggleSelectCircle(circle: { id: number, isSelected: boolean, backgroundColor: string }) {
    console.log(circle);
    console.log(this.selectedCircle);
    
     if (circle === this.selectedCircle) {
       circle.isSelected = !circle.isSelected;
       circle.backgroundColor == 'blue'? circle.backgroundColor ='grey' :circle.backgroundColor ='blue'
     } else {
       if(this.selectedCircle) {
         this.selectedCircle.isSelected = false;
         this.selectedCircle.backgroundColor = 'blue'
       }
       circle.isSelected = true;
       circle.backgroundColor = 'grey'
       this.selectedCircle = circle;
     }
   }
   addCircle() {
     const newCircle = {
       id: this.nextCircleId,
       isSelected: false,
       //backgroundColor: this.nextCircleId % 2 === 0 ? 'blue' : 'red'
       backgroundColor:'blue'
     };
     this.circles.push(newCircle);
     this.nextCircleId++;
   }
   
   landing(){
    this.router.navigateByUrl('landing')

   }
   
   

  
  }




