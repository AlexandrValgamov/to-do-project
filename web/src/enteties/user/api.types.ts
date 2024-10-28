// import {IResponseWrapperType} from "@/core/models/response-wrapper.type.ts";

// export type TResponseUserData = IResponseWrapperType<{
//     id: number,
//     fio: string,
//     email: string,
//     photo: IFileBase
// }>

export type TResponseUserData = {
  // data: {
    userId: string,
    // name: string
    token: string;
  // };
};
