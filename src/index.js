const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
  console.log('Server is up on port' + port)
})




// require('./db/mongoose')
// const User = require('./models/user')
// const Task = require("./models/task")
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())

// app.post('/users', async (req, res) => {
//   const user = new User(req.body)
//   // user.save()
//   //   .then(() => {
//   //     res.send(user)
//   //   })
//   //   .catch((e) => {
//   //     res.status(400).send(e)
//   //   })
//   try {
//     await user.save()
//     res.status(201).send(user)
//   } catch (e) {
//     res.status(400).send(e)

//   }




// })

// app.post('/tasks', async (req, res) => {
//   const task = new Task(req.body)
//   // task.save()
//   //   .then(() => {
//   //     res.send(task)
//   //   })
//   //   .catch((e) => {
//   //     res.status(400).send(e)
//   //   })
//   try {
//     const task = await task.save()
//     res.send(task)
//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

// app.get("/users", async (req, res) => {
//   try {
//     const user = await User.find({})
//     res.send(user)
//   } catch (e) {
//     res.status(500).send()
//   }


//   // .then((users) => {
//   //   res.send(users)
//   // })
//   // .catch((e) => {
//   //   res.status(500).send()

//   // })
// })

// app.get("/users/:id", async (req, res) => {
//   const _id = req.params.id
//   // User.findById(_id)
//   //   .then((user) => {
//   //     if (!user) {
//   //       return res.status(404).send()
//   //     }
//   //     res.send(user)


//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send()

//   //   })
//   try {
//     const user = await User.findById(_id)
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send()

//   }

// })

// app.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body)

//   const allowedUpdates = ['name', 'email', 'password', 'age']
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   )
//   if (!isValidOperation) {
//     return res.status(400).send({
//       error: 'Invalid updates!'
//     })
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     })
//     if (!user) {
//       res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(400).send(e)
//   }
// })

// app.patch('/tasks/:id', async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['completed', 'description']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//   if (!isValidOperation) {
//     return res.status(400).send({
//       error: 'Invalid Updates'
//     })
//   }
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     })
//     if (!task) {
//       res.status(404).send()
//     }
//     res.send(task)
//   } catch (e) {
//     res.status(400).send(e)
//   }


// })
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id)
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send()
//   }
// })
// app.delete('/tasks/:id', async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id)
//     if (!task) {
//       return res.status(404).send()
//     }
//     res.send(task)
//   } catch (e) {
//     res.status(500).send()
//   }
// })



// app.get('/tasks', async (req, res) => {
//   try {
//     const task = await Task.find({})
//     res.send(task)
//   } catch (e) {
//     res.status(500).send()


//   }

//   // .then((tasks) => {
//   //   res.send(tasks)
//   // })
//   // .catch((e) => {
//   //   res.status(500).send()
//   // })
// })

// app.get('/tasks/:id', async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id)
//     if (!task) {
//       return res.status(404).send()
//     }
//     res.send(task)



//   } catch (e) {
//     res.status(500).send()
//   }


//   // .then((task) => {
//   //   if (!task) {
//   //     return res.status(404).send()
//   //   }
//   //   res.send(task)
//   // }).catch((e) => {
//   //   res.status(500).send()
//   // })
// })

// app.listen(port, () => {
//   console.log('Server is running on port: ' + port)
// })