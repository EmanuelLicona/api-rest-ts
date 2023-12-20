import { Request, Response } from 'express'
import { HandleHttpError } from '../utils/error.handle'
import { create, update, getAll, getOne, deleteOne } from '../services/car.services'

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const resp = await getAll()
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_GET_ITEMS')
  }
}

export const getOneCar = async ({ params: { id } }: Request, res: Response) => {
  try {
    const response = await getOne(id)
    res.send(response)
  } catch (error) {
    HandleHttpError(res, 'ERROR_GET_ITEM')
  }
}

export const createCar = async ({ body }: Request, res: Response) => {
  try {

    const resp = await create({ ...body })
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_CREATE_ITEM')
  }
}

export const updateCar = async ({ body, params: { id } }: Request, res: Response) => {
  try {

    const resp = await update(id, { ...body })
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_UPDATE_ITEM')
  }
}

export const deleteCar = async ({ params: { id } }: Request, res: Response) => {
  try {
    const resp = await deleteOne(id)
    res.send(resp)
  } catch (error) {
    console.log(error)
    HandleHttpError(res, 'ERROR_DELETE_ITEM')
  }
}