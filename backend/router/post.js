const express = require('express');
const router = express.Router();
const Post = require('../models/post');
router.get('/post', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
  });
  
router.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
  });

  
  router.post('/addpost', async (req, res) => {
    try {
      const newPost = new Post({
        titre: req.body.titre,
        contenu: req.body.contenu,
      });
  
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (err) {
      console.error('Erreur lors de la création du post:', err); // Ajout d'un log pour afficher l'erreur
      res.status(500).json({ error: 'Erreur lors de la création du post', details: err.message });
    }
  });
  

  module.exports = router;
