import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  @Input() selectedPage:number;

  userActivities: Hobby[]=[
    {
      name: "Alcohol"
    },
    {
      name: "Spice Girls"
    },
  ]
  user2: A4_User = {
    id: 2, 
    name: "Rebecca",
    surname: "Saunders Butcher", 
    birthday: "16.12.1976", 
    age : 29, 
    photoURL: "https://64.media.tumblr.com/564d65616b7794ebce52f77cbbb0a9ca/66756dbc28f7560f-f1/s540x810/f88ab0cab0fecb4ad743dc29cd35c796ed95ca2e.jpg",
  };

  user3: A4_User = {
    id: 3, 
    name: "Sam ",
    surname: "Butcher", 
    birthday: "17.03.1950", 
    age : 72, 
    photoURL: "https://media.distractify.com/brand-img/Dmjt5GWD6/0x0/where-are-butchers-parents-the-boys-2-1656717153297.jpg",
  };

  user4: A4_User = {
    id: 4, 
    name: "Hugh",
    surname: "Campbell Jr", 
    birthday: "24.04.1992", 
    age : 30, 
    photoURL: "https://i.pinimg.com/474x/40/61/fc/4061fc5b29193e3212ba910c6c8d836c.jpg",
  };
  user5: A4_User = {
    id: 5, 
    name: "John",
    surname: "Homelander", 
    birthday: "4.07.1981", 
    age : 39, 
    photoURL: "https://www.serialowa.pl/wpr/wp-content/uploads/2022/07/The-Boys-Henry-Cavill-Homelander-czolo.jpg",
  };


  userRelationships: UserRelationships[] = [
    {
      type: "Wife",
      user: this.user2
    },
    {
      type: "Father",
      user: this.user3
    },
    {
      type: "Friend",
      user: this.user4
    },
    {
      type: "Friend",
      user: this.user5
    }
];
  


  userDetails: UserDetails =
  {
    education: "Royal School of Dunkeld",
    profession: "FBSA | CIA | Royal Marines",
    birthplace: "Dunkeld",
    country: "United States of America",
    city: "New York",
    activities: this.userActivities
  }



  userPosts: Post[] =[
    {
      post: "Don't You Worry. Daddy's Home.",
      photoURL: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/BILLY-BUTCHER-Daddys-Home.jpg?q=50&fit=crop&w=750&dpr=1.5",
      likes: 53
    },
    {
      post:"Terror and his new friend!",
      photoURL: "https://img.ibxk.com.br/2020/09/18/18132317688167.jpg",
      likes: 47
    },
    {
      post: "Never Go Into Shark-Infested Waters Without Chum.",
      photoURL: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/BILLY-BUTCHER-Hughie.jpg?q=50&fit=crop&w=750&dpr=1.5",
      likes: 27
    },
    {
      post: "Our 13th anniversary! And to think that we met in elementary school...",
      photoURL: "https://i.pinimg.com/564x/95/c3/51/95c3517dd0584c504575e51898bc51d5.jpg",
      likes: 123
    }
  ];

  userData: A4_UserData = {
    userPosts: this.userPosts,
    userDetails: this.userDetails,
    userRelationships: this.userRelationships
  };


  user: A4_User = {
    id: 1, 
    name: "William",
    surname: "Butcher", 
    birthday: "16.12.1996", 
    age : 26, 
    photoURL: "https://i.pinimg.com/736x/cf/8d/d2/cf8dd2106266a7e3411a26411a26cf47.jpg",
  };


  ngOnInit(): void {
  }


  selectPage(page: number){
    this.selectedPage = page;
  }
}


export interface A4_User{
  id: number;
  name:string;
  surname:string;
  birthday: string;
  age: number;
  photoURL: string;
}


export interface A4_UserData{
  userPosts: Post[];
  userDetails: UserDetails;
  userRelationships: UserRelationships[];
}
export interface Post{
  post: string;
  photoURL: String;
  likes: number;
}

export interface UserDetails{
  education: string;
  profession: string;
  birthplace: string;
  country: string;
  city: string;
  activities: Hobby[];
}

export interface UserRelationships{
  type: string;
  user: A4_User;
}

export interface Hobby{
  name: string;
}