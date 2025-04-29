enum TaskStatus {
    ToDo = "TODO", 
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Blocked = "BLOCKED",
}

interface Task{
    name:string,
    status : TaskStatus
}
function printStatusMessage(task:Task[])
{
    task.map((task)=>{

        switch (task.status)
        {
            case TaskStatus.ToDo:
                console.log("Start working on it ");
                break;
            case TaskStatus.Blocked :
                console.log("Need Help !");
                break;
            case TaskStatus.Completed : 
                console.log("Nice Work !");
                break;
            case TaskStatus.InProgress : 
                console.log("Keep it Up !");
                break;
        }
    })
}

printStatusMessage([{name:"go to gymn", status:TaskStatus.InProgress},{name:"walk",status : TaskStatus.Completed}]);




enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
}
interface RoleBased {
    name : string,
    role : UserRole
}
function standardRoles(user : RoleBased[])
{
    let result = user.filter((user) => user.role === UserRole.Editor)
    return result;
}

const users: RoleBased[] = [
    { name: "alice", role: UserRole.Admin },
    { name: "bob", role: UserRole.Editor },
    { name: "carol", role: UserRole.Viewer },
    {name: "dave", role: UserRole.Editor,}
];

let roles = standardRoles(users)
roles.map((role)=>{
    console.log(`${role.name} is an ${role.role} `);
    
});

enum NotificationType {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
  }
  
  interface NotificationConfig {
    color: string;
    icon: string;
  }
  
  function getNotificationConfig(type: NotificationType): NotificationConfig {
    switch (type) {
      case NotificationType.INFO:
        return { color: "blue", icon: "ℹ️" };
      case NotificationType.WARNING:
        return { color: "orange", icon: "⚠️" };
      case NotificationType.ERROR:
        return { color: "red", icon: "❌" };
      case NotificationType.SUCCESS:
        return { color: "green", icon: "✅" };
    }
  }
  
