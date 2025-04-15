const categories = [
  {
    id: '1',
    name: 'Automotive',
    subcategories: [
      {
        id: '1-1',
        name: 'Engine Components',
        categoryId: '1',
        items: [
          {
            id: '1-1-1',
            categoryId: '1',
            subcategoryId: '1-1',
            name: 'Cylinder Head Bolts',
            description: 'Main cylinder head fasteners',
            torqueValue: 65,
            unit: 'ft-lb',
            notes: 'Torque in sequence, 3-step process',
            lastUpdated: '2024-02-15'
          },
          {
            id: '1-1-2',
            categoryId: '1',
            subcategoryId: '1-1',
            name: 'Camshaft Sprocket',
            description: 'Camshaft timing sprocket bolts',
            torqueValue: 45,
            unit: 'ft-lb',
            notes: 'Use thread locker',
            lastUpdated: '2024-02-15'
          }
        ]
      },
      {
        id: '1-2',
        name: 'Wheels and Brakes',
        categoryId: '1',
        items: [
          {
            id: '1-2-1',
            categoryId: '1',
            subcategoryId: '1-2',
            name: 'Wheel Lug Nuts',
            description: 'Standard wheel mounting bolts',
            torqueValue: 100,
            unit: 'ft-lb',
            notes: 'Use star pattern',
            lastUpdated: '2024-02-15'
          },
          {
            id: '1-2-2',
            categoryId: '1',
            subcategoryId: '1-2',
            name: 'Brake Caliper Mounting',
            description: 'Caliper bracket mounting bolts',
            torqueValue: 85,
            unit: 'ft-lb',
            notes: 'Use thread locker',
            lastUpdated: '2024-02-15'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Aerospace',
    subcategories: [
      {
        id: '2-1',
        name: 'Aircraft Structures',
        categoryId: '2',
        items: [
          {
            id: '2-1-1',
            categoryId: '2',
            subcategoryId: '2-1',
            name: 'Wing Spar Bolts',
            description: 'Main wing structure fasteners',
            torqueValue: 120,
            unit: 'ft-lb',
            notes: 'Critical safety component',
            lastUpdated: '2024-02-15'
          },
          {
            id: '2-1-2',
            categoryId: '2',
            subcategoryId: '2-1',
            name: 'Fuselage Frame',
            description: 'Fuselage structural fasteners',
            torqueValue: 95,
            unit: 'ft-lb',
            notes: 'Use calibrated torque wrench',
            lastUpdated: '2024-02-15'
          }
        ]
      },
      {
        id: '2-2',
        name: 'Engine Components',
        categoryId: '2',
        items: [
          {
            id: '2-2-1',
            categoryId: '2',
            subcategoryId: '2-2',
            name: 'Turbine Blade Mounting',
            description: 'Turbine blade retention bolts',
            torqueValue: 150,
            unit: 'in-lb',
            notes: 'Critical safety component',
            lastUpdated: '2024-02-15'
          },
          {
            id: '2-2-2',
            categoryId: '2',
            subcategoryId: '2-2',
            name: 'Compressor Housing',
            description: 'Compressor section fasteners',
            torqueValue: 180,
            unit: 'in-lb',
            notes: 'Use thread locking compound',
            lastUpdated: '2024-02-15'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Industrial',
    subcategories: [
      {
        id: '3-1',
        name: 'Heavy Machinery',
        categoryId: '3',
        items: [
          {
            id: '3-1-1',
            categoryId: '3',
            subcategoryId: '3-1',
            name: 'Excavator Track Bolts',
            description: 'Track assembly mounting bolts',
            torqueValue: 450,
            unit: 'ft-lb',
            notes: 'Use impact wrench',
            lastUpdated: '2024-02-15'
          },
          {
            id: '3-1-2',
            categoryId: '3',
            subcategoryId: '3-1',
            name: 'Crane Boom Pins',
            description: 'Boom section connection pins',
            torqueValue: 600,
            unit: 'ft-lb',
            notes: 'Critical load bearing component',
            lastUpdated: '2024-02-15'
          }
        ]
      },
      {
        id: '3-2',
        name: 'Hydraulic Systems',
        categoryId: '3',
        items: [
          {
            id: '3-2-1',
            categoryId: '3',
            subcategoryId: '3-2',
            name: 'Hydraulic Pump Mounting',
            description: 'Pump mounting flange bolts',
            torqueValue: 75,
            unit: 'ft-lb',
            notes: 'Use thread sealant',
            lastUpdated: '2024-02-15'
          },
          {
            id: '3-2-2',
            categoryId: '3',
            subcategoryId: '3-2',
            name: 'Valve Block Assembly',
            description: 'Hydraulic valve block fasteners',
            torqueValue: 35,
            unit: 'ft-lb',
            notes: 'Torque in sequence',
            lastUpdated: '2024-02-15'
          }
        ]
      }
    ]
  }
];

module.exports = { categories }; 