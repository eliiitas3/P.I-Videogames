const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Videogameroutes = require('../routes/Videogameroutes')
const Videogamesroutes = require('../routes/Videogamesroutes')
const Genresroutes = require('../routes/Genresroutes.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames',Videogameroutes);
router.use('/videogame',Videogamesroutes );
router.use('/genre', Genresroutes);

module.exports = router;
