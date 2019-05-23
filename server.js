const express = require('express');

const db = require('./data/accounts-model');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
   try {
      const accounts = await db.find(req.query);
      res.status(200).json(accounts);
   } catch {
      res.status(500).json({error: "There was an error getting the data"})
   }
})

server.get('/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const account = await db.findById(id);
      res.status(200).json(account);
   } catch {
      res.status(500).json({error: "There was an error getting the data"})
   }
})

server.post('/', async (req, res) => {
   const { body } = req;
   try {
      const account = await db.add(body);
      res.status(201).json(account);
   } catch {
      res.status(500).json({error: "There was an error posting the data"})
   }
})

server.put('/', (req, res) => {

})

server.delete('/', (req, res) => {
   
})

module.exports = server;