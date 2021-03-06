export default function generateLetter(state) {
  const p1 = `I ${state.ownerName}, ${state.ownerRelation} ${state.ownerGurdian}, ${state.ownerAddress}, by caste ${state.ownerCast} by profession Business, do hearby authorise my driver namely ${state.driverName}, S/O ${state.driverFatherName}, Address: ${state.driverAddress}, being driving License No. ${state.driverLicenseNumber} vehicle registration number ${state.vehicle} in my consent.`;

  const p2 = `He will undertake to make the full responsibility of my said vehicle. This authorised letter will be valid from ${state.dateFrom} to ${state.dateTo}.`;

  return { p1, p2 };
}
