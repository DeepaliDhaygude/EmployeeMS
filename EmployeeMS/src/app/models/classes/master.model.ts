export class userClass{

    UserId: number;
    Role: string;
    UserName: string;
    Password: string;
    DeptId: number;
    ReportsTo: number;
    EmployeeId: number;

    constructor(){
      this.UserId = 0;
      this.Role = "";
      this.UserName = "";
      this.Password = "";
      this.DeptId = 0;
      this.ReportsTo = 0;
      this.EmployeeId = 0;
    }
}

export class loginClass{
  UserName : string;
  Password : string;
  Token : string;
  constructor(){
    this.UserName = "";
    this.Password = "";
    this.Token = "";
  }
}
