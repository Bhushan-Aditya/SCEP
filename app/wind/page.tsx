import EnergyDiagram from '@/components/EnergyDiagram'

export default function WindEnergyPage() {
  return (
    <EnergyDiagram
      title="Wind Energy System"
      description="Wind energy systems harness the kinetic energy of moving air to generate electricity through a series of mechanical and electrical conversions."
      imagePath="/images/wind.jpeg"
      components={[
        {
          id: 'turbine',
          label: 'Turbine Blades',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
        {
          id: 'gearbox',
          label: 'Gearbox',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
        {
          id: 'rectifier',
          label: 'Rectifier/ Inverter',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
      ]}
      additionalContent={{
        overview: "Wind energy is one of the fastest-growing renewable energy sources worldwide. Wind turbines convert the kinetic energy of wind into mechanical power through rotating blades, which then drives a generator to produce electricity. Modern wind farms can power hundreds of thousands of homes, making wind energy a crucial component of the global transition to clean energy.",
        stats: [
          { label: 'Global Capacity', value: '>900 GW' },
          { label: 'Efficiency', value: '40-50%' },
          { label: 'Lifespan', value: '20-25 years' },
        ],
        advantages: [
          'Zero emissions during operation, making it completely clean energy',
          'Low operating costs once the turbine is installed',
          'Can be installed on land or offshore, maximizing potential locations',
          'Rapidly growing technology with increasing efficiency',
          'Provides energy independence and reduces reliance on fossil fuels',
        ],
        applications: [
          'Large-scale wind farms for utility-scale electricity generation',
          'Offshore wind installations in coastal areas',
          'Small-scale residential wind turbines for homes',
          'Hybrid systems combining wind with solar power',
          'Remote area power generation where grid connection is difficult',
        ],
      }}
    />
  )
}