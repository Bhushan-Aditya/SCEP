import EnergyDiagram from '@/components/EnergyDiagram'

export default function HydroEnergyPage() {
  return (
    <EnergyDiagram
      title="Hydro Energy System"
      description="Hydroelectric systems convert the potential and kinetic energy of flowing water into electrical energy through turbines and generators."
      imagePath="/images/hydro.jpeg"
      components={[
        {
          id: 'turbine',
          label: 'Turbine',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
        {
          id: 'generator',
          label: 'Generator',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
        {
          id: 'rectifier',
          label: 'Rectifier/ Inverter',
          color: 'bg-gradient-to-br from-gray-600 to-gray-800',
        },
      ]}
      additionalContent={{
        overview: "Hydropower is the most mature and widely used renewable energy technology, accounting for approximately 16% of global electricity production. It works by capturing the energy of flowing or falling water through dams or run-of-river systems. The water's kinetic and potential energy spins turbines connected to generators, producing clean, reliable electricity.",
        stats: [
          { label: 'Global Capacity', value: '~1,400 GW' },
          { label: 'Efficiency', value: '80-90%' },
          { label: 'Lifespan', value: '50-100 years' },
        ],
        advantages: [
          'Highly reliable and consistent power generation',
          'Very high efficiency rate compared to other renewable sources',
          'Provides water storage for irrigation and flood control',
          'Long operational lifespan with minimal maintenance',
          'Can quickly adjust output to meet demand fluctuations',
        ],
        applications: [
          'Large dam projects for massive power generation',
          'Run-of-river systems with minimal environmental impact',
          'Pumped storage for grid energy storage',
          'Small-scale micro-hydropower for remote communities',
          'Tidal and wave energy systems in coastal areas',
        ],
      }}
    />
  )
}