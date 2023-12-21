import { IStorage } from "../interfaces/storage.interface"
import { Storage as StorageModel } from "../models/storage.entity"

const registerUpload = async ({ fileName, idUser, path }: IStorage) => {
  const responseItem = await StorageModel.save({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };