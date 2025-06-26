export const roadmapData = [
  {
    region: "Roll Out - USA",
    locations: [
      { code: "ORD", date: "13.01", status: "completed" },
      { code: "MSP", date: "12.02", status: "completed" },
      { code: "BHM", date: "07.03", status: "completed" },
      { code: "ATL", date: "31.03", status: "completed" },
      { code: "CLT", date: "16.04", status: "in-progress" },
      { code: "LAX", date: "02.06", status: "in-progress" },
      { code: "HOU", date: "19.06", status: "in-progress" },
      { code: "MIA", date: "14.07", status: "open" },
    ],
  },
  {
    region: "Roll Out - Germany",
    locations: [
      { code: "MUC", date: "17.02", status: "completed" },
      { code: "MHG", date: "19.05", status: "in-progress" },
      { code: "FRA", date: "23.06", status: "in-progress" },
    ],
  },
  {
    region: "Roll Out - Europe",
    locations: [
      { code: "BUD", date: "13.01", status: "completed" },
      { code: "MIL", date: "10.02", status: "completed" },
      { code: "MAN", date: "17.03", status: "completed" },
      { code: "BCN", date: "08.04", status: "completed" },
      { code: "LHR", date: "12.05", status: "in-progress" },
      { code: "BRU", date: "19.05", status: "in-progress" },
    ],
  },
  {
    region: "Roll Out - MEA/SAP/TOR",
    locations: [
      { code: "SYD", date: "28.01", status: "completed" },
      { code: "DXB", date: "17.02", status: "completed" },
      { code: "TOR", date: "17.03", status: "completed" },
      { code: "DEL", date: "14.04", status: "completed" },
      { code: "SIN", date: "24.03", status: "completed" },
      { code: "JNB", date: "05.05", status: "in-progress" },
    ],
  },
  {
    region: "Roll Out - New Warehouses (non THS)",
    locations: [
      { code: "MKE", date: "30.06", status: "in-progress" },
      { code: "STR", date: "Q4", status: "open" },
    ],
  },
]

export const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-brand-green text-white"
    case "in-progress":
      return "bg-yellow-500 text-white"
    case "open":
      return "bg-brand-blue text-white"
    default:
      return "bg-gray-300 text-gray-700"
  }
}
