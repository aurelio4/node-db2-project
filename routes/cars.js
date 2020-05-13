const express = require("express")
const db = require('../data/dbConnection')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const car = await db('cars')

    if (car) {
      res.status(200).json(car)
    } else {
      res.status(400).json({
        error: 'could not find cars'
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const car = await db('cars').where({
      id: req.params.id
    })

    if (car) {
      res.status(200).json(car)
    } else {
      res.status(400).json({
        error: 'could not find car with that id'
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const {
      vin,
      make,
      model,
      mileage
    } = req.body
    console.log(vin)
    if (!vin || !make || !model || !mileage) {
      res.status(400).json({
        error: "missing data"
      })
    } else {
      const newCar = {
        vin,
        make,
        model,
        mileage
      }
      const newCarEntry = await db('cars').insert(newCar)
      if (newCarEntry) {
        res.status(201).json({
          success: "created"
        })
      } else {
        res.status(400).json({
          error: "couldn't create car"
        })
      }
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: "couldn't fulfill request"
    })
  }
})

module.exports = router