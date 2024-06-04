const auKm = 149587870;

function conversion (Quantity) {
    return {
        au: Quantity, // 1
        totalAuKm: auKm * Quantity
    }
}

module.exports = conversion;