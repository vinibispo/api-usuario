const {Router} = require('express')
const routes = Router()

routes.get('/', User.findAll)
routes.post('/add', User.add)
routes.put('/:id', User.update)
routes.delete('/:id', User.exclude)

module.exports = routes