/*  APIRESTFUL-BASICMONGODBBACKEND/routes/fruitRoutes.js
       ____     __           _           _____        __
      / __/_ __/ /  ___ ____(_)__  ___  / ___/__  ___/ /__
 ___ _\ \/ // / _ \/ -_) __/ / _ `/ _ \/ /__/ _ \/ _  / -_)_____________________
|   /___/\_, /_.__/\__/_/ /_/\_,_/_//_/\___/\___/\_,_/\__/                      |
| Shorlo/___/                                                                   |
|                                                                               |
|   Copyright © 2022-2023 Javier Sainz de Baranda Goñi.                         |
|   Released under the terms of the GNU Lesser General Public License v3.       |
|                                                                               |
|   This program is free software: you can redistribute it and/or modify it     |
|   under the terms of the GNU General Public License as published by the Free  |
|   Software Foundation, either version 3 of the License, or (at your option)   |
|   any later version.                                                          |
|   This program is distributed in the hope that it will be useful, but         |
|   WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY  |
|   or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License     |
|   for more details.                                                           |
|                                                                               |
|   You should have received a copy of the GNU General Public License along     |
|   with this program. If not, see <http://www.gnu.org/licenses/>.              |
|                                                                               |
'==============================================================================*/

'use strict'

const express = require('express');
const router = express.Router();
const FruitController = require('../controllers/fruitController');

router.get('/test', FruitController.test);
router.post('/saveFruit', FruitController.saveFruit);
router.get('/getFruits', FruitController.getFruits);
router.get('/getFruitsOrderById', FruitController.getFruitsOrderById);
router.get('/getOneFruit/:id', FruitController.getOneFruit);
router.put('/updateFruit/:id', FruitController.updateFruit);
router.delete('/deleteFruit/:id', FruitController.deleteFruit);

module.exports = router;