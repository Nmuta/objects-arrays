//ARRAYS && OBJECTS ==============

/* Exercise: Take this deeply nested reference type and write the code to find the following values:

The email of user 1.
The title of user 5.
The user id of the first user in the users array. :
var obj = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
}*/
console.log(obj.users[0].email + " " + obj.users[2].title + " " + obj.users[0].user_id)

/*Exercise: How would you access the text "Access me!" from the following object? :
var graphObject = {
  version:1,
  graph:{
    viewport:{
      xmin:-10,
      ymin:-3.367158671586716,
      xmax:10,
      ymax:3.367158671586716
    }
  },
  expressions:{
    list:[
      {
        id:"1",
        type:"expression",
        latex:"y=x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#C0504D",
        style:"normal"
      }, {
        id:"2",
        type:"expression",
        latex:"y=2x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#4F81BD",
        style:"normal"
      }, {
        id:"4",
        type:"text",
        text:"Access me!"
      }, {
        id:"5",
        type:"expression",
        latex:"",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#8064A2",
        style:"normal"
      }
    ]
  }
}*/
 console.log(graphObject.expressions.list[2].text)
