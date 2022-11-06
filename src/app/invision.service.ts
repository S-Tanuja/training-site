import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


interface login extends Array<login[]>{
  userName: any;
  id:number,
  name:string,
  password:string
}

interface addAdmin extends Array<login[]>{
  name: string;
  empId:number,
  email:string,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class InvisionService {
  // id:any;

  constructor(private http:HttpClient) { }

  getdetails():Observable<login[]>{
    return this.http.get<login[]>('http://localhost:3000/login')
  }

loginCheck():Observable<login[]>{
  return (this.http.get<login[]>('http://localhost:3000/login'));
}

postAdmin(data:any):Observable<addAdmin[]>{
  return (this.http.post<addAdmin[]>('http://localhost:3000/admin',data));
}

getAdmin():Observable<addAdmin[]>{
  return (this.http.get<addAdmin[]>('http://localhost:3000/admin'));
}

deleteAdmin(id:number):Observable<addAdmin[]>{
  return this.http.delete<addAdmin[]>('http://localhost:3000/admin'+id)
}

updateUser(pass:any,name:any,id:any){

  const body={

    userName: name,

    password: pass,

    id:id

  }

  return this.http.put('http://localhost:3000/login/'+id,body);

 }

}
