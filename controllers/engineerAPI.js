const RESOURCE_PATH = '/engineers'
const APIController = {
  index(req, res, next){
    res.json(res.locals.data.engineers)
  },
  show(req, res, next){
    res.json(res.locals.data.engineer)
  },
  destroy(req, res, next){
    res.status(204).json({msg: 'record sucessfully deleted'})
   }
}

module.exports = APIController