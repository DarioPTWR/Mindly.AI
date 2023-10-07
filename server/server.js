const PORT = 8000
const app = require('./controller/app')

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})