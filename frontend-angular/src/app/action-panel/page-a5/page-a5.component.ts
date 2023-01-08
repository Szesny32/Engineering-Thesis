import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a5',
  templateUrl: './page-a5.component.html',
  styleUrls: ['./page-a5.component.scss']
})
export class PageA5Component implements OnInit {

  constructor() { }
  selectedLevel:number = 0;
  output: string = "";
  runOp: number = 0;
  configOp: number = 0;
  

  conn: DbConnection = {
    url: 'jdbc:mysql://localhost:3306/springjdbc',
    username: 'secret_username',
    passwd: 'secret_password',
  }

  envs: Env[]=[
    {  
      variable: "DB_HOST",
      value: "jdbc:mysql://localhost:3306/springjdbc"
    },
    {  
      variable: "DB_USERNAME",
      value: "secret_username"
    },
    {  
      variable: "DB_PASSWORD",
      value: "secret_password"
    }
  ];


  setDialog(page: number){
    this.selectedLevel = page;
    this.output = "";
    this.runOp = 0;
    this.configOp= 0;
    
  }


  ngOnInit(): void {
  }


  async runTab(){
    this.configOp = 0;
    if(this.runOp == 0){

      let connection: boolean = false;
      if(this.selectedLevel == 0){
        connection = this.checkConnection(false);
      } else if(this.selectedLevel == 1){
        connection = this.checkConnection(true);
      }
      if(connection == false){

        await this.delay(1000);
        this.output = "Error";
        this.runOp = 2;
      } else{
        this.runOp = 1;
        this.output = "Run succesfuly build."
      }
          
    } else {
      this.runOp = 0;
      this.output = "";
    }
  }

  configTab(){
    if(this.selectedLevel==1)
      this.configOp = 1- this.configOp;
  }


  checkConnection(envConfig: boolean): boolean{

    if(envConfig){
      return (this.envs[0].value === "jdbc:mysql://localhost:3306/springjdbc" &&
              this.envs[1].value==="secret_username" &&
              this.envs[2].value==="secret_password");
    }
    else
      return  this.conn.url == "jdbc:mysql://localhost:3306/springjdbc" &&
              this.conn.username=="secret_username" &&
              this.conn.passwd=="secret_password"; 
  }

      
  delay(ms: number){
    return new Promise(resolve => {
      setInterval(resolve, ms); 
    });
  }



}


export interface DbConnection{
  url: string;
  username: string;
  passwd: string;
}

export interface Env{
  variable: string;
  value: string;
}

