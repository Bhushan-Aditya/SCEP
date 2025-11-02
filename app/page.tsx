import Link from 'next/link'

const WindIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    {/* Curved air flow lines */}
    <path d="M3 8 Q8 6 13 8 T23 8" strokeWidth={1.5} fill="none"/>
    <path d="M3 12 Q8 10 13 12 T23 12" strokeWidth={1.5} fill="none"/>
    <path d="M3 16 Q8 14 13 16 T23 16" strokeWidth={1.5} fill="none"/>
  </svg>
)

const HydroIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    {/* Water droplet */}
    <path d="M12 2.5 C12 2.5 9 6 9 10 C9 12.5 10.5 14.5 12 14.5 C13.5 14.5 15 12.5 15 10 C15 6 12 2.5 12 2.5 Z" fill="currentColor" stroke="none"/>
    {/* Wavy lines at bottom */}
    <path d="M6 18 Q7 17 8 18 Q9 19 10 18 Q11 17 12 18 Q13 19 14 18 Q15 17 16 18 Q17 19 18 18" strokeWidth={1.5} fill="none"/>
  </svg>
)

const SolarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="22" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="5" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
    <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
  </svg>
)

export default function Home() {
  const energyTypes = [
    {
      name: 'Wind Energy',
      description: 'Harness the power of moving air through turbines',
      icon: WindIcon,
      href: '/wind',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Hydro Energy',
      description: 'Generate electricity from flowing water',
      icon: HydroIcon,
      href: '/hydro',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Solar Energy',
      description: 'Convert sunlight into electrical power',
      icon: SolarIcon,
      href: '/solar',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Clean and Green Energy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
              Explore the fascinating world of renewable energy systems and understand how they convert natural resources into usable power
            </p>
          </div>
        </div>
      </div>

      {/* Energy Types Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {energyTypes.map((energy, index) => (
              <Link
                key={energy.name}
                href={energy.href}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col">
                  <div className={`${energy.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <energy.icon className={`w-8 h-8 ${energy.iconColor}`} />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {energy.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {energy.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Info Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Understanding Renewable Energy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our portal provides interactive diagrams and detailed explanations of how different renewable energy systems work, 
              from initial energy capture to powering your devices. Click on any energy type above to explore its complete energy conversion process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">🌍 Environmental Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Renewable energy sources produce minimal greenhouse gas emissions, helping combat climate change and reduce our carbon footprint.
              </p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">⚡ Energy Efficiency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern renewable energy systems achieve high conversion efficiencies, making them increasingly competitive with traditional power sources.
              </p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">🔋 Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These energy sources are inexhaustible and can be harnessed indefinitely, ensuring long-term energy security for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-2 leading-normal">
            Made by <span className="font-semibold text-white">Swastik Garg</span>
          </p>
          <div className="text-sm leading-normal space-y-1">
            <p className="text-gray-400">Reg No: <span className="font-semibold text-white">RA2311003012280</span></p>
            <p className="text-gray-400">Dept: <span className="font-semibold text-white">Computing Technology</span></p>
          </div>
          <p className="text-sm text-gray-400 leading-normal mt-2">
            Clean and Green Energy - Exploring Renewable Energy Systems
          </p>
        </div>
      </footer>
    </div>
  )
}
