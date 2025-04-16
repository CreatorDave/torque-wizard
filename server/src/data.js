const categories = [
  {
    id: '1',
    name: 'Engine',
    subcategories: [
      {
        id: '1-1',
        name: 'Engine Block',
        specifications: [
          { id: '1-1-1', name: 'Bore', unit: 'mm' },
          { id: '1-1-2', name: 'Stroke', unit: 'mm' },
          { id: '1-1-3', name: 'Displacement', unit: 'cc' }
        ]
      },
      {
        id: '1-2',
        name: 'Cylinder Head',
        specifications: [
          { id: '1-2-1', name: 'Valve Size', unit: 'mm' },
          { id: '1-2-2', name: 'Compression Ratio', unit: ':1' }
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
        specifications: [
          { id: '2-1-1', name: 'Gear Ratios', unit: '' },
          { id: '2-1-2', name: 'Final Drive', unit: '' }
        ]
      },
      {
        id: '2-2',
        name: 'Automatic Transmission',
        specifications: [
          { id: '2-2-1', name: 'Transmission Type', unit: '' },
          { id: '2-2-2', name: 'Gear Ratios', unit: '' }
        ]
      }
    ]
  }
];

module.exports = { categories }; 