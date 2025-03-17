function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="bg-slate-900 text-white px-6 py-4 flex items-center shadow-md"
      >
        <div className="text-2xl font-bold">CheckMyPlate</div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-4"
        >
          Welcome to CheckMyPlate
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600 mb-6"
        >
          Your trusted platform for smart plate checking 🚘
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </motion.button>
      </main>
    </div>
  )
}

export default App;