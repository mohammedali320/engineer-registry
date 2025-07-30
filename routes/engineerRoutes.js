const express = require('express')
const router = express.Router()

const dataController = require('../controllers/engineerRoutes')   // route handler functions
const viewController = require('../controllers/engineerViews')    // renders jsx views

// RESTful routes

// Index
router.get('/', dataController.index, viewController.index)

// New (form)
router.get('/new', viewController.newView)

// Create
router.post('/', dataController.create, viewController.redirectShow)

// Show
router.get('/:id', dataController.show, viewController.show)

// Edit (form)
router.get('/:id/edit', dataController.show, viewController.edit)

// Update
router.put('/:id', dataController.update, viewController.redirectShow)

// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)

module.exports = router
