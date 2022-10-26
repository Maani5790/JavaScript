function User(name,profileImage){
    this.id= Math.random().toFixed(8).slice(2)
    this.name= name
    this.profileImage=profileImage
    this.createdAt= Date.now()
    this.friends =[]
}
var user1 =new User('ali' ,'abc.png')
var user2 =new User('mushtaq' ,'abc.png')
var user3 =new User('faisal' ,'abc.png')
var users= [user1,user2,user3]


function addfriend(userId,friendId){
    for(var i=0; i < users.length ; i++){
        if(userId===users[i].id){
            users[i].friends.push(friendId)
        }
    }
}


function deletefriend(userId,friendId){
    for(var i=0; i < users.length ; i++){
        if(userId===users[i].id){
            // users[i].friends.splice(users[i].friends,1)
            var friendindex=users[i].friends.indexOf(friendId)
            users[i].friends.splice(friendindex,1)
        }
    }
}