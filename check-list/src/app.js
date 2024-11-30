const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { fetchApplicationData } = require("./services");
const { evaluateChecklist } = require("./evaluator");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/checklist/:id", async (req, res) => {
  const applicationId = req.params.id;
  try {
    const data = await fetchApplicationData(applicationId);
    const results = evaluateChecklist(data);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
