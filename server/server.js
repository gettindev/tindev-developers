const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// mettre le script "start:server": "node server/index.js" dans package.json