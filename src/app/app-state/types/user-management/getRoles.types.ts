export interface getRoles {
    dealerID: Number;
    userid: Number;
    fromDate: Number;
    todate: Number;
  }
  
  
  export interface getRolesBody {
  
  }
  export interface GetRolesResponse {
    allRoles:any,
    isWorkFlowEnabled:null,
    myRequest: MyRequest[],
    approvedRequests: ApprovedRequest[],
    pendingRequests:PendingRequest[],
  }
  
  export interface ApprovedRequest {
    action: number
    approvedBy: number
    approvedByName: string
    approvedOn: string
    created_By: number
    created_By_Name: string
    created_On: string
    description: string
    id:string
    isWorkFlow:null
    is_Active: null
    masterId: number
    modified_By: number
    modified_By_Name:null
    modified_On: string
    name:string
    remark: null
    tenant_Id: string
    tenant_Name: string
    workFlowStatus: number
  }


  export interface MyRequest {
    action: number
      approvedBy: number
      approvedByName: string
      approvedOn: string
      created_By: number
      created_By_Name: string
      created_On: string
      description: string
      id:string
      isWorkFlow: null
      is_Active: null
      masterId: number
      modified_By: number
      modified_By_Name:null
      modified_On: string
      name:string
      remark: null
      tenant_Id: string
      tenant_Name: string
      workFlowStatus: number
    
  }
  export interface PendingRequest {
    
      action: number
      approvedBy: number
      approvedByName: string
      approvedOn: string
      created_By: number
      created_By_Name: string
      created_On: string
      description: string
      id:string
      isWorkFlow:null
      is_Active: null
      masterId: number
      modified_By: number
      modified_By_Name:null
      modified_On: string
      name:string
      remark: null
      tenant_Id: string
      tenant_Name: string
      workFlowStatus: number

    
  }
  