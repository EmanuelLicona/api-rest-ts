import { Response } from "express";
import { IStorage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage.service";
import { HandleHttpError } from "../utils/error.handle";
import { IRequestAuth } from '../interfaces/request.interface';

const getFile = async (req: IRequestAuth, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: IStorage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    HandleHttpError(res, "ERROR_GET_BLOG");
  }
};

export { getFile };