const categories = [
  {
    id: '1',
    name: 'Engine',
    subcategories: [
      {
        id: '1-1',
        name: 'Engine Block',
        categoryId: '1',
        items: [
          { 
            id: '1-1-1', 
            name: 'Main Bearing Cap Bolts', 
            categoryId: '1',
            subcategoryId: '1-1',
            description: 'Bolts that secure the main bearing caps to the engine block',
            torqueValue: 95,
            unit: 'Nm',
            notes: 'Tighten in sequence from center outward',
            lastUpdated: '2023-04-15T12:00:00Z'
          },
          { 
            id: '1-1-2', 
            name: 'Cylinder Head Bolts', 
            categoryId: '1',
            subcategoryId: '1-1',
            description: 'Bolts that secure the cylinder head to the engine block',
            torqueValue: 110,
            unit: 'Nm',
            notes: 'Use torque angle method for final tightening',
            lastUpdated: '2023-04-15T12:00:00Z'
          }
        ]
      },
      {
        id: '1-2',
        name: 'Cylinder Head',
        categoryId: '1',
        items: [
          { 
            id: '1-2-1', 
            name: 'Valve Cover Bolts', 
            categoryId: '1',
            subcategoryId: '1-2',
            description: 'Bolts that secure the valve cover to the cylinder head',
            torqueValue: 10,
            unit: 'Nm',
            notes: 'Tighten in a crisscross pattern',
            lastUpdated: '2023-04-15T12:00:00Z'
          },
          { 
            id: '1-2-2', 
            name: 'Camshaft Sprocket Bolts', 
            categoryId: '1',
            subcategoryId: '1-2',
            description: 'Bolts that secure the camshaft sprocket to the camshaft',
            torqueValue: 65,
            unit: 'Nm',
            notes: 'Use thread locker',
            lastUpdated: '2023-04-15T12:00:00Z'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Transmission',
    subcategories: [
      {
        id: '2-1',
        name: 'Manual Transmission',
        categoryId: '2',
        items: [
          { 
            id: '2-1-1', 
            name: 'Transmission Mount Bolts', 
            categoryId: '2',
            subcategoryId: '2-1',
            description: 'Bolts that secure the transmission mount to the transmission',
            torqueValue: 45,
            unit: 'Nm',
            notes: 'Tighten after transmission is fully seated',
            lastUpdated: '2023-04-15T12:00:00Z'
          },
          { 
            id: '2-1-2', 
            name: 'Clutch Pressure Plate Bolts', 
            categoryId: '2',
            subcategoryId: '2-1',
            description: 'Bolts that secure the clutch pressure plate to the flywheel',
            torqueValue: 25,
            unit: 'Nm',
            notes: 'Tighten in a star pattern',
            lastUpdated: '2023-04-15T12:00:00Z'
          }
        ]
      },
      {
        id: '2-2',
        name: 'Automatic Transmission',
        categoryId: '2',
        items: [
          { 
            id: '2-2-1', 
            name: 'Transmission Pan Bolts', 
            categoryId: '2',
            subcategoryId: '2-2',
            description: 'Bolts that secure the transmission pan to the transmission',
            torqueValue: 12,
            unit: 'Nm',
            notes: 'Tighten in a crisscross pattern',
            lastUpdated: '2023-04-15T12:00:00Z'
          },
          { 
            id: '2-2-2', 
            name: 'Torque Converter Bolts', 
            categoryId: '2',
            subcategoryId: '2-2',
            description: 'Bolts that secure the torque converter to the flexplate',
            torqueValue: 35,
            unit: 'Nm',
            notes: 'Tighten in a star pattern',
            lastUpdated: '2023-04-15T12:00:00Z'
          }
        ]
      }
    ]
  }
];

module.exports = { categories }; 