const router = require('express').Router()

const Car = require('../db/models/car')


// GET /api/cars
router.get('/', async(req, res, next) => {
   try {
      const cars = await Car.findAll()
  
      res.send(cars)
   } catch (error) {
      next(error)
   }
})

// GET /api/cars/:id
router.get('/:id', async (req, res, next) => {
   try {
      const car = await Car.findByPk(req.params.id)
  
      res.send(car)
   } catch (error) {
      next(error)
   }
})

// POST /api/cars/:id
router.post('/', async (req, res, next) => {
	try {
		res.status(201).send(await Car.create(req.body));
	} catch (error) {
		next(error);
	}
});

// UPDATE /api/cars/:id
router.put('/:id', async (req, res, next) => {
	try {
		const car = await Car.findByPk(req.params.id);
		res.send(await car.update(req.body));
	} catch (error) {
		next(error);
	}
});

// DELETE /api/cars/:id
router.delete('/:id', async (req, res, next) => {
	try {
		const car = await Car.findByPk(req.params.id);
		if (!car) {
			res.status(404).send('Car not found');
		}
		await car.destroy();
		res.send(car);
	} catch (error) {
		next(error);
	}
});

module.exports = router