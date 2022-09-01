/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
import Route from '@ioc:Adonis/Core/Route'



Route.get('/', async () => {
  return { hello: 'world' }
})


Route.get('/users', async () => {
  return { hi: 'you'}
})


Route.group(() => {
  Route.get('/projects', 'ProjectsController.index')
})

 
 
// Route
//   .resource('projects', 'ProjectsController')
//   .paramFor('projects', 'project')
//   .apiOnly();