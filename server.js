const express = require("express");
const cors = require("cors");
const postRoute = require("./backend/router/post");
require("./backend/config/connect");  
 
const app = express();
app.use(cors())
app.use(express.json());
app.use("/post", postRoute);

// Gestion des erreurs - Route non trouvée
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});



// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
