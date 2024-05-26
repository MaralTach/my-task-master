import Swal from "sweetalert2"

export enum SweetIcon {
    SUCCESS = "success",    

}

export const notify = (msg: string) =>Swal.fire({ 
    title:"Success",
    icon:"success",
    timer:2000
    
})

