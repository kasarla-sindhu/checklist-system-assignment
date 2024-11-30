const checklistRules = require("../rules/checklistRules");

const evaluateChecklist = (data) => {
  return checklistRules.map((rule) => ({
    ruleName: rule.name,
    status: rule.evaluate(data) ? "Passed" : "Failed",
  }));
};

module.exports = { evaluateChecklist };
