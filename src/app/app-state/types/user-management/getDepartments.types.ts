export interface getDepartments {
    dealerID: Number;
    userid: Number;
    fromDate: Number;
    todate: Number;
  }
  
  
  export interface getDepartmentsBody {
  
  }
  export interface getDepartmentResponse {
    approvedRequests: null
    isWorkFlowEnabled:null
    myRequest:null
    pendingRequests: null
    allDepartments:AllDepartments[]
  }


  export interface AllDepartments{
    id: number,
    channelId: number,
    tenant_Id: number,
    tenant_Name:string,
    name_English:string,
    name_Arabic:string,
    value: string,
    is_Active: null,
    created_By: number,
    created_By_Name: string,
    created_On: string,
    modified_By: number,
    modified_By_Name: null,
    modified_On:string,
    is_In_Use: null,
    isWorkFlow: null,
    action: number,
    approvedBy: number,
    approvedOn:string,
    workFlowStatus: number,
    masterId: number,
    approvedByName: null,
    remark: null
}
  