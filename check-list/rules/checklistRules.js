module.exports = [
    {
      name: "Valuation Fee Paid",
      evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "UK Resident",
      evaluate: (data) => data.isUkResident === true,
    },
    {
      name: "Risk Rating Medium",
      evaluate: (data) => data.riskRating === "Medium",
    },
    {
      name: "LTV Below 60%",
      evaluate: (data) => {
        const loanRequired = parseFloat(data.mortgage.loanRequired.replace(/[^\d.]/g, ""));
        const purchasePrice = parseFloat(data.mortgage.purchasePrice.replace(/[^\d.]/g, ""));
        const ltv = (loanRequired / purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  