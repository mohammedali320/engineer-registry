const RESOURCE_PATH = '/engineers'

const viewController = {
  index(req, res, next){
    res.render('engineers/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('engineers/Show', res.locals.data)   
  },
  edit(req, res, next){
    res.render('engineers/Edit', res.locals.data)  
  },
  newView(req, res, next){
    res.render('engineers/New', res.locals.data)    
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    } else {
      res.redirect(RESOURCE_PATH)
    }
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController
