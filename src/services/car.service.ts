import { ICar } from '../interfaces/car.interface'
import { Car } from '../models/car.entity'


const create = async (car: ICar) => {
  const responseInsert = await Car.save({
    ...car
  })
  return responseInsert
}


const getAll = async () => {
  const cars = await Car.find()
  return cars
}

const getOne = async (id: string) => {
  const car = await Car.findOneBy({ id })
  return car
}

const update = async (id: string, car: ICar) => {
  const responseUpdate = await Car.update({ id: car.id }, {
    ...car
  })

  return { id, ...car }
}

const deleteOne = async (id: string) => {
  const responseDelete = await Car.delete({ id })

  if (responseDelete.affected === 0) {
    return { id, message: 'Car not found' }
  }

  return { id, message: 'Car deleted' }
}

export { create, update, getAll, getOne, deleteOne }