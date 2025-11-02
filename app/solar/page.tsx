import EnergyDiagram from '@/components/EnergyDiagram'

export default function SolarEnergyPage() {
  return (
    <EnergyDiagram
      title="Solar Energy System"
      description="Solar photovoltaic systems convert sunlight directly into electricity using semiconductor materials, then condition it for practical use."
      imagePath="/images/solar.jpeg"
      components={[
        {
          id: 'solar-panel',
          label: 'Solar Panel (PV Cells)',
          color: 'bg-gradient-to-br from-blue-600 to-blue-800',
        },
        {
          id: 'charge-controller',
          label: 'Charge Controller',
          color: 'bg-gradient-to-br from-blue-600 to-blue-800',
        },
        {
          id: 'inverter1',
          label: 'Inverter',
          color: 'bg-gradient-to-br from-blue-600 to-blue-800',
        },
        {
          id: 'inverter2',
          label: 'Inverter',
          color: 'bg-gradient-to-br from-blue-600 to-blue-800',
        },
      ]}
      additionalContent={{
        overview: "Solar energy is the most abundant energy resource on Earth, with more energy from sunlight striking the planet in one hour than humanity uses in an entire year. Photovoltaic (PV) systems convert sunlight directly into electricity using semiconductor materials. The technology has seen dramatic cost reductions and efficiency improvements, making solar power one of the most accessible and rapidly expanding renewable energy sources.",
        stats: [
          { label: 'Global Capacity', value: '>1,400 GW' },
          { label: 'Efficiency', value: '15-22%' },
          { label: 'Lifespan', value: '25-30 years' },
        ],
        advantages: [
          'Abundant and inexhaustible energy source available worldwide',
          'Rapidly decreasing costs making it increasingly affordable',
          'Can be installed at any scale from small panels to massive farms',
          'Low maintenance requirements and long operational life',
          'Produces electricity during peak demand hours (daytime)',
        ],
        applications: [
          'Residential rooftop installations for homes',
          'Commercial and industrial solar power systems',
          'Utility-scale solar farms for grid electricity',
          'Solar-powered water pumps for agriculture',
          'Portable solar panels for camping and remote use',
        ],
      }}
    />
  )
}