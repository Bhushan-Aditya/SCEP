'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Component {
  id: string
  label: string
  icon?: React.ReactNode
  color: string
}

interface EnergyDiagramProps {
  title: string
  components: Component[]
  description: string
  imagePath?: string
  additionalContent?: {
    overview?: string
    advantages?: string[]
    applications?: string[]
    stats?: { label: string; value: string }[]
  }
}

export default function EnergyDiagram({
  title,
  components,
  description,
  imagePath,
  additionalContent,
}: EnergyDiagramProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-5 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Original Diagram Image */}
        {imagePath && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-6 mb-12 overflow-hidden"
          >
            <div className="relative w-full h-auto">
              <img
                src={imagePath}
                alt={`${title} flow diagram`}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </motion.div>
        )}

        {/* Information Section */}
        <div className="space-y-6">
          {/* How It Works */}
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">How It Works</h2>
            <div className="space-y-5 text-gray-700">
              {components.map((component, index) => (
                <div key={component.id} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 font-semibold text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 leading-tight">{component.label}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {getComponentDescription(title, component.label, index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content */}
          {additionalContent && (
            <>
              {/* Overview */}
              {additionalContent.overview && (
                <div className="glass rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-normal">{additionalContent.overview}</p>
                </div>
              )}

              {/* Statistics */}
              {additionalContent.stats && additionalContent.stats.length > 0 && (
                <div className="glass rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Key Statistics</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {additionalContent.stats.map((stat, index) => (
                      <div key={index} className="bg-white/50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                        <div className="text-gray-700 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Advantages */}
              {additionalContent.advantages && additionalContent.advantages.length > 0 && (
                <div className="glass rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Key Advantages</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalContent.advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start bg-white/50 rounded-lg p-4">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {additionalContent.applications && additionalContent.applications.length > 0 && (
                <div className="glass rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Applications</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalContent.applications.map((application, index) => (
                      <div key={index} className="flex items-start bg-white/50 rounded-lg p-4">
                        <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed">{application}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-2 leading-normal">
            Made by <span className="font-semibold text-white">Swastik Garg</span>
          </p>
          <p className="text-sm text-gray-400 leading-normal">
            Clean and Green Energy - Exploring Renewable Energy Systems
          </p>
        </div>
      </footer>
    </div>
  )
}

function getComponentDescription(title: string, componentLabel: string, index: number): string {
  if (title.includes('Wind')) {
    const descriptions = [
      'The wind rotates the turbine blades, converting kinetic energy from the wind into rotational mechanical energy.',
      'The gearbox increases the rotational speed from the low-speed shaft to the high-speed shaft, optimizing it for electricity generation.',
      'The rectifier converts AC power to DC, and the inverter converts it back to AC at the desired frequency and voltage for grid connection.',
    ]
    return descriptions[index] || 'A crucial component in the energy conversion process.'
  }

  if (title.includes('Hydro')) {
    const descriptions = [
      'Flowing or falling water strikes the turbine blades, causing them to rotate and convert water\'s kinetic energy into mechanical rotation.',
      'The rotating turbine spins the generator\'s rotor inside a magnetic field, inducing electrical current through electromagnetic induction.',
      'The rectifier/inverter system ensures the electricity is at the correct voltage and frequency for safe distribution and use.',
    ]
    return descriptions[index] || 'A crucial component in the energy conversion process.'
  }

  if (title.includes('Solar')) {
    const descriptions = [
      'Photovoltaic cells absorb sunlight and generate direct current (DC) electricity through the photovoltaic effect.',
      'The charge controller regulates the voltage and current from the solar panels to the battery, preventing overcharging and optimizing charging efficiency.',
      'The first inverter converts DC electricity to AC for immediate use or grid connection.',
      'The second inverter may provide additional power conditioning, backup power conversion, or handle different voltage requirements.',
    ]
    return descriptions[index] || 'A crucial component in the energy conversion process.'
  }

  return 'A crucial component in the energy conversion process.'
}
