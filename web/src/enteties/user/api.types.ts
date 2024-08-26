// import {IResponseWrapperType} from "@/core/models/response-wrapper.type.ts";

// export type TResponseUserData = IResponseWrapperType<{
//     id: number,
//     fio: string,
//     email: string,
//     photo: IFileBase
// }>

export type TResponseUserData = {
  data: {
      _id: string,
      name: string
  }
}
