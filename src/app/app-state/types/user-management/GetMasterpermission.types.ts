export interface GetMasterpermission {
  add: null,
  approve:null,
   assign:null,
  delete:null,
  description:string,
  edit:null,
  id : string,
  is_Active:null,
  name:string,

 
}
  
  
  export interface permissionResponse {
    
      id: string,
      name: string,
      is_Active1: null|boolean,
      is_Active: null|boolean,
      description:string,
      add1: null |boolean,
      add: null |boolean,
      edit1: null|boolean,
      edit: null|boolean,
      delete1: null|boolean,
      delete: null|boolean,
      approve1: null|boolean,
      approve: null|boolean,
      assign1: null|boolean,
      assign: null|boolean,
  
  
  }
  export interface GetMasterpermissionBody {
  
  }
  
  